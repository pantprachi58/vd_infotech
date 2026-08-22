import { FaCheck, FaXmark } from "react-icons/fa6";
import styles from "./PlanCell.module.css";

/**
 * Cell shorthand shared by every matrix in `packages.json`:
 *   "c"        -> included (green check)
 *   "x"        -> not included (red cross)
 *   "startNow" -> the per-plan call to action
 *   anything else prints as-is.
 */
export default function PlanCell({ value, ctaHref = "#", ctaLabel = "Start Now" }) {
  if (value === "c") {
    return (
      <>
        <FaCheck className={styles.check} aria-hidden="true" />
        <span className="visually-hidden">Included</span>
      </>
    );
  }

  if (value === "x") {
    return (
      <>
        <FaXmark className={styles.cross} aria-hidden="true" />
        <span className="visually-hidden">Not included</span>
      </>
    );
  }

  if (value === "startNow") {
    return (
      <a className={styles.cta} href={ctaHref}>
        {ctaLabel}
      </a>
    );
  }

  return <span className={styles.text}>{value}</span>;
}
