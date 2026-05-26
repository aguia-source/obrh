import { IconPicker } from './IconPicker';
import { App } from '../types';

interface AppCardProps {
  app: App;
}

export function AppCard({ app }: AppCardProps) {
  return (
    <a
      href={app.website_url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 border border-gray-100"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-brand-primary/10 rounded-xl">
          <IconPicker name={app.icon} className="w-8 h-8 text-brand-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-brand-secondary mb-1">{app.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{app.description}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4">
        {app.ios_url && (
          <a
            href={app.ios_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            iOS
          </a>
        )}
        {app.android_url && (
          <a
            href={app.android_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5 19.5L8 15l-4.5-9 4.5-4.5L12 4l-.5 6.5L3.5 19.5zm7-16l4.5 6L12 7l3.5 2.5L17.5 6l-4 9z" />
            </svg>
            Android
          </a>
        )}
      </div>
    </a>
  );
}
