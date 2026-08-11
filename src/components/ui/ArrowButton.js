import { FaArrowRight } from "react-icons/fa6";
import styles from "./ArrowButton.module.css";

export default function ArrowButton({ children, href = "#", italic = false, className = "" }) {
  return (
    <a
      href={href}
      className={`${styles.btn} ${italic ? styles.italic : ""} ${className}`}
    >
      <span className={styles.circle} aria-hidden="true">
        <FaArrowRight />
      </span>
      {children}
    </a>
  );
}
