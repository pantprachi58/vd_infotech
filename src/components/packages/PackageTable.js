"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import styles from "./PackageTable.module.css";

export default function PackageTable() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [businessType, setBusinessType] = useState("startup");
  const [selectedTier, setSelectedTier] = useState("all");

  const billingPeriods = [
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "bi-annually", label: "Bi-Annually" },
    { id: "annually", label: "Annually" },
  ];

  const businessTypes = [
    { id: "startup", label: "Startup Business" },
    { id: "corporate", label: "Corporate Business" },
    { id: "enterprise", label: "Enterprises" },
  ];

  const tiers = [
    { id: "all", label: "All", abbr: "All" },
    { id: "starter", label: "Starter", abbr: "T" },
    { id: "growth", label: "Growth", abbr: "S" },
    { id: "accelerator", label: "Accelerator", abbr: "B" },
    { id: "ace", label: "Ace", abbr: "C" },
    { id: "dominator", label: "Dominator", abbr: "V" },
  ];

  // Service packages with pricing data based on the image
  const servicePackages = [
    {
      name: "SEO Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹25,000",
          growth: "₹50,000",
          accelerator: "₹75,000",
          ace: "₹1,20,000",
          dominator: "₹2,00,000",
          conqueror: "₹3,50,000",
        },
        corporate: {
          starter: "₹50,000",
          growth: "₹1,00,000",
          accelerator: "₹1,50,000",
          ace: "₹2,50,000",
          dominator: "₹4,00,000",
          conqueror: "₹7,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "SMO Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹20,000",
          growth: "₹40,000",
          accelerator: "₹60,000",
          ace: "₹1,00,000",
          dominator: "₹1,50,000",
          conqueror: "₹2,50,000",
        },
        corporate: {
          starter: "₹40,000",
          growth: "₹80,000",
          accelerator: "₹1,20,000",
          ace: "₹2,00,000",
          dominator: "₹3,00,000",
          conqueror: "₹5,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "PPC Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹30,000",
          growth: "₹60,000",
          accelerator: "₹90,000",
          ace: "₹1,50,000",
          dominator: "₹2,50,000",
          conqueror: "₹4,00,000",
        },
        corporate: {
          starter: "₹60,000",
          growth: "₹1,20,000",
          accelerator: "₹1,80,000",
          ace: "₹3,00,000",
          dominator: "₹5,00,000",
          conqueror: "₹8,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "SMM Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹25,000",
          growth: "₹50,000",
          accelerator: "₹60,000",
          ace: "₹1,25,000",
          dominator: "₹1,75,000",
          conqueror: "₹2,50,000",
        },
        corporate: {
          starter: "₹50,000",
          growth: "₹1,00,000",
          accelerator: "₹1,20,000",
          ace: "₹2,50,000",
          dominator: "₹3,50,000",
          conqueror: "₹5,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Graphics Design Packages",
      category: "design",
      pricing: {
        startup: {
          starter: "₹15,000",
          growth: "₹30,000",
          accelerator: "₹50,000",
          ace: "₹80,000",
          dominator: "₹1,20,000",
          conqueror: "₹2,00,000",
        },
        corporate: {
          starter: "₹30,000",
          growth: "₹60,000",
          accelerator: "₹1,00,000",
          ace: "₹1,60,000",
          dominator: "₹2,40,000",
          conqueror: "₹4,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "E-Commerce SEO Packages",
      category: "ecommerce",
      pricing: {
        startup: {
          starter: "₹35,000",
          growth: "₹70,000",
          accelerator: "₹1,00,000",
          ace: "₹1,75,000",
          dominator: "₹2,75,000",
          conqueror: "₹4,00,000",
        },
        corporate: {
          starter: "₹70,000",
          growth: "₹1,40,000",
          accelerator: "₹2,00,000",
          ace: "₹3,50,000",
          dominator: "₹5,50,000",
          conqueror: "₹8,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "E-Commerce PPC Packages",
      category: "ecommerce",
      pricing: {
        startup: {
          starter: "₹40,000",
          growth: "₹80,000",
          accelerator: "₹1,20,000",
          ace: "₹2,00,000",
          dominator: "₹3,30,000",
          conqueror: "₹5,00,000",
        },
        corporate: {
          starter: "₹80,000",
          growth: "₹1,60,000",
          accelerator: "₹2,40,000",
          ace: "₹4,00,000",
          dominator: "₹6,60,000",
          conqueror: "₹10,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Website Development Packages",
      category: "development",
      pricing: {
        startup: {
          starter: "₹50,000",
          growth: "₹1,00,000",
          accelerator: "₹1,50,000",
          ace: "₹2,50,000",
          dominator: "₹4,00,000",
          conqueror: "₹6,00,000",
        },
        corporate: {
          starter: "₹1,00,000",
          growth: "₹2,00,000",
          accelerator: "₹3,00,000",
          ace: "₹5,00,000",
          dominator: "₹8,00,000",
          conqueror: "₹12,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Application Development",
      category: "development",
      pricing: {
        startup: {
          starter: "₹75,000",
          growth: "₹1,50,000",
          accelerator: "₹2,50,000",
          ace: "₹3,50,000",
          dominator: "₹5,00,000",
          conqueror: "₹7,00,000",
        },
        corporate: {
          starter: "₹1,50,000",
          growth: "₹3,00,000",
          accelerator: "₹5,00,000",
          ace: "₹7,00,000",
          dominator: "₹10,00,000",
          conqueror: "₹14,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Software Development",
      category: "development",
      pricing: {
        startup: {
          starter: "₹1,00,000",
          growth: "₹2,00,000",
          accelerator: "₹3,00,000",
          ace: "₹4,50,000",
          dominator: "₹7,00,000",
          conqueror: "₹10,00,000",
        },
        corporate: {
          starter: "₹2,00,000",
          growth: "₹4,00,000",
          accelerator: "₹6,00,000",
          ace: "₹9,00,000",
          dominator: "₹14,00,000",
          conqueror: "₹20,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Performance Marketing",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹40,000",
          growth: "₹80,000",
          accelerator: "₹1,25,000",
          ace: "₹2,00,000",
          dominator: "₹3,50,000",
          conqueror: "₹5,00,000",
        },
        corporate: {
          starter: "₹80,000",
          growth: "₹1,60,000",
          accelerator: "₹2,50,000",
          ace: "₹4,00,000",
          dominator: "₹7,00,000",
          conqueror: "₹10,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Influencer Marketing",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹30,000",
          growth: "₹60,000",
          accelerator: "₹1,00,000",
          ace: "₹1,75,000",
          dominator: "₹3,00,000",
          conqueror: "₹5,00,000",
        },
        corporate: {
          starter: "₹60,000",
          growth: "₹1,20,000",
          accelerator: "₹2,00,000",
          ace: "₹3,50,000",
          dominator: "₹6,00,000",
          conqueror: "₹10,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Email Marketing Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹15,000",
          growth: "₹30,000",
          accelerator: "₹60,000",
          ace: "₹1,00,000",
          dominator: "₹1,50,000",
          conqueror: "₹2,50,000",
        },
        corporate: {
          starter: "₹30,000",
          growth: "₹60,000",
          accelerator: "₹1,20,000",
          ace: "₹2,00,000",
          dominator: "₹3,00,000",
          conqueror: "₹5,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Digital Marketing Packages",
      category: "marketing",
      pricing: {
        startup: {
          starter: "₹40,000",
          growth: "₹80,000",
          accelerator: "₹1,20,000",
          ace: "₹2,00,000",
          dominator: "₹3,50,000",
          conqueror: "₹5,00,000",
        },
        corporate: {
          starter: "₹80,000",
          growth: "₹1,60,000",
          accelerator: "₹2,40,000",
          ace: "₹4,00,000",
          dominator: "₹7,00,000",
          conqueror: "₹10,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "Virtual Assistant Packages",
      category: "services",
      pricing: {
        startup: {
          starter: "₹15,000",
          growth: "₹30,000",
          accelerator: "₹50,000",
          ace: "₹75,000",
          dominator: "₹1,00,000",
          conqueror: "₹2,00,000",
        },
        corporate: {
          starter: "₹30,000",
          growth: "₹60,000",
          accelerator: "₹1,00,000",
          ace: "₹1,50,000",
          dominator: "₹2,00,000",
          conqueror: "₹4,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
    {
      name: "UI/UX Design Packages",
      category: "design",
      pricing: {
        startup: {
          starter: "₹20,000",
          growth: "₹40,000",
          accelerator: "₹70,000",
          ace: "₹1,20,000",
          dominator: "₹2,00,000",
          conqueror: "₹3,00,000",
        },
        corporate: {
          starter: "₹40,000",
          growth: "₹80,000",
          accelerator: "₹1,40,000",
          ace: "₹2,40,000",
          dominator: "₹4,00,000",
          conqueror: "₹6,00,000",
        },
        enterprise: {
          custom: "As per need",
        },
      },
    },
  ];

  // Filter packages based on selected tier
  const getFilteredPackages = () => {
    return servicePackages;
  };

  // Get columns to display
  const getDisplayColumns = () => {
    if (businessType === "enterprise") {
      return ["custom"];
    }

    if (selectedTier === "all") {
      return ["starter", "growth", "accelerator", "ace", "dominator", "conqueror"];
    }

    return [selectedTier];
  };

  // Get column header labels
  const getColumnHeaders = () => {
    if (businessType === "enterprise") {
      return [{ key: "custom", label: "Custom" }];
    }

    const allHeaders = [
      { key: "starter", label: "Starter" },
      { key: "growth", label: "Growth" },
      { key: "accelerator", label: "Accelerator" },
      { key: "ace", label: "Ace" },
      { key: "dominator", label: "Dominator" },
      { key: "conqueror", label: "Conqueror" },
    ];

    if (selectedTier === "all") {
      return allHeaders;
    }

    return allHeaders.filter(h => h.key === selectedTier);
  };

  // Get pricing for a service
  const getPricing = (service, column) => {
    const pricing = service.pricing[businessType];
    if (!pricing) return "N/A";
    return pricing[column] || "N/A";
  };

  const handleStartNow = (serviceName, tier) => {
    // Implement your "Start Now" action here
    console.log(`Starting ${serviceName} with ${tier} plan`);
    // You can add navigation or modal opening logic here
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <SectionLabel>Package Pricing</SectionLabel>
          <SectionTitle>Choose Your Perfect Package</SectionTitle>
          <p className={styles.subtitle}>
            Flexible pricing options designed for businesses at every stage of growth
          </p>
        </Reveal>

        {/* Billing Period Tabs */}
        <Reveal delay={0.1}>
          <div className={styles.tabNav}>
            {billingPeriods.map((period) => (
              <button
                key={period.id}
                className={`${styles.tab} ${billingPeriod === period.id ? styles.tabActive : ""}`}
                onClick={() => setBillingPeriod(period.id)}
              >
                {period.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Business Type Selection */}
        <Reveal delay={0.15}>
          <div className={styles.businessTypeNav}>
            {businessTypes.map((type) => (
              <button
                key={type.id}
                className={`${styles.businessTypeBtn} ${
                  businessType === type.id ? styles.businessTypeBtnActive : ""
                }`}
                onClick={() => setBusinessType(type.id)}
              >
                {type.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tier Filter Buttons */}
        {businessType !== "enterprise" && (
          <Reveal delay={0.2}>
            <div className={styles.tierNav}>
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  className={`${styles.tierBtn} ${
                    selectedTier === tier.id ? styles.tierBtnActive : ""
                  }`}
                  onClick={() => setSelectedTier(tier.id)}
                  title={tier.label}
                >
                  {tier.abbr}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Pricing Table */}
        <Reveal delay={0.25}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFirst}>Services</th>
                  {businessType === "enterprise" ? (
                    <>
                      <th colSpan="6" className={styles.thStartNow}>
                        Start Your Journey With Us
                      </th>
                    </>
                  ) : (
                    getColumnHeaders().map((header) => (
                      <th key={header.key}>
                        <div className={styles.thContent}>
                          <span className={styles.thLabel}>{header.label}</span>
                          <button
                            className={styles.startNowBtn}
                            onClick={() => handleStartNow("", header.key)}
                          >
                            Start Now
                          </button>
                        </div>
                      </th>
                    ))
                  )}
                </tr>
              </thead>
              <tbody>
                {getFilteredPackages().map((service, idx) => (
                  <tr key={idx} className={styles.row}>
                    <td className={styles.serviceName}>{service.name}</td>
                    {businessType === "enterprise" ? (
                      <td colSpan="6" className={styles.customCell}>
                        <span className={styles.customText}>As per need</span>
                        <button
                          className={styles.contactBtn}
                          onClick={() => handleStartNow(service.name, "custom")}
                        >
                          Contact Us
                        </button>
                      </td>
                    ) : (
                      getDisplayColumns().map((column) => (
                        <td key={column} className={styles.priceCell}>
                          {getPricing(service, column)}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Additional Info */}
        <Reveal delay={0.3}>
          <div className={styles.footerNote}>
            <p>
              * Prices may vary based on requirements and project scope. All packages include
              dedicated support and regular reporting.
            </p>
            <p>
              ** Enterprise packages are customized based on specific business needs. Contact us for
              a detailed quote.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
