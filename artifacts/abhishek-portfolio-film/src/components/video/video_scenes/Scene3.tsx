import { motion } from 'framer-motion';

const spring = { type: 'spring', stiffness: 270, damping: 30 } as const;

export function Scene3() {
  return (
    <motion.section
      className="film-scene assetguard-scene"
      aria-label="AssetGuard workspace and verified features"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.07,
        rotateZ: -0.3,
        filter: 'blur(8px)',
        transition: { duration: 0.38, ease: [0.65, 0, 0.35, 1] },
      }}
    >
      <span className="assetguard-back-number" aria-hidden="true">
        01
      </span>
      <div className="assetguard-running-label mono-label">
        <span>01 / ASSETGUARD</span>
        <span>FULL-STACK WEB APP</span>
      </div>

      <motion.div
        className="assetguard-window"
        initial={{ clipPath: 'inset(0 48% 0 48%)', scale: 0.97 }}
        animate={{ clipPath: 'inset(0 0 0 0)', scale: 1 }}
        transition={{ duration: 0.74, delay: 0.03, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="ag-window-top">
          <div className="ag-wordmark">
            <span className="ag-mark" aria-hidden="true">
              A
            </span>
            <span>AssetGuard</span>
          </div>
          <span className="ag-top-context">WORKSPACE / TRACKING</span>
          <span className="ag-top-index mono-label">01</span>
        </div>

        <div className="ag-category-row">
          <motion.div
            className="ag-category"
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.49 }}
          >
            <span className="ag-category-mark" aria-hidden="true">
              01
            </span>
            <span>ASSETS</span>
          </motion.div>
          <motion.div
            className="ag-category"
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.78 }}
          >
            <span className="ag-category-mark" aria-hidden="true">
              02
            </span>
            <span>WARRANTIES</span>
          </motion.div>
          <motion.div
            className="ag-category"
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 1.08 }}
          >
            <span className="ag-category-mark" aria-hidden="true">
              03
            </span>
            <span>SUBSCRIPTIONS</span>
          </motion.div>
        </div>

        <div className="ag-detail-grid">
          <motion.div
            className="ag-access-panel"
            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            transition={{ duration: 0.56, delay: 1.44, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="ag-panel-label mono-label">ACCESS / ROLES</span>
            <div className="ag-role-pair">
              <span>OWNER</span>
              <span className="ag-role-divider" aria-hidden="true">
                /
              </span>
              <span>MEMBER</span>
            </div>
            <div className="ag-workspace-boundary" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <motion.span
              className="ag-isolation-label"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.34, delay: 2.1 }}
            >
              WORKSPACE-ISOLATED DATA
            </motion.span>
          </motion.div>

          <motion.div
            className="ag-invoice-panel"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 2.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ag-invoice-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="ag-panel-label mono-label">FILE STORAGE</span>
            <span className="ag-invoice-title">Invoices</span>
            <span className="ag-invoice-provider">CLOUDINARY</span>
          </motion.div>
        </div>

        <motion.div
          className="ag-stack"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, delay: 3.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mono-label">STACK</span>
          <span>REACT / NODE.JS / EXPRESS / MONGODB</span>
          <span className="ag-stack-secondary">JWT&nbsp; / &nbsp;REST</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="ag-handoff-line"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: [0, 1, 1] }}
        transition={{ duration: 0.62, delay: 5.53, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
      <span className="scene-corner-mark assetguard-mark">SYSTEM / 01</span>
    </motion.section>
  );
}
