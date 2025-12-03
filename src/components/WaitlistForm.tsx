'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  persona?: string;
}

export default function WaitlistForm({ persona }: WaitlistFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      setErrorMessage('Please fill in all fields');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, persona }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
    } catch {
      setErrorMessage('Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-medium">You&apos;re on the list!</h2>
        <p className="text-zinc-400">
          We&apos;ll be in touch soon with updates on our progress.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      {status === 'error' && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          placeholder="Your name"
          disabled={status === 'submitting'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
          placeholder="your@email.com"
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
      >
        {status === 'submitting' ? 'Joining...' : 'Join the Waitlist'}
      </button>
    </form>
  );
}
