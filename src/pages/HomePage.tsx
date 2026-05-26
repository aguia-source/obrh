import { useEffect, useState } from 'react';
import { Section, AppCard, ContactCard, CultureCard, FaqAccordion } from '../components';
import { getApps, getContacts, getCulture, getFaq } from '../data/content';
import { AppData, ContactData, CultureData, FaqData } from '../types';

export function HomePage() {
  const [apps, setApps] = useState<AppData | null>(null);
  const [contacts, setContacts] = useState<ContactData | null>(null);
  const [culture, setCulture] = useState<CultureData | null>(null);
  const [faq, setFaq] = useState<FaqData | null>(null);

  useEffect(() => {
    getApps().then(setApps);
    getContacts().then(setContacts);
    getCulture().then(setCulture);
    getFaq().then(setFaq);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary/90 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <svg className="w-16 h-16 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 12l3 2 7-5 7 5 3-2L12 2zM5 17l2 5h10l2-5-7 4-7-4z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bem-vindo à Águia!
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Seu portal de referência com tudo que você precisa para começar.
            Aplicativos, contatos, cultura e FAQ em um só lugar.
          </p>
        </div>
      </div>

      <Section id="apps" title="Aplicativos" subtitle="Ferramentas essenciais para o dia a dia">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps?.items.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      </Section>

      <Section id="contacts" title="Contatos Úteis" subtitle="Fale diretamente com quem pode ajudar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts?.items.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      </Section>

      <Section id="culture" title="Cultura & Valores" subtitle="Conheça quem somos e no que acreditamos">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {culture?.items.map((item, index) => (
            <CultureCard key={index} culture={item} />
          ))}
        </div>
      </Section>

      <Section id="faq" title="Perguntas Frequentes" subtitle="Tire suas dúvidas rapidamente">
        <div className="grid grid-cols-1 gap-4">
          {faq?.items.map((item, index) => (
            <FaqAccordion key={index} faq={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
