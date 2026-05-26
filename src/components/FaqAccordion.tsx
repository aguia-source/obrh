import { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  faq: FaqItem;
}

export function FaqAccordion({ faq }: FaqAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-semibold text-brand-secondary pr-4">{faq.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="text-sm text-gray-600 whitespace-pre-line">
            {faq.answer.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
