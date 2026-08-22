"use client";

import PackageControls from "./PackageControls";
import PackagesOverview from "./PackagesOverview";
import usePackageOptions from "./usePackageOptions";
import styles from "./PackagesTableSection.module.css";

/** Owns the billing/currency/segment state for the whole /packages sheet. */
export default function PackagesTableSection({ packages }) {
  const controls = usePackageOptions();

  return (
    <section className={styles.section}>
      <div className="container">
        <PackageControls {...controls} />
        <PackagesOverview packages={packages} options={controls.options} />
      </div>
    </section>
  );
}
