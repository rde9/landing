import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['var(--font-body)'],
      featured: ['var(--font-geist-mono)'],
    },
    extend: {
      colors: {
        'border-light': 'var(--c-border)',
        'border-icon': 'var(--c-border-icon)',
        bg: 'var(--background)',
        fg: 'var(--foreground)',
        'fg-secondary': 'var(--foreground-secondary)',
      },
      spacing: {
        'body-margin': 'clamp(16px, 1.766vw, 28px)',
        '60': '3.75rem',
      },
      fontSize: {
        large: '1.25rem',
        medium: 'clamp(18px, 1.188rem + ((1vw - 3.2px) * 0.469), 22px)',
        small: 'clamp(14px, 0.875rem + ((1vw - 3.2px) * 0.125), 16px)',
        featured: 'clamp(48px, 2.75rem + ((1vw - 3.2px) * 2), 88px)',
      },
      fontWeight: {
        'featured-detail': '500',
      },
      letterSpacing: {
        featured: '-0.05em',
      },
      lineHeight: {
        featured: '1.05',
        'featured-detail': '1.5',
      },
      width: {
        sidebar: '256px',
      },
      minHeight: {
        'about': '80vh',
      },
      borderRadius: {
        'large-radius': 'clamp(12px, 3.125vw, 24px)',
      },
    },
  },
  plugins: [],
};

export default config;
