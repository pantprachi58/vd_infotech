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
import { TbTargetArrow } from "react-icons/tb";
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

function Presence({ artwork, name, tag, label, labelIcon, cities }) {
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
        <p className={styles.presenceLabel}>
          {labelIcon}
          {label}
        </p>
        <ul className={styles.cities}>
          {cities.map((city) => (
            <li key={city} className={styles.city}>
              {city}
              <span className={styles.citySoon}>Coming soon</span>
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
          <div>
            <Presence
              artwork="/images/chatgpt-image-aug-5-2026-03-58-27-pm-1.webp"
              name="DEHRADUN, INDIA"
              tag="Head Office"
              label="Upcoming Expansion:"
              labelIcon={<span aria-hidden="true">⠿</span>}
              cities={footer.expansionCities}
            />
            <Presence
              artwork="/images/2018-1.webp"
              name="INTERNATIONAL PRESENCE"
              label="Target Markets:"
              labelIcon={<TbTargetArrow size={20} />}
              cities={footer.targetMarkets}
            />
          </div>

          <div>
            <h3 className={styles.certTitle}>Certifications &amp; Registrations</h3>
            <ul className={styles.certGrid}>
              {footer.certifications.map((src) => (
                <li key={src} className={styles.cert}>
                  <Image src={src} alt="" width={90} height={50} />
                </li>
              ))}
            </ul>
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
        <div className={styles.bottom}>
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
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2026 VD Infotech Technologies Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
