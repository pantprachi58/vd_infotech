"use client";

import Reveal from "../ui/Reveal";
import PackageControls from "./PackageControls";
import PackageMatrix from "./PackageMatrix";
import usePackageOptions from "./usePackageOptions";
import styles from "./PackagesTableSection.module.css";

/** Owns the billing/currency/segment state for one package's sheet. */
export default function SinglePackageSection({ pkg }) {
  const controls = usePackageOptions();

  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal>
          <PackageControls {...controls} tone="dark" />
        </Reveal>

        {/* Deliberately not wrapped in Reveal: the sheet is several thousand
            pixels tall, so a viewport-triggered fade leaves it blank while the
            reader is already scrolling through it. */}
        <PackageMatrix pkg={pkg} />
      </div>
    </section>
  );
}
