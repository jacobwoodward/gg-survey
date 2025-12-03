'use client';

import { useState } from 'react';
import { personas, Persona, Question } from '@/lib/questions';

type SurveyStep = 'persona' | 'info' | 'questions' | 'submitting';

interface UserInfo {
  name: string;
  email: string;
  title: string;
  company: string;
}

interface SurveyProps {
  onComplete: () => void;
  initialPersonaId?: string;
}

export default function Survey({ onComplete, initialPersonaId }: SurveyProps) {
  const initialPersona = initialPersonaId
    ? personas.find(p => p.id === initialPersonaId) || null
    : null;
  const [step, setStep] = useState<SurveyStep>(initialPersona ? 'info' : 'persona');
  const [selectedPersona, setSelectedPersona] = useState<Persona | null>(initialPersona);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    title: '',
    company: '',
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, string | string[] | number>>({});
  const [error, setError] = useState<string | null>(null);

  const handlePersonaSelect = (persona: Persona) => {
    setSelectedPersona(persona);
    setStep('info');
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name.trim()) {
      setError('Name is required');
      return;
    }
    setError(null);
    setStep('questions');
  };

  const currentQuestion = selectedPersona?.questions[currentQuestionIndex];

  const handleAnswer = (value: string | string[] | number) => {
    if (!currentQuestion) return;
    setResponses((prev) => ({ ...prev, [currentQuestion.id]: value }));
  };

  const hasAnswer = () => {
    if (!currentQuestion) return false;
    const answer = responses[currentQuestion.id];
    if (Array.isArray(answer)) return answer.length > 0;
    return answer !== undefined && answer !== '';
  };

  const handleNext = async () => {
    if (!selectedPersona) return;

    if (currentQuestionIndex < selectedPersona.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Submit survey
      setStep('submitting');
      try {
        const res = await fetch('/api/survey', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            persona: selectedPersona.id,
            name: userInfo.name,
            email: userInfo.email || undefined,
            title: userInfo.title || undefined,
            company: userInfo.company || undefined,
            responses,
          }),
        });

        if (!res.ok) throw new Error('Failed to submit');
        onComplete();
      } catch {
        setError('Failed to submit survey. Please try again.');
        setStep('questions');
      }
    }
  };

  const handleBack = () => {
    if (step === 'info' && !initialPersona) {
      setStep('persona');
      setSelectedPersona(null);
    } else if (step === 'questions' && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (step === 'questions' && currentQuestionIndex === 0) {
      setStep('info');
    }
  };

  const progress = selectedPersona
    ? ((currentQuestionIndex + 1) / selectedPersona.questions.length) * 100
    : 0;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress bar */}
      {step === 'questions' && (
        <div className="mb-8">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-zinc-500 text-right">
            {currentQuestionIndex + 1} of {selectedPersona?.questions.length}
          </p>
        </div>
      )}

      {/* Persona Selection */}
      {step === 'persona' && (
        <div className="space-y-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium mb-2">Which best describes you?</h2>
            <p className="text-zinc-400">This helps us ask the right questions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {personas.map((persona) => (
              <button
                key={persona.id}
                onClick={() => handlePersonaSelect(persona)}
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
      )}

      {/* User Info */}
      {step === 'info' && (
        <form onSubmit={handleInfoSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium mb-2">A bit about you</h2>
            <p className="text-zinc-400">Only your name is required.</p>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Your name"
                autoFocus
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={userInfo.title}
                onChange={(e) => setUserInfo((prev) => ({ ...prev, title: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Your job title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                value={userInfo.company}
                onChange={(e) => setUserInfo((prev) => ({ ...prev, company: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors"
                placeholder="Your company or organization"
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {!initialPersona && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      )}

      {/* Questions */}
      {step === 'questions' && currentQuestion && (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-medium mb-6">{currentQuestion.text}</h2>
            <QuestionInput
              question={currentQuestion}
              value={responses[currentQuestion.id]}
              onChange={handleAnswer}
            />
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors"
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="flex-1 px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-zinc-200 transition-colors"
            >
              {currentQuestionIndex === (selectedPersona?.questions.length ?? 0) - 1
                ? 'Submit'
                : hasAnswer()
                  ? 'Next'
                  : 'Skip this question'}
            </button>
          </div>
        </div>
      )}

      {/* Submitting */}
      {step === 'submitting' && (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4" />
          <p className="text-zinc-400">Submitting your responses...</p>
        </div>
      )}
    </div>
  );
}

interface QuestionInputProps {
  question: Question;
  value: string | string[] | number | undefined;
  onChange: (value: string | string[] | number) => void;
}

function QuestionInput({ question, value, onChange }: QuestionInputProps) {
  switch (question.type) {
    case 'select':
      return (
        <div className="grid gap-2">
          {question.options?.map((option) => (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`w-full p-4 text-left rounded-xl border transition-all ${
                value === option
                  ? 'border-white bg-white/10'
                  : 'border-white/10 hover:border-white/30 hover:bg-white/5'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      );

    case 'multiselect':
      const selectedValues = Array.isArray(value) ? value : [];
      return (
        <div className="grid gap-2">
          <p className="text-sm text-zinc-500 mb-2">Select all that apply</p>
          {question.options?.map((option) => {
            const isSelected = selectedValues.includes(option);
            return (
              <button
                key={option}
                onClick={() => {
                  if (isSelected) {
                    onChange(selectedValues.filter((v) => v !== option));
                  } else {
                    onChange([...selectedValues, option]);
                  }
                }}
                className={`w-full p-4 text-left rounded-xl border transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'border-white bg-white/10'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-white bg-white' : 'border-white/30'
                  }`}
                >
                  {isSelected && (
                    <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                {option}
              </button>
            );
          })}
        </div>
      );

    case 'scale':
      const min = question.scaleMin ?? 1;
      const max = question.scaleMax ?? 5;
      const scaleValue = typeof value === 'number' ? value : undefined;
      const range = Array.from({ length: max - min + 1 }, (_, i) => min + i);

      return (
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-zinc-500">
            <span>{question.scaleLabels?.min}</span>
            <span>{question.scaleLabels?.max}</span>
          </div>
          <div className="flex gap-2 justify-center">
            {range.map((num) => (
              <button
                key={num}
                onClick={() => onChange(num)}
                className={`w-12 h-12 rounded-xl border text-lg font-medium transition-all ${
                  scaleValue === num
                    ? 'border-white bg-white text-black'
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      );

    case 'text':
      return (
        <textarea
          value={typeof value === 'string' ? value : ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors min-h-[120px] resize-none"
          placeholder="Your answer..."
        />
      );

    default:
      return null;
  }
}
