/**
 * Single access point for package data.
 *
 * Everything reads from `src/data/packages.json`, which mirrors the shape a
 * real packages API would return. When the backend lands, replace the import
 * plus `getPackage`/`listPackages` with fetches and nothing else has to change.
 */
import db from "@/data/packages.json";

export const plans = db.plans;
export const customPlan = db.customPlan;
export const billingPeriods = db.billingPeriods;
export const currencies = db.currencies;
export const overview = db.overview;

/**
 * Startup / Corporate / Enterprises label groups of plan columns — they are
 * headers spanning the table, not filters. Enterprises covers the Custom
 * column, which is quoted rather than priced.
 */
export const planGroups = db.planGroups;

export const defaultBilling = billingPeriods[0].id;
export const defaultCurrency = currencies[0].code;

/** The group a plan belongs to, for the phone layout where spans don't exist. */
export function groupForPlan(planId) {
  return planGroups.find((g) => g.plans.includes(planId)) ?? null;
}

export function listPackages() {
  return db.packages.map(({ sections, ...rest }) => rest);
}

export function listPackageSlugs() {
  return db.packages.map((p) => p.slug);
}

export function getPackage(slug) {
  return db.packages.find((p) => p.slug === slug) ?? null;
}

const findBilling = (id) =>
  billingPeriods.find((b) => b.id === id) ?? billingPeriods[0];
const findCurrency = (code) =>
  currencies.find((c) => c.code === code) ?? currencies[0];

/**
 * Base monthly INR price -> the amount payable for one billing cycle, in the
 * selected currency. Longer cycles bill every month up front and trade a
 * discount for it, so `annually` is 12 months less 18%, not 12x the sticker.
 */
export function computePrice(baseMonthlyInr, { billing, currency }) {
  const period = findBilling(billing);
  const fx = findCurrency(currency);

  return baseMonthlyInr * period.months * (1 - period.discount) * fx.rate;
}

/**
 * Symbol comes from the JSON so a cell always carries the same glyph as the
 * currency tab that selected it; the locale is used only for digit grouping,
 * which is what makes INR read in lakhs rather than thousands.
 */
export function formatPrice(amount, currencyCode) {
  const fx = findCurrency(currencyCode);
  const rounded = roundToNice(amount, fx.code);

  const digits = new Intl.NumberFormat(fx.locale, {
    minimumFractionDigits: fx.fractionDigits,
    maximumFractionDigits: fx.fractionDigits,
  }).format(rounded);

  return `${fx.symbol}${digits}`;
}

/**
 * Converted prices land on values like 4,983 — which reads like a bug on a
 * price sheet. Snap to a step that scales with the magnitude so every cell
 * still looks like a quoted price rather than a conversion artefact.
 */
function roundToNice(amount, code) {
  if (amount <= 0) return 0;
  const step = code === "JPY" ? 1000 : amount >= 100000 ? 5000 : amount >= 10000 ? 500 : amount >= 1000 ? 50 : 10;
  return Math.round(amount / step) * step;
}

/** Price label for one plan of one package, or the custom-quote text. */
export function priceLabel(pkg, planId, options) {
  const base = pkg.basePrices?.[planId];
  if (base == null) return customPlan.note;

  return formatPrice(computePrice(base, options), options.currency);
}
