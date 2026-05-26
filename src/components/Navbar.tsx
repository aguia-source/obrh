import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-brand-secondary z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-brand-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 12l3 2 7-5 7 5 3-2L12 2zM5 17l2 5h10l2-5-7 4-7-4z" />
            </svg>
            <span className="text-white font-bold text-lg">Águia Onboarding</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#apps" className="text-white/80 hover:text-brand-primary transition-colors">
              Aplicativos
            </a>
            <a href="#contacts" className="text-white/80 hover:text-brand-primary transition-colors">
              Contatos
            </a>
            <a href="#culture" className="text-white/80 hover:text-brand-primary transition-colors">
              Cultura
            </a>
            <a href="#faq" className="text-white/80 hover:text-brand-primary transition-colors">
              FAQ
            </a>
          </div>

          <div className="flex gap-2">
            <a
              href="/admin/index.html"
              className="px-3 py-1.5 text-sm bg-brand-primary text-brand-secondary font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
