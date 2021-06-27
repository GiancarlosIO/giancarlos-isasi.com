import * as React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export const ButtonRotate: React.FC<{
  open: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ open, children, onClick }) => (
  <motion.button
    type="button"
    onClick={onClick}
    className={clsx('relative origin-center', {
      'z-50': open,
    })}
    initial="closed"
    animate={open ? 'open' : 'closed'}
    variants={{
      open: { rotate: -180 },
      closed: { rotate: 0 },
    }}
    transition={{
      duration: 0.3,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.button>
);
