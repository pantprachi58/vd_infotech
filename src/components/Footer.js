import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaQuora,
  FaReddit,
  FaBehance,
  FaHeart,
} from "react-icons/fa6";
import { SiThreads } from "react-icons/si";
import { FiSmartphone, FiMapPin, FiClock } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { site, footer } from "@/data/site";
import styles from "./Footer.module.css";

const socials = [
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaQuora,
  FaReddit,
  SiThreads,
  FaBehance,
];

function Presence({ artwork, name, tag, cities, isInternational }) {
  return (
    <div className={styles.presenceRow}>
      <div className={styles.presenceBrand}>
        <Image src={artwork} alt="" width={200} height={140} />
        <span>
          <span className={styles.presenceName}>{name}</span>
          {tag && (
            <>
              <br />
              <span className={styles.presenceTag}>{tag}</span>
            </>
          )}
        </span>
      </div>

      <div>
        <ul className={styles.cities}>
          {cities.map((city) => (
            <li key={city.name} className={styles.city}>
              <Image 
                src={city.icon} 
                alt={city.name} 
                width={32} 
                height={32}
                className={styles.cityIcon}
              />
              <span className={styles.cityName}>{city.name}</span>
              {!isInternational && <span className={styles.citySoon}>Coming soon</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* brand, links, contact */}
        <div className={styles.top}>
          <div>
            <Image
              className={styles.logo}
              src="/images/vd-infotech-white-red-final-2.webp"
              alt="VD Infotech"
              width={383}
              height={73}
            />
            <p className={styles.blurb}>{footer.blurb}</p>
            <p className={styles.followTitle}>Follow us on</p>
            <ul className={styles.socials}>
              {socials.map((Icon, i) => (
                <li key={i}>
                  <a className={styles.social} href="#" aria-label="Social profile">
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className={styles.colTitle}>{column.title}</h3>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <FiSmartphone size={15} />
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <MdEmail size={15} />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className={styles.contactItem}>
                <FiMapPin size={15} />
                {site.address}
              </li>
              <li className={styles.contactItem}>
                <FiClock size={15} />
                {site.hours.days}
              </li>
              <li className={styles.contactItem}>
                <span className={styles.dot} aria-hidden="true" />
                {site.hours.time}
              </li>
            </ul>
          </div>
        </div>

        {/* presence + certifications */}
        <div className={styles.middle}>
          <div className={styles.presenceSection}>
            <Presence
              artwork="/images/main icons/Dehradun, India.png"
              name="DEHRADUN, INDIA"
              tag="Head Office"
              cities={footer.expansionCities}
              isInternational={false}
            />
            <Presence
              artwork="/images/main icons/International.png"
              name="INTERNATIONAL PRESENCE"
              cities={footer.targetMarkets}
              isInternational={false}
            />
          </div>

          <div className={styles.certSection}>
            <h3 className={styles.certTitle}>Certifications &amp; Registrations</h3>
            <div className={styles.certCarouselWrapper}>
              <ul className={styles.certGrid}>
                {footer.certifications.map((src, idx) => (
                  <li key={`${src}-${idx}`} className={styles.cert}>
                    <Image src={src} alt="" width={90} height={50} />
                  </li>
                ))}
              </ul>
              {/* Duplicate for seamless loop */}
              <ul className={styles.certGrid} aria-hidden="true">
                {footer.certifications.map((src, idx) => (
                  <li key={`${src}-duplicate-${idx}`} className={styles.cert}>
                    <Image src={src} alt="" width={90} height={50} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* payments + trust badges */}
        <div className={styles.payRow}>
          <div className={styles.payLeft}>
            <h3 className={styles.payTitle}>Accepted Payment Methods</h3>
            <ul className={styles.payGrid}>
              {footer.payments.map((src, i) => (
                <li key={`${src}-${i}`} className={styles.pay}>
                  <Image src={src} alt="" width={64} height={42} />
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.badges}>
            {footer.badges.map((src) => (
              <li key={src}>
                <Image src={src} alt="" width={160} height={54} />
              </li>
            ))}
          </ul>
        </div>

        {/* bottom bar */}
        {/* <div className={styles.bottom}>
          <span className={styles.crafted}>
            Crafted with <FaHeart className={styles.heart} /> by VD Infotech
          </span>

          <ul className={styles.bottomLinks}>
            {footer.bottomLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>

          <ul className={styles.legalLinks}>
            {footer.legalLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>

      {/* Lower footer */}
      <div className={styles.lowerFooter}>
        <div className="container">
          <div className={styles.lowerFooterContent}>
            <span className={styles.craftedLower}>
              Crafted with <FaHeart className={styles.heartLower} /> by VD Infotech
            </span>
            
            <ul className={styles.serviceLinks}>
              {footer.bottomLinks.map((link, index) => (
                <li key={link}>
                  <a href="#">{link}</a>
                  {index < footer.bottomLinks.length - 1 && <span className={styles.separator}>|</span>}
                </li>
              ))}
            </ul>

            <div className={styles.copyrightLower}>
              Copyright © 2026 VD Infotech Technologies Pvt. Ltd. All Rights Reserved.
            </div>

            <ul className={styles.policyLinks}>
              {footer.legalLinks.map((link, index) => (
                <li key={link}>
                  <a href="#">{link}</a>
                  {index < footer.legalLinks.length - 1 && <span className={styles.separator}>|</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
