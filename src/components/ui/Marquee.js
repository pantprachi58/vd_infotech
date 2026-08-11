import styles from "./Marquee.module.css";

/**
 * Infinite auto-scrolling strip. Children are rendered twice so the loop is
 * seamless; the duplicate is hidden from assistive tech.
 */
export default function Marquee({
  children,
  speed = 40,
  gap = 28,
  reverse = false,
  className = "",
}) {
  return (
    <div
      className={`${styles.viewport} ${reverse ? styles.reverse : ""} ${className}`}
      style={{ "--speed": `${speed}s`, "--gap": `${gap}px` }}
    >
      <div className={styles.track}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
