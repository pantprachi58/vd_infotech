"use client";

import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import SectionLabel from "../ui/SectionLabel";
import Reveal from "../ui/Reveal";
import styles from "./PackageTable.module.css";

export default function PackageTable() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [selectedService, setSelectedService] = useState("all");

  const tabs = [
    { id: "monthly", label: "Monthly" },
    { id: "quarterly", label: "Quarterly" },
    { id: "6-months", label: "6 Months" },
    { id: "annually", label: "Annually" },
    { id: "li", label: "LI" },
    { id: "si", label: "SI" },
    { id: "ot", label: "OT" },
    { id: "ult", label: "ULT" },
  ];

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "services", label: "Services" },
    { id: "starter", label: "Starter" },
    { id: "growth", label: "Growth" },
    { id: "acceleration", label: "Acceleration" },
    { id: "360", label: "360" },
    { id: "consultancy", label: "Consultancy" },
    { id: "other", label: "Other" },
  ];

  const packages = [
    {
      name: "SEO Packages",
      starter: "₹50,000",
      growth: "₹1,00,000",
      acceleration: "₹3,00,000",
      full360: "₹ on demand",
      consultancy: "₹ 25,000",
      li: "₹ 3,50,000",
      si: "₹ 8,00,000",
      ot: "₹ 18,00,000",
      ult: "₹ 36,00,000"
    },
    {
      name: "Email Packages",
      starter: "₹25,000",
      growth: "₹50,000",
      acceleration: "₹1,00,000",
      full360: "₹ 2,50,000",
      consultancy: "₹ 10,000",
      li: "₹ 1,50,000",
      si: "₹ 3,50,000",
      ot: "₹ 7,00,000",
      ult: "₹ 12,00,000"
    },
    {
      name: "SMO Packages",
      starter: "₹30,000",
      growth: "₹60,000",
      acceleration: "₹1,50,000",
      full360: "₹ 3,50,000",
      consultancy: "₹ 15,000",
      li: "₹ 2,00,000",
      si: "₹ 4,50,000",
      ot: "₹ 9,00,000",
      ult: "₹ 15,00,000"
    },
    {
      name: "English Wikipedia",
      starter: "₹1,00,000",
      growth: "₹1,50,000",
      acceleration: "₹2,00,000",
      full360: "₹ 3,00,000",
      consultancy: "₹ 50,000",
      li: "₹ 3,50,000",
      si: "₹ 5,00,000",
      ot: "₹ 7,00,000",
      ult: "₹ 10,00,000"
    },
    {
      name: "Google+ Packages",
      starter: "₹50,000",
      growth: "₹75,000",
      acceleration: "₹1,00,000",
      full360: "₹ 1,50,000",
      consultancy: "₹ 25,000",
      li: "₹ 1,50,000",
      si: "₹ 2,25,000",
      ot: "₹ 3,50,000",
      ult: "₹ 5,00,000"
    },
    {
      name: "Google E-commerce Packages",
      starter: "₹75,000",
      growth: "₹1,50,000",
      acceleration: "₹3,00,000",
      full360: "₹ 6,00,000",
      consultancy: "₹ 35,000",
      li: "₹ 4,00,000",
      si: "₹ 8,00,000",
      ot: "₹ 15,00,000",
      ult: "₹ 25,00,000"
    },
    {
      name: "International SEO Packages",
      starter: "₹1,00,000",
      growth: "₹2,00,000",
      acceleration: "₹4,00,000",
      full360: "₹ 8,00,000",
      consultancy: "₹ 50,000",
      li: "₹ 5,00,000",
      si: "₹ 10,00,000",
      ot: "₹ 20,00,000",
      ult: "₹ 40,00,000"
    },
    {
      name: "E-commerce SEO Packages",
      starter: "₹60,000",
      growth: "₹1,20,000",
      acceleration: "₹2,50,000",
      full360: "₹ 5,00,000",
      consultancy: "₹ 30,000",
      li: "₹ 3,00,000",
      si: "₹ 6,00,000",
      ot: "₹ 12,00,000",
      ult: "₹ 20,00,000"
    },
    {
      name: "E-commerce Management Packages",
      starter: "₹80,000",
      growth: "₹1,50,000",
      acceleration: "₹3,00,000",
      full360: "₹ 6,00,000",
      consultancy: "₹ 40,000",
      li: "₹ 4,00,000",
      si: "₹ 8,00,000",
      ot: "₹ 16,00,000",
      ult: "₹ 30,00,000"
    },
    {
      name: "Full Service Management Packages",
      starter: "₹1,50,000",
      growth: "₹3,00,000",
      acceleration: "₹6,00,000",
      full360: "₹ 12,00,000",
      consultancy: "₹ 75,000",
      li: "₹ 7,50,000",
      si: "₹ 15,00,000",
      ot: "₹ 30,00,000",
      ult: "₹ 60,00,000"
    },
    {
      name: "E-commerce Marketing Packages",
      starter: "₹70,000",
      growth: "₹1,40,000",
      acceleration: "₹2,80,000",
      full360: "₹ 5,50,000",
      consultancy: "₹ 35,000",
      li: "₹ 3,50,000",
      si: "₹ 7,00,000",
      ot: "₹ 14,00,000",
      ult: "₹ 25,00,000"
    },
    {
      name: "Brand Promotion Packages",
      starter: "₹1,00,000",
      growth: "₹2,00,000",
      acceleration: "₹4,00,000",
      full360: "₹ 8,00,000",
      consultancy: "₹ 50,000",
      li: "₹ 5,00,000",
      si: "₹ 10,00,000",
      ot: "₹ 20,00,000",
      ult: "₹ 40,00,000"
    },
    {
      name: "Online Reputation Packages",
      starter: "₹80,000",
      growth: "₹1,50,000",
      acceleration: "₹3,00,000",
      full360: "₹ 6,00,000",
      consultancy: "₹ 40,000",
      li: "₹ 4,00,000",
      si: "₹ 8,00,000",
      ot: "₹ 16,00,000",
      ult: "₹ 30,00,000"
    },
    {
      name: "YouTuber Marketing Packages",
      starter: "₹60,000",
      growth: "₹1,20,000",
      acceleration: "₹2,50,000",
      full360: "₹ 5,00,000",
      consultancy: "₹ 30,000",
      li: "₹ 3,00,000",
      si: "₹ 6,00,000",
      ot: "₹ 12,00,000",
      ult: "₹ 20,00,000"
    },
    {
      name: "Lead Generation Packages",
      starter: "₹40,000",
      growth: "₹80,000",
      acceleration: "₹1,60,000",
      full360: "₹ 3,20,000",
      consultancy: "₹ 20,000",
      li: "₹ 2,00,000",
      si: "₹ 4,00,000",
      ot: "₹ 8,00,000",
      ult: "₹ 15,00,000"
    },
    {
      name: "Link Building Packages",
      starter: "₹35,000",
      growth: "₹70,000",
      acceleration: "₹1,40,000",
      full360: "₹ 2,80,000",
      consultancy: "₹ 18,000",
      li: "₹ 1,75,000",
      si: "₹ 3,50,000",
      ot: "₹ 7,00,000",
      ult: "₹ 12,00,000"
    },
  ];

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

        <Reveal delay={0.1}>
          <div className={styles.tabNav}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className={styles.serviceNav}>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.serviceBtn} ${
                  selectedService === cat.id ? styles.serviceBtnActive : ""
                }`}
                onClick={() => setSelectedService(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFirst}>Services</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Acceleration</th>
                  <th>360</th>
                  <th>Consultancy</th>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={idx} className={styles.row}>
                    <td className={styles.serviceName}>{pkg.name}</td>
                    <td>{pkg.starter}</td>
                    <td>{pkg.growth}</td>
                    <td>{pkg.acceleration}</td>
                    <td>{pkg.full360}</td>
                    <td>{pkg.consultancy}</td>
                    <td>
                      <button className={styles.moreBtn}>More details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
