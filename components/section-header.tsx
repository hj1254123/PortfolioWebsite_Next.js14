import React from 'react';

type Props = {
  children: React.ReactNode;
};

export default function SectionHeader({ children }: Props) {
  return <h2 className='mb-8 text-center text-3xl font-medium'>{children}</h2>;
}
