import Image from "next/image";
import Reveal from "../ui/Reveal";
import styles from "./PackageHero.module.css";

export default function PackageHero() {
  const packageDetails = [
    { 
      icon: "/svg/p1.svg", 
      label: "Target Audience", 
      text: "Startups, MSMEs, Enterprises, Influencers, Service Providers, eCommerce Stores" 
    },
    { 
      icon: "/svg/p2.svg",
      label: "Availability", 
      text: "India Only (custom global package on vdinfotechpvtltd.com)" 
    },
    { 
      icon: "/svg/p3.svg", 
      label: "Validity", 
      text: "12 Months (Renewable)" 
    },
    { 
      icon: "/svg/p4.svg",
      label: "Package Type", 
      text: "Annual / Quarterly / Monthly" 
    },
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.leftColumn}>
          <Reveal>
            <div className={styles.labelBox}>
              MAIN PACKAGES
            </div>
            <h1 className={styles.title}>
              All-in-One 360° Business <span className={styles.redText}>Growth</span> Package
            </h1>
            <p className={styles.description}>
              One powerful package designed to build, market, and grow your business from every angle. From strategy to execution, we help you achieve measurable and sustainable growth.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/package.jpg"
                alt="Business meeting"
                width={460}
                height={340}
                priority
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className={styles.rightColumn}>
          <div className={styles.packageCard}>
            <div className={styles.packageHeader}>
              Package Name: VD360 Total Business Suite
            </div>
            
            <div className={styles.detailsGrid}>
              {packageDetails.map((item, i) => (
                <div key={i} className={styles.detailBox}>
                  <div className={styles.iconWrapper}>
                    <Image 
                      src={item.icon} 
                      alt={item.label}
                      width={40}
                      height={40}
                      className={styles.icon}
                    />
                  </div>
                  <h3 className={styles.detailLabel}>{item.label}</h3>
                  <p className={styles.detailText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
