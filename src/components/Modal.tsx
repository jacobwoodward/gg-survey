'use client';

import { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  variant?: 'dark' | 'light';
}

export default function Modal({ isOpen, onClose, children, title, variant = 'dark' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const isLight = variant === 'light';

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
          isLight
            ? 'bg-white border border-zinc-200'
            : 'bg-zinc-900 border border-white/10'
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isLight ? 'border-zinc-200' : 'border-white/10'
        }`}>
          {title && (
            <h2 className={`text-lg font-medium ${isLight ? 'text-zinc-900' : 'text-white'}`}>{title}</h2>
          )}
          <button
            onClick={onClose}
            className={`ml-auto p-2 rounded-lg transition-colors ${
              isLight ? 'hover:bg-zinc-100 text-zinc-600' : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Close modal"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
