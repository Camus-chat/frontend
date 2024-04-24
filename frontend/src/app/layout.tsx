import '@/styles/global.scss';
import { ReactNode } from 'react';

export const metadata = {
  title: 'CAMUS',
  // description: 'Generated by Next.js',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
