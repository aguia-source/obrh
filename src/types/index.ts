export interface App {
  name: string;
  description: string;
  website_url?: string;
  ios_url?: string;
  android_url?: string;
  icon: string;
}

export interface AppData {
  items: App[];
}

export interface Contact {
  name: string;
  role: string;
  description?: string;
  whatsapp_url: string;
}

export interface ContactData {
  items: Contact[];
}

export interface Culture {
  title: string;
  content: string;
}

export interface CultureData {
  items: Culture[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  items: FaqItem[];
}
