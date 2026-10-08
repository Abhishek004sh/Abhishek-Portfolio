import { motion } from 'framer-motion';

interface TerminalSignalProps {
  closing?: boolean;
}

export function TerminalSignal({ closing = false }: TerminalSignalProps) {
  return (
    <div className={`boot-frame${closing ? ' boot-frame--closing' : ''}`}>
      <div className="boot-header">
        <span>SYS / PORTFOLIO</span>
        <span className="boot-header-mark" aria-hidden="true">
          —
        </span>
      </div>
      <div className="boot-lines">
        <motion.div
          className="boot-line"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="boot-prompt" aria-hidden="true">
            &gt;
          </span>
          <span>INITIALIZING...</span>
          <motion.span
            className="boot-caret"
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1] }}
            transition={{ duration: 0.42, delay: 0.22, times: [0, 0.48, 1] }}
          />
        </motion.div>
        {!closing && (
          <>
            <motion.div
              className="boot-line"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 0.62,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <span className="boot-prompt" aria-hidden="true">
                &gt;
              </span>
              <span>DEVELOPER: ABHISHEK SHARMA</span>
            </motion.div>
            <motion.div
              className="boot-line"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.35,
                delay: 1.12,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <span className="boot-prompt" aria-hidden="true">
                &gt;
              </span>
              <span>ROLE: SOFTWARE DEVELOPER</span>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

export function Scene1() {
  return (
    <motion.section
      className="film-scene boot-scene"
      aria-label="Developer terminal introduction"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.045,
        filter: 'blur(7px)',
        transition: { duration: 0.36, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <TerminalSignal />
      <motion.div
        className="boot-carry-rule"
        initial={{ width: '0%' }}
        animate={{ width: '83%' }}
        transition={{ duration: 0.55, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
      <motion.div
        className="boot-index"
        initial={{ opacity: 0, scale: 0.78 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 28,
          delay: 2.55,
        }}
        aria-hidden="true"
      >
        <span>01</span>
        <span className="boot-index-slash">/</span>
        <span>02</span>
      </motion.div>
      <span className="scene-corner-mark" aria-hidden="true">
        16:9&nbsp;&nbsp; / &nbsp;&nbsp;AS
      </span>
    </motion.section>
  );
}
