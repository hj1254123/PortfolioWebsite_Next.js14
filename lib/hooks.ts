'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useActiveSectionContext } from '@/context/active-section-context';
import type { SectionName } from './types';

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  useEffect(() => {
    // 1秒的延迟，过滤掉了页面滚动时间内的设置 active 滑块逻辑，防止了跳动问题
    if (Date.now() - timeOfLastClick < 1000) return;
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
}
