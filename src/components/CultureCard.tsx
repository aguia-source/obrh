import { Culture } from '../types';

interface CultureCardProps {
  culture: Culture;
}

export function CultureCard({ culture }: CultureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
      <h3 className="font-semibold text-brand-secondary mb-3 text-lg">{culture.title}</h3>
      <div className="text-sm text-gray-600 whitespace-pre-line prose prose-sm max-w-none">
        {culture.content.split('\n').map((line, i) => (
          <p key={i} className={line.startsWith('**') ? 'font-semibold text-brand-secondary' : ''}>
            {line.replace(/\*\*/g, '')}
          </p>
        ))}
      </div>
    </div>
  );
}
