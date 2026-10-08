import { motion } from 'framer-motion';

const lineTransition = {
  duration: 0.78,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function Scene4() {
  return (
    <motion.section
      className="film-scene gitdocs-scene"
      aria-label="GitDocs documentation frontend"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.06,
        rotateZ: 0.25,
        filter: 'blur(6px)',
        transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <motion.div
        className="gitdocs-page"
        initial={{ scale: 1.12, rotateZ: -0.6 }}
        animate={{ scale: 1, rotateZ: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="gd-header">
          <div className="gd-title-block">
            <span className="gd-number mono-label">02</span>
            <span className="gd-title">GitDocs</span>
          </div>
          <motion.span
            className="gd-scope mono-label"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            FRONTEND PROJECT
          </motion.span>
        </div>

        <div className="gd-map">
          <div className="gd-topic-list">
            <motion.div
              className="gd-topic gd-topic--root"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.33 }}
            >
              <span className="gd-topic-index">01</span>
              <span>PROJECTS</span>
            </motion.div>
            <motion.div
              className="gd-topic"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 0.72 }}
            >
              <span className="gd-topic-index">02</span>
              <span>DOCS</span>
            </motion.div>
            <motion.div
              className="gd-topic"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 1.12 }}
            >
              <span className="gd-topic-index">03</span>
              <span>BRANCHES / VERSIONS</span>
            </motion.div>
            <motion.div
              className="gd-topic"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.38, delay: 1.57 }}
            >
              <span className="gd-topic-index">04</span>
              <span>COMMIT HISTORY</span>
            </motion.div>
          </div>

          <svg
            className="gd-branch-map"
            viewBox="0 0 600 300"
            fill="none"
            role="img"
            aria-label="Abstract branching path connecting documentation areas"
          >
            <motion.path
              d="M24 150H176C230 150 226 65 286 65H478M176 150C230 150 226 235 286 235H478M286 65V235"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0.45 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ ...lineTransition, delay: 0.42 }}
            />
            <motion.path
              d="M286 150H556"
              stroke="currentColor"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ...lineTransition, delay: 1.15 }}
            />
            {[
              { cx: 176, cy: 150, delay: 0.72 },
              { cx: 286, cy: 65, delay: 1.15 },
              { cx: 286, cy: 150, delay: 1.45 },
              { cx: 286, cy: 235, delay: 1.78 },
              { cx: 478, cy: 65, delay: 2.03 },
              { cx: 478, cy: 150, delay: 2.26 },
              { cx: 478, cy: 235, delay: 2.48 },
            ].map((node) => (
              <motion.circle
                key={`${node.cx}-${node.cy}`}
                cx={node.cx}
                cy={node.cy}
                r="5"
                fill="currentColor"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 24,
                  delay: node.delay,
                }}
              />
            ))}
          </svg>
          <motion.div
            className="gd-map-index mono-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.35, duration: 0.3 }}
          >
            DOCS / HISTORY
          </motion.div>
        </div>

        <div className="gd-stack">
          <motion.div
            className="gd-stack-group"
            initial={{ opacity: 0, y: 9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 2.78 }}
          >
            <span className="mono-label">REACT 19 / REDUX TOOLKIT / REACT ROUTER</span>
          </motion.div>
          <motion.div
            className="gd-stack-group gd-stack-group--second"
            initial={{ opacity: 0, y: 9 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38, delay: 3.63 }}
          >
            <span className="mono-label">TAILWIND / AXIOS / TIPTAP</span>
          </motion.div>
        </div>

        <motion.div
          className="gd-fold"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(82% 0, 100% 0, 100% 100%, 82% 100%)' }}
          transition={{ duration: 0.55, delay: 4.56, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        />
      </motion.div>
      <span className="scene-corner-mark gitdocs-mark">DOCS / BRANCHES / HISTORY</span>
    </motion.section>
  );
}
