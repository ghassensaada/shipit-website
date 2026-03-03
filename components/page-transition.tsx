'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...{
          key: 'page',
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
          transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          className: 'will-change-transform',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
