import styles from "./SinglePackageHero.module.css";

/**
 * Red banner + intro copy for one package (Figma node 1022:4071). The banner
 * art is the design's own image fill, cropped to the same slice Figma uses;
 * the intro is set against a red rule rather than indented.
 */
export default function SinglePackageHero({ pkg }) {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <h1 className={styles.title}>{pkg.name}</h1>
      </div>

      <div className="container">
        <div className={styles.lead}>
          <span className={styles.rule} aria-hidden="true" />
          <p className={styles.copy}>{pkg.description}</p>
        </div>
      </div>
    </section>
  );
}
