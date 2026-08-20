"use client";

import { useState } from "react";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import { customPlan, groupForPlan, overview, planGroups, plans, priceLabel } from "@/lib/packages";
import styles from "./PackagesOverview.module.css";

/**
 * Every package priced across every plan (Figma node 1294:4944). The service
 * name is the link through to that package's own sheet.
 */
export default function PackagesOverview({ packages, options }) {
  const [mobilePlan, setMobilePlan] = useState(plans[0].id);
  const activePlan = plans.find((p) => p.id === mobilePlan) ?? plans[0];

  return (
    <>
      <div className={styles.desktop}>
        <Table responsive borderless className={styles.table}>
          {/* With `table-layout: fixed` the widths come from the first row —
              which is now the spanning group row — so they are declared here
              instead. Figma: 436 / 6x171 / 246 of the 1706 table. */}
          <colgroup>
            <col className={styles.colService} />
            {plans.map((plan) => (
              <col key={plan.id} className={styles.colPlan} />
            ))}
            <col className={styles.colCustom} />
          </colgroup>

          <thead>
            {/* Figma stacks the segment slabs directly over the plan columns
                they name, so they are a spanning header row, not a filter. */}
            <tr className={styles.groupRow}>
              <td className={styles.groupSpacer} />
              {planGroups.map((group) => (
                <th
                  key={group.id}
                  scope="colgroup"
                  colSpan={group.plans.length}
                  className={styles.groupHead}
                >
                  <span className={styles.groupSlab}>{group.label}</span>
                </th>
              ))}
            </tr>

            <tr>
              <th scope="col" className={`${styles.head} ${styles.headService}`}>
                {overview.tableLabel}
              </th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col" className={styles.head}>
                  {plan.label}
                </th>
              ))}
              <th scope="col" className={`${styles.head} ${styles.headCustom}`}>
                {customPlan.label}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row" className={`${styles.rowLabel} ${styles.journeyLabel}`}>
                Start Your Journey With Us
              </th>
              {plans.map((plan) => (
                <td key={plan.id} className={styles.cell}>
                  <a className={styles.startNow} href="#">
                    {overview.ctaLabel}
                  </a>
                </td>
              ))}
              <td className={styles.customCell} />
            </tr>

            {packages.map((pkg) => (
              <tr key={pkg.slug}>
                <th scope="row" className={styles.rowLabel}>
                  <Link className={styles.serviceLink} href={`/packages/${pkg.slug}`}>
                    <span className={styles.bullet} aria-hidden="true" />
                    {pkg.name}
                  </Link>
                </th>

                {plans.map((plan) => (
                  <td key={plan.id} className={styles.cell}>
                    {priceLabel(pkg, plan.id, options)}
                  </td>
                ))}

                <td className={styles.customCell}>As per need</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* ---- phones: one plan column at a time --------------------------- */}
      <div className={styles.mobile}>
        <p className={styles.groupCaption}>
          {groupForPlan(activePlan.id)?.label}
        </p>

        <div className={styles.planPicker} role="tablist" aria-label="Plan">
          {plans.map((plan) => (
            <button
              key={plan.id}
              type="button"
              role="tab"
              aria-selected={plan.id === mobilePlan}
              className={`${styles.planPick} ${
                plan.id === mobilePlan ? styles.planPickActive : ""
              }`}
              onClick={() => setMobilePlan(plan.id)}
            >
              {plan.label}
            </button>
          ))}
        </div>

        <ul className={styles.mobileList}>
          {packages.map((pkg) => (
            <li key={pkg.slug} className={styles.mobileRow}>
              <Link href={`/packages/${pkg.slug}`} className={styles.mobileLink}>
                <span className={styles.mobileName}>
                  <span className={styles.bullet} aria-hidden="true" />
                  {pkg.name}
                </span>
                <span className={styles.mobilePrice}>
                  {priceLabel(pkg, activePlan.id, options)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
