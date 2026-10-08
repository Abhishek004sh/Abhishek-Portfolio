import { useState } from 'react';
import { motion } from 'framer-motion';

import { useSceneTimer } from '@/lib/video';
import { TerminalSignal } from './Scene1';

export function Scene5() {
  const [folded, setFolded] = useState(false);
  useSceneTimer([{ time: 4150, callback: () => setFolded(true) }]);

  return (
    <motion.section
      className="film-scene outro-scene"
      aria-label="Closing invitation and contact details"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <motion.div
        className="outro-sheet"
        initial={{ clipPath: 'inset(0 0 0 0)' }}
        animate={{
          clipPath: folded
            ? 'polygon(8.2% 14.8%, 9.7% 14.8%, 9.7% 16.2%, 8.2% 16.2%)'
            : 'inset(0 0 0 0)',
        }}
        transition={{
          duration: folded ? 0.7 : 0.1,
          delay: folded ? 0 : 0.22,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <motion.div
          className="outro-copy"
          initial={{ opacity: 0.88, y: 15 }}
          animate={{
            opacity: folded ? 0 : 1,
            y: folded ? -8 : 0,
          }}
          transition={{ duration: 0.36, delay: folded ? 0 : 0.12 }}
        >
          <span className="outro-kicker mono-label">A DEVELOPER WORKSPACE</span>
          <h1>
            <motion.span
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              LET&apos;S BUILD
            </motion.span>
            <motion.span
              className="outro-second-line"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              SOMETHING
            </motion.span>
            <motion.span
              className="outro-third-line"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
            >
              USEFUL.
            </motion.span>
          </h1>
        </motion.div>

        <motion.div
          className="outro-profile"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: folded ? 0 : 1, y: folded ? -6 : 0 }}
          transition={{ duration: 0.38, delay: folded ? 0 : 1.22 }}
        >
          <span className="outro-profile-rule" aria-hidden="true" />
          <span className="outro-name">ABHISHEK SHARMA</span>
          <span className="outro-role mono-label">SOFTWARE DEVELOPER</span>
          <div className="outro-contact mono-label">
            <span>GITHUB&nbsp; /Abhishek004sh</span>
            <span>LINKEDIN&nbsp; /in/abhishek-sharma-00b4a2225</span>
            <span>EMAIL&nbsp; as6911904@gmail.com</span>
          </div>
        </motion.div>

        <motion.div
          className="outro-accent-block"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: folded ? 0.05 : 1 }}
          transition={{
            duration: folded ? 0.46 : 0.5,
            delay: folded ? 0 : 0.92,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-hidden="true"
        />
      </motion.div>

      <motion.div
        className="outro-loop-terminal"
        initial={{ opacity: 0 }}
        animate={{ opacity: folded ? 1 : 0 }}
        transition={{ duration: 0.32, delay: folded ? 0.38 : 0 }}
      >
        <TerminalSignal closing />
      </motion.div>
    </motion.section>
  );
}
