import { AppData, ContactData, CultureData, FaqData } from '../types';

export async function getApps(): Promise<AppData> {
  const res = await fetch('/content/apps/apps.yaml');
  const text = await res.text();
  const yaml = await import('yaml');
  return yaml.parse(text) as AppData;
}

export async function getContacts(): Promise<ContactData> {
  const res = await fetch('/content/contacts/contacts.yaml');
  const text = await res.text();
  const yaml = await import('yaml');
  return yaml.parse(text) as ContactData;
}

export async function getCulture(): Promise<CultureData> {
  const res = await fetch('/content/culture/culture.yaml');
  const text = await res.text();
  const yaml = await import('yaml');
  return yaml.parse(text) as CultureData;
}

export async function getFaq(): Promise<FaqData> {
  const res = await fetch('/content/faq/faq.yaml');
  const text = await res.text();
  const yaml = await import('yaml');
  return yaml.parse(text) as FaqData;
}
