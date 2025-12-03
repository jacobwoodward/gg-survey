'use client';

import { useState, useEffect, Suspense } from 'react';
import Modal from '@/components/Modal';
import Survey from '@/components/Survey';
import { useRouter, useSearchParams } from 'next/navigation';

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);
  const [initialPersonaId, setInitialPersonaId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const persona = searchParams.get('persona');
    if (persona) {
      setInitialPersonaId(persona);
      setIsSurveyOpen(true);
    }
  }, [searchParams]);

  const handleSurveyComplete = () => {
    setIsSurveyOpen(false);
    router.push('/thank-you');
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-balance">
              Help Build Something Better
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 text-balance">
              I&apos;m talking to people who are tired of waiting for someone else to fix what&apos;s broken. Your perspective matters.
            </p>
          </div>

          {/* Gift Card Promo - Commented out for now
          <div className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <Image
              src={giftcardImage}
              alt="$50 Amazon Gift Card"
              width={80}
              height={50}
              className="rounded-lg shadow-lg"
            />
            <p className="text-sm sm:text-base text-amber-200/90">
              We&apos;re giving away a <span className="font-semibold text-amber-100">$50 Amazon Gift Card</span> to one lucky respondent
            </p>
          </div>
          */}

          {/* Options */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
            {/* Schedule Interview */}
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="group relative p-6 rounded-2xl bg-zinc-800/50 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all text-left w-full sm:flex-1"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <svg
                    className="w-5 h-5 text-white"
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
                <div>
                  <h2 className="text-lg font-medium text-white">Schedule a conversation</h2>
                  <p className="text-sm text-zinc-400 mt-1">
                    15-20 minutes. No pitch, just listening.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>

            {/* OR Divider */}
            <div className="flex items-center gap-4 sm:flex-col sm:gap-2">
              <div className="hidden sm:block w-px h-8 bg-zinc-700" />
              <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">or</span>
              <div className="hidden sm:block w-px h-8 bg-zinc-700" />
            </div>

            {/* Take Survey */}
            <button
              onClick={() => setIsSurveyOpen(true)}
              className="group relative p-6 rounded-2xl bg-zinc-800/50 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all text-left w-full sm:flex-1"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-white">Take a brief survey</h2>
                  <p className="text-sm text-zinc-400 mt-1">
                    5 minutes. Share your perspective.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  className="w-5 h-5 text-zinc-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>

          {/* Subtle note */}
          <p className="text-sm text-zinc-600 pt-4">
            No sales. No spam. Just trying to understand what&apos;s broken and how to fix it.
          </p>
        </div>
      </div>

      {/* Calendar Modal */}
      <Modal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        title="Schedule a conversation"
        variant="light"
      >
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0gEUykFPHy1ULvd7qrbnvAbv3chwoAT6ici7NXQhEqH2gcmWEcgQRHcOHQBz2c9eCLAmJA7yQe?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
        />
      </Modal>

      {/* Survey Modal */}
      <Modal
        isOpen={isSurveyOpen}
        onClose={() => setIsSurveyOpen(false)}
        title="Share your perspective"
      >
        <div className="p-6">
          <Survey onComplete={handleSurveyComplete} initialPersonaId={initialPersonaId} />
        </div>
      </Modal>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomeContent />
    </Suspense>
  );
}
