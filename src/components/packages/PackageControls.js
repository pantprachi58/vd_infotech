"use client";

import { billingPeriods, currencies } from "@/lib/packages";
import styles from "./PackageControls.module.css";

/**
 * Billing period + currency (Figma node 1294:4944). Inset from the left by the
 * width of the first column so it lines up with the plan columns it prices.
 * `tone="dark"` is the single-package frame, which fills idle tabs solid black
 * where the overview frame uses grey.
 * Startup/Corporate/Enterprises are not here — they are column-group headers
 * inside the table, not filters.
 */
export default function PackageControls({ options, setBilling, setCurrency, tone = "grey" }) {
  return (
    <div className={`${styles.wrap} ${tone === "dark" ? styles.dark : ""}`}>
      <div className={styles.topRow}>
        <div className={styles.billing} role="tablist" aria-label="Billing period">
          {billingPeriods.map((period) => (
            <button
              key={period.id}
              type="button"
              role="tab"
              aria-selected={period.id === options.billing}
              className={`${styles.tab} ${
                period.id === options.billing ? styles.tabActive : ""
              }`}
              onClick={() => setBilling(period.id)}
            >
              {period.label}
            </button>
          ))}
        </div>

        <div className={styles.currency} role="tablist" aria-label="Currency">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              type="button"
              role="tab"
              aria-selected={currency.code === options.currency}
              className={`${styles.tab} ${styles.currencyTab} ${
                currency.code === options.currency ? styles.tabActive : ""
              }`}
              onClick={() => setCurrency(currency.code)}
            >
              <span aria-hidden="true">{currency.symbol}</span>
              <span className="visually-hidden">{currency.code}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
