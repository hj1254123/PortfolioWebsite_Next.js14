'use client';

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/theme-context';

export default function ThemeSwitch() {
  const { toggleTheme } = useTheme();
  return (
    <button
      className='fixed bottom-5 right-5 flex h-12 w-12 items-center
                  justify-center rounded-full border border-white border-opacity-40
                bg-white bg-opacity-80 shadow-2xl backdrop-blur transition-all 
                  hover:scale-[1.15] active:scale-[1.05] dark:bg-gray-950'
      onClick={toggleTheme}
    >
      {/* 该方案防止 theme 未就绪，出现图标闪烁问题 */}
      <BsSun className='block dark:hidden' />
      <BsMoon className='hidden dark:block' />
    </button>
  );
}
