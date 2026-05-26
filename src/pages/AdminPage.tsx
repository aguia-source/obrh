export function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-brand-secondary py-4 px-6">
        <a href="/" className="text-white font-semibold hover:text-brand-primary transition-colors">
          ← Voltar ao Portal
        </a>
      </div>
      <iframe
        src="/admin/index.html"
        className="w-full h-[calc(100vh-60px)] border-none"
        title="Admin CMS"
      />
    </div>
  );
}
