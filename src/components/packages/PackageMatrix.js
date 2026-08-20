"use client";

import { useState } from "react";
import Table from "react-bootstrap/Table";
import { customPlan, groupForPlan, planGroups, plans } from "@/lib/packages";
import PlanCell from "./PlanCell";
import styles from "./PackageMatrix.module.css";

/**
 * The single-package comparison sheet (Figma node 1022:4071).
 *
 * The frame has no grid lines — rows alternate #f0f0f2 / #ffffff — and each
 * section is introduced by a full-width red band. The Custom column carries one
 * "As Per Need" badge per section rather than a value per row.
 *
 * Desktop keeps the full 8-column grid with the activity column pinned while
 * the plans scroll. Below 992px an 8-column sheet stops being readable at all,
 * so the same data is re-projected as one plan at a time behind a plan picker.
 */
export default function PackageMatrix({ pkg }) {
  const [mobilePlan, setMobilePlan] = useState(plans[0].id);
  const activeIndex = plans.findIndex((p) => p.id === mobilePlan);

  return (
    <>
      {/* ---- desktop / tablet ------------------------------------------- */}
      <div className={styles.desktop}>
        <Table responsive borderless className={styles.table}>
          {/* `table-layout: fixed` takes widths from the first row, which is
              the spanning group row, so they are declared here instead. */}
          <colgroup>
            <col className={styles.colActivity} />
            {plans.map((plan) => (
              <col key={plan.id} className={styles.colPlan} />
            ))}
            <col className={styles.colCustom} />
          </colgroup>

          <thead>
            {/* Segment slabs span the plan columns they name; they label the
                columns, they do not filter them. */}
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
              <th scope="col" className={`${styles.head} ${styles.headActivity}`}>
                Activity
              </th>
              {plans.map((plan) => (
                <th key={plan.id} scope="col" className={styles.head}>
                  {plan.label}
                </th>
              ))}
              <th scope="col" className={styles.head}>
                {customPlan.label}
              </th>
            </tr>
          </thead>

          {pkg.sections.map((section, si) => (
            <tbody key={section.title ?? `overview-${si}`}>
              {section.title ? (
                <tr>
                  <td className={styles.band} colSpan={plans.length + 2}>
                    {section.title}
                  </td>
                </tr>
              ) : null}

              {section.rows.map((row, ri) => (
                <tr key={row.label} className={ri % 2 === 0 ? styles.odd : styles.even}>
                  <th
                    scope="row"
                    className={`${styles.rowLabel} ${
                      row.values[0] === "startNow" ? styles.journeyLabel : ""
                    }`}
                  >
                    {row.label}
                  </th>

                  {row.values.map((value, vi) => (
                    <td key={plans[vi].id} className={styles.cell}>
                      <PlanCell value={value} />
                    </td>
                  ))}

                  {ri === 0 ? (
                    <td className={styles.customCell} rowSpan={section.rows.length}>
                      <span className={styles.badge}>{section.custom}</span>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          ))}
        </Table>
      </div>

      {/* ---- phones ------------------------------------------------------ */}
      <div className={styles.mobile}>
        <p className={styles.groupCaption}>{groupForPlan(mobilePlan)?.label}</p>

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

        {pkg.sections.map((section, si) => (
          <section key={section.title ?? `overview-${si}`} className={styles.mobileSection}>
            {section.title ? (
              <h2 className={styles.mobileBand}>{section.title}</h2>
            ) : null}

            <dl className={styles.mobileList}>
              {section.rows.map((row, ri) => (
                <div
                  key={row.label}
                  className={`${styles.mobileRow} ${ri % 2 === 0 ? styles.odd : styles.even}`}
                >
                  <dt>{row.label}</dt>
                  <dd>
                    <PlanCell value={row.values[activeIndex]} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
