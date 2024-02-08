import { Toaster } from 'react-hot-toast';

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';

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
    <html lang='zh-CN' className='!scroll-smooth'>
      <body className='relative bg-gray-50 pt-28 text-gray-950 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90'>
        <div className='absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
