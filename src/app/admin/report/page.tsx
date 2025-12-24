'use client';

import { useState, useEffect } from 'react';
import InterviewInsightsReport from '@/components/InterviewInsightsReport';

export default function AdminReportPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing auth on mount
  useEffect(() => {
    const storedPassword = sessionStorage.getItem('adminPassword');
    if (storedPassword) {
      verifyAuth(storedPassword);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyAuth = async (storedPassword: string) => {
    try {
      const authRes = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: storedPassword }),
      });

      if (authRes.ok) {
        setPassword(storedPassword);
        setIsAuthenticated(true);
      } else {
        // Invalid stored password, clear it
        sessionStorage.removeItem('adminPassword');
      }
    } catch {
      sessionStorage.removeItem('adminPassword');
    } finally {
      setLoading(false);
    }
  };

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

      // Store password in sessionStorage for shared auth
      sessionStorage.setItem('adminPassword', password);
      setIsAuthenticated(true);
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state while checking auth
  if (loading && !isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-zinc-400">Loading...</div>
      </main>
    );
  }

  // Show login form if not authenticated
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

  // Show report page when authenticated
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-medium">Research Report</h1>
          {/* Navigation */}
          <div className="flex gap-2">
            <a
              href="/admin"
              className="px-4 py-2 rounded-lg font-medium transition-colors bg-white/10 hover:bg-white/20 text-white"
            >
              Dashboard
            </a>
            <span className="px-4 py-2 rounded-lg font-medium bg-white text-black">
              Report
            </span>
          </div>
        </div>

        <InterviewInsightsReport />
      </div>
    </main>
  );
}
