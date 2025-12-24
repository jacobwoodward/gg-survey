'use client';

import { useState } from 'react';
import { personas } from '@/lib/questions';
import InterviewInsightsReport from '@/components/InterviewInsightsReport';

type AdminTab = 'dashboard' | 'report';

interface SurveyResponse {
  id: number;
  persona: string;
  name: string;
  email?: string;
  title?: string;
  company?: string;
  responses: Record<string, string | string[] | number>;
  created_at: string;
}

interface WaitlistEntry {
  id: number;
  name: string;
  email: string;
  persona?: string;
  created_at: string;
}

interface PersonaSetting {
  persona_id: string;
  scheduling_enabled: boolean;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [waitlist, setWaitlist] = useState<WaitlistEntry[]>([]);
  const [personaSettings, setPersonaSettings] = useState<PersonaSetting[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [savingSettings, setSavingSettings] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const authRes = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (!authRes.ok) {
        setError('Invalid password');
        setLoading(false);
        return;
      }

      const [dataRes, waitlistRes, settingsRes] = await Promise.all([
        fetch('/api/admin/responses', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        }),
        fetch('/api/admin/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        }),
        fetch('/api/admin/settings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password }),
        }),
      ]);

      if (!dataRes.ok) {
        setError('Failed to fetch responses');
        setLoading(false);
        return;
      }

      const data = await dataRes.json();
      setResponses(data.responses);

      if (waitlistRes.ok) {
        const waitlistData = await waitlistRes.json();
        setWaitlist(waitlistData.entries || []);
      }

      if (settingsRes.ok) {
        const settingsData = await settingsRes.json();
        setPersonaSettings(settingsData.settings || []);
      }

