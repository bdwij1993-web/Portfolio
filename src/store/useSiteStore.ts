import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SiteContent {
  theme: 'light' | 'dark';
  hero: {
    headline: string;
    subheadline: string;
  };
  about: {
    content: string;
  };
  vision: {
    statement: string;
  };
  cta: {
    headline: string;
    body: string;
  };
}

interface SiteStore {
  content: SiteContent;
  updateTheme: (theme: 'light' | 'dark') => void;
  updateContent: (section: keyof SiteContent, data: any) => void;
  resetToDefaults: () => void;
}

const defaultContent: SiteContent = {
  theme: 'light',
  hero: {
    headline: "We're changing the world with technology",
    subheadline: "Innovish helps global organizations modernize fragmented workflows, scale API ecosystems, and build revenue-generating digital platforms."
  },
  about: {
    content: "Founded on May 7, 2021, Innovish is a modern SaaS consulting and product strategy firm helping global organizations transform fragmented data, workflows, and digital experiences into scalable, revenue-generating platforms.\n\nWe specialize in product-led innovation across SaaS ecosystems, API-first architectures, research distribution platforms, analytics infrastructure, and enterprise modernization initiatives.\n\nOperating at the intersection of product strategy, engineering execution, and platform scalability, Innovish partners with forward-thinking organizations across the US, Europe, and India to accelerate digital transformation with measurable business outcomes.\n\nWe help businesses harness AI through intelligent automation, AI agents, and scalable architectures that streamline operations, accelerate innovation, and deliver measurable business outcomes.\n\nInnovish was built on a simple principle: modern digital businesses need agile product thinking, scalable technology foundations, and execution teams that can operate seamlessly across global time zones.\n\nToday, Innovish functions as a fully compliant offshore delivery and consulting partner supporting enterprise SaaS initiatives, platform modernization, API ecosystems, and data monetization strategies for international clients."
  },
  vision: {
    statement: "To become a globally trusted SaaS innovation partner helping businesses modernize how data, technology, and digital experiences create value."
  },
  cta: {
    headline: "Let's Build What's Next",
    body: "Whether you're launching a new SaaS platform, modernizing enterprise infrastructure, scaling API ecosystems, or transforming fragmented workflows into intelligent digital products \u2014 Innovish brings the strategic clarity and execution capability to help you move from idea to impact.\n\nWe believe modern platforms should not only function efficiently \u2014 they should create measurable business momentum."
  }
};

export const useSiteStore = create<SiteStore>()(
  persist(
    (set) => ({
      content: defaultContent,
      updateTheme: (theme) => set((state) => ({ content: { ...state.content, theme } })),
      updateContent: (section, data) => set((state) => ({
        content: {
          ...state.content,
          [section]: { ...state.content[section as keyof SiteContent], ...data }
        }
      })),
      resetToDefaults: () => set({ content: defaultContent }),
    }),
    {
      name: 'innovish-site-storage',
    }
  )
);
