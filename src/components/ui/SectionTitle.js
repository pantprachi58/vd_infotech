import styles from "./SectionTitle.module.css";

/**
 * Section heading. `ruled` adds the short red bars either side that several
 * headings in the design use; `onDark` flips them to white.
 */
export default function SectionTitle({
  children,
  ruled = false,
  onDark = false,
  as: Tag = "h2",
  className = "",
}) {
  const cls = [styles.title, onDark && styles.onDark, !ruled && styles.plain, className]
    .filter(Boolean)
    .join(" ");

  if (!ruled) return <Tag className={cls}>{children}</Tag>;

  return (
    <Tag className={cls}>
      <span className={styles.rule} aria-hidden="true" />
      <span>{children}</span>
      <span className={styles.rule} aria-hidden="true" />
    </Tag>
  );
}
