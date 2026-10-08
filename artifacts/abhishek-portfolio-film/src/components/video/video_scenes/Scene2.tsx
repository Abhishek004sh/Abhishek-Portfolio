import { motion } from 'framer-motion';

export function Scene2() {
  return (
    <motion.section
      className="film-scene archive-scene"
      aria-label="Portfolio thesis and project archive"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.11,
        filter: 'blur(8px)',
        transition: { duration: 0.42, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <div className="archive-kicker mono-label">
        <span>PROJECT ARCHIVE</span>
        <span>02 / 02</span>
      </div>

      <div className="archive-headline" aria-label="I build software that solves real problems.">
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          I BUILD SOFTWARE
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
        >
          THAT SOLVES REAL
        </motion.p>
        <motion.p
          className="archive-headline-accent"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.46, delay: 0.94, ease: [0.16, 1, 0.3, 1] }}
        >
          PROBLEMS.
        </motion.p>
      </div>

      <div className="archive-rows">
        <motion.div
          className="archive-row archive-row--active"
          initial={{ opacity: 0.3, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.48, delay: 1.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="archive-row-number">01</span>
          <div className="archive-row-copy">
            <span className="archive-row-title">AssetGuard</span>
            <span className="archive-row-subtitle">MERN / WORKSPACE MANAGEMENT</span>
          </div>
          <span className="archive-row-marker" aria-hidden="true">
            ↗
          </span>
        </motion.div>
        <motion.div
          className="archive-row"
          initial={{ opacity: 0.3, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.48, delay: 2.28, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="archive-row-number">02</span>
          <div className="archive-row-copy">
            <span className="archive-row-title">GitDocs</span>
            <span className="archive-row-subtitle">REACT / DOCUMENTATION FRONTEND</span>
          </div>
          <span className="archive-row-marker" aria-hidden="true">
            ↗
          </span>
        </motion.div>
      </div>

      <motion.div
        className="archive-ghost-number"
        initial={{ opacity: 0.02, scale: 0.9 }}
        animate={{ opacity: 0.075, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.35, ease: 'easeOut' }}
        aria-hidden="true"
      >
        01
      </motion.div>
      <motion.div
        className="archive-carrier"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={{ clipPath: 'inset(0 0 0 0)' }}
        transition={{ duration: 0.5, delay: 3.4, ease: [0.76, 0, 0.24, 1] }}
        aria-hidden="true"
      >
        <span>01</span>
        <span>ASSETGUARD</span>
      </motion.div>
      <div className="scene-corner-mark archive-mark">
        AS / SOFTWARE
      </div>
    </motion.section>
  );
}
