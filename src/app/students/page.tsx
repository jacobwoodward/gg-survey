async function getStudentPageEnabled() {
  // Access environment variable at runtime
  return process.env.STUDENT_PAGE !== 'OFF';
}

export default async function StudentsPage() {
  const isEnabled = await getStudentPageEnabled();

  if (!isEnabled) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-4">
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
          <h1 className="text-2xl font-medium">All interview slots have been filled.</h1>
          <p className="text-zinc-400">Thank you for your interest!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-zinc-200">
            <h2 className="text-lg font-medium text-zinc-900">Schedule a conversation</h2>
          </div>

          {/* Content */}
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
