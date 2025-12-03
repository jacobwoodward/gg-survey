'use client';

import { useState, useEffect } from 'react';
import { personas } from '@/lib/questions';
import WaitlistForm from '@/components/WaitlistForm';

type ScheduleSettings = Record<string, boolean>;

export default function SchedulePage() {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);
  const [settings, setSettings] = useState<ScheduleSettings>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await fetch('/api/schedule/settings');
        if (res.ok) {
          const data = await res.json();
          setSettings(data.settings || {});
        }
      } catch (err) {
        console.error('Failed to fetch settings:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  const handleBack = () => {
    setSelectedPersona(null);
  };

  const isSchedulingEnabled = selectedPersona
    ? settings[selectedPersona] ?? true
    : false;

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="text-zinc-400">Loading...</div>
      </main>
    );
  }

  // Persona selector screen
  if (!selectedPersona) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-medium mb-2">Which best describes you?</h2>
              <p className="text-zinc-400">This helps me prepare for our chat.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => setSelectedPersona(persona.id)}
                  className="w-full p-4 text-left rounded-xl border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all group"
                >
                  <div className="font-medium group-hover:text-white transition-colors">
                    {persona.title}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    {persona.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Scheduling is disabled for this persona - show waitlist
  if (!isSchedulingEnabled) {
    const persona = personas.find((p) => p.id === selectedPersona);
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[600px] mx-auto space-y-8">
          <button
            onClick={handleBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <div className="space-y-4 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-zinc-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-medium">
              All interview slots have been filled
            </h1>
            <p className="text-zinc-400">
              Thanks for your interest
              {persona ? ` as a ${persona.title.toLowerCase()}` : ''}! We&apos;re
              building something to help professionals build meaningful
              relationships.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-zinc-300 mb-6 text-center">
              Join the waitlist to stay in the loop and be the first to know
              when we launch.
            </p>
            <WaitlistForm persona={selectedPersona} />
          </div>
        </div>
      </main>
    );
  }

  // Scheduling is enabled - show calendar
  const persona = personas.find((p) => p.id === selectedPersona);
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <button
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-zinc-200">
            <h2 className="text-lg font-medium text-zinc-900">
              Schedule a conversation
              {persona ? ` - ${persona.title}` : ''}
            </h2>
          </div>

          <div className="overflow-y-auto">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gEUykFPHy1ULvd7qrbnvAbv3chwoAT6ici7NXQhEqH2gcmWEcgQRHcOHQBz2c9eCLAmJA7yQe?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