      setIsAuthenticated(true);
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const toggleScheduling = async (personaId: string, currentValue: boolean) => {
    setSavingSettings(personaId);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          personaId,
          schedulingEnabled: !currentValue,
        }),
      });

      if (res.ok) {
        setPersonaSettings((prev) =>
          prev.map((s) =>
            s.persona_id === personaId
              ? { ...s, scheduling_enabled: !currentValue }
              : s
          )
        );
      }
    } catch (err) {
      console.error('Failed to update setting:', err);
    } finally {
      setSavingSettings(null);
    }
  };

  const getSchedulingEnabled = (personaId: string): boolean => {
    const setting = personaSettings.find((s) => s.persona_id === personaId);
    return setting?.scheduling_enabled ?? true;
  };

  const getResponsesByPersona = (personaId: string) => {
    return responses.filter((r) => r.persona === personaId);
  };

  const getPersonaQuestions = (personaId: string) => {
    const persona = personas.find((p) => p.id === personaId);
    return persona?.questions || [];
  };

  const formatValue = (value: string | string[] | number | undefined): string => {
    if (value === undefined) return '';
    if (Array.isArray(value)) return value.join('; ');
    return String(value);
  };

  const exportToCsv = (personaId: string) => {
    const personaResponses = getResponsesByPersona(personaId);
    const questions = getPersonaQuestions(personaId);

    if (personaResponses.length === 0) return;

    const headers = [
      'ID',
      'Name',
      'Email',
      'Title',
      'Company',
      'Submitted At',
      ...questions.map((q) => q.text),
    ];

    const rows = personaResponses.map((r) => [
      r.id,
      r.name,
      r.email || '',
      r.title || '',
      r.company || '',
      new Date(r.created_at).toLocaleString(),
      ...questions.map((q) => formatValue(r.responses[q.id])),
    ]);

    const csvContent = [
      headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(','),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    link.href = url;
    link.download = `${personaId}_${timestamp}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const exportWaitlistToCsv = () => {
    if (waitlist.length === 0) return;

    const headers = ['ID', 'Name', 'Email', 'Persona', 'Signed Up'];
    const rows = waitlist.map((entry) => [
      entry.id,
      entry.name,
      entry.email,
      entry.persona || '-',
      new Date(entry.created_at).toLocaleString(),
    ]);

    const csvContent = [
      headers.map((h) => `"${h.replace(/"/g, '""')}"`).join(','),
      ...rows.map((row) =>
        row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    link.href = url;
    link.download = `waitlist_${timestamp}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-6">
          <h1 className="text-2xl font-medium text-center">Admin Login</h1>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
              placeholder="Enter admin password"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-medium">Admin Dashboard</h1>
          {/* Tab Navigation */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'bg-white text-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'report'
                  ? 'bg-white text-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Interview Insights Report
            </button>
          </div>
        </div>

        {/* Report Tab Content */}
        {activeTab === 'report' && (
          <section className="mb-12">
            <InterviewInsightsReport />
          </section>
        )}

        {/* Dashboard Tab Content */}
        {activeTab === 'dashboard' && (
          <>
        {/* Scheduling Settings */}
        <section className="mb-12 p-6 rounded-xl border border-white/10 bg-white/5">
          <h2 className="text-xl font-medium mb-4">Scheduling Settings</h2>
          <p className="text-sm text-zinc-400 mb-6">
            Toggle scheduling availability for each persona. When disabled, users will see the waitlist signup form instead.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {personas.map((persona) => {
              const isEnabled = getSchedulingEnabled(persona.id);
              const isSaving = savingSettings === persona.id;
              return (
                <div
                  key={persona.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/5"
                >
                  <div>
                    <p className="font-medium">{persona.title}</p>
                    <p className="text-xs text-zinc-500">{persona.id}</p>
                  </div>
                  <button
                    onClick={() => toggleScheduling(persona.id, isEnabled)}
                    disabled={isSaving}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      isEnabled ? 'bg-green-500' : 'bg-zinc-600'
                    } ${isSaving ? 'opacity-50' : ''}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                        isEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Survey Responses Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-medium">Survey Responses</h2>
          <p className="text-zinc-400">{responses.length} total responses</p>
        </div>

        <div className="space-y-12">
          {personas.map((persona) => {
            const personaResponses = getResponsesByPersona(persona.id);
            const questions = getPersonaQuestions(persona.id);

            return (
              <section key={persona.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-medium">{persona.title}</h2>
                    <p className="text-sm text-zinc-400">
                      {personaResponses.length} responses
                    </p>
                  </div>
                  {personaResponses.length > 0 && (
                    <button
                      onClick={() => exportToCsv(persona.id)}
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                    >
                      Download CSV
                    </button>
                  )}
                </div>

                {personaResponses.length === 0 ? (
                  <div className="p-6 rounded-xl border border-white/10 text-center text-zinc-500">
                    No responses yet
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10 bg-white/5">
                          <th className="px-4 py-3 text-left font-medium">Name</th>
                          <th className="px-4 py-3 text-left font-medium">Email</th>
                          <th className="px-4 py-3 text-left font-medium">Title</th>
                          <th className="px-4 py-3 text-left font-medium">Company</th>
                          <th className="px-4 py-3 text-left font-medium">Submitted</th>
                          {questions.map((q) => (
                            <th
                              key={q.id}
                              className="px-4 py-3 text-left font-medium min-w-[200px]"
                              title={q.text}
                            >
                              {q.text.length > 40
                                ? q.text.substring(0, 40) + '...'
                                : q.text}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {personaResponses.map((response) => (
                          <tr
                            key={response.id}
                            className="border-b border-white/5 hover:bg-white/5"
                          >
                            <td className="px-4 py-3">{response.name}</td>
                            <td className="px-4 py-3 text-zinc-400">
                              {response.email || '-'}
                            </td>
                            <td className="px-4 py-3 text-zinc-400">
                              {response.title || '-'}
                            </td>
                            <td className="px-4 py-3 text-zinc-400">
                              {response.company || '-'}
                            </td>
                            <td className="px-4 py-3 text-zinc-400">
                              {new Date(response.created_at).toLocaleDateString()}
                            </td>
                            {questions.map((q) => (
                              <td key={q.id} className="px-4 py-3">
                                {formatValue(response.responses[q.id]) || '-'}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            );
          })}

          {/* Waitlist Section */}
          <section className="space-y-4 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium">Waitlist Signups</h2>
                <p className="text-sm text-zinc-400">
                  {waitlist.length} signups
                </p>
              </div>
              {waitlist.length > 0 && (
                <button
                  onClick={exportWaitlistToCsv}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
                >
                  Download CSV
                </button>
              )}
            </div>

            {waitlist.length === 0 ? (
              <div className="p-6 rounded-xl border border-white/10 text-center text-zinc-500">
                No waitlist signups yet
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="px-4 py-3 text-left font-medium">Name</th>
                      <th className="px-4 py-3 text-left font-medium">Email</th>
                      <th className="px-4 py-3 text-left font-medium">Persona</th>
                      <th className="px-4 py-3 text-left font-medium">Signed Up</th>
                    </tr>
                  </thead>
                  <tbody>
                    {waitlist.map((entry) => (
                      <tr
                        key={entry.id}
                        className="border-b border-white/5 hover:bg-white/5"
                      >
                        <td className="px-4 py-3">{entry.name}</td>
                        <td className="px-4 py-3 text-zinc-400">{entry.email}</td>
                        <td className="px-4 py-3 text-zinc-400">{entry.persona || '-'}</td>
                        <td className="px-4 py-3 text-zinc-400">
                          {new Date(entry.created_at).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
          </>
        )}
      </div>
    </main>
  );
}
