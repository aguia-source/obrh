export function Footer() {
  return (
    <footer className="bg-brand-secondary py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <svg
              className="w-6 h-6 text-brand-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 12l3 2 7-5 7 5 3-2L12 2zM5 17l2 5h10l2-5-7 4-7-4z" />
            </svg>
            <span className="text-white font-semibold">Águia Consultoria Imobiliária</span>
          </div>
          <p className="text-white/60 text-sm">Portal do Colaborador © 2024</p>
        </div>
      </div>
    </footer>
  );
}
