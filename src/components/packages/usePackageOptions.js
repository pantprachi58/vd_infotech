"use client";

import { useMemo, useState } from "react";
import { defaultBilling, defaultCurrency } from "@/lib/packages";

/**
 * The billing period / currency pair every price on a package page is derived
 * from. Both the overview grid and the single-package matrix pass this shape
 * straight to the pricing helpers.
 */
export default function usePackageOptions() {
  const [billing, setBilling] = useState(defaultBilling);
  const [currency, setCurrency] = useState(defaultCurrency);

  const options = useMemo(() => ({ billing, currency }), [billing, currency]);

  return { options, setBilling, setCurrency };
}
