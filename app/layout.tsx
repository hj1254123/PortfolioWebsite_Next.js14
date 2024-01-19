import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '猴几 | 个人作品集网站',
  description: 'React个人作品集网站(Next.js 14, Framer Motion, TypeScript, Tailwind CSS)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh-CN'>
      <body>{children}</body>
    </html>
  );
}
