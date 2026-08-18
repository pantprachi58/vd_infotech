import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaQuora,
  FaRedditAlien,
  FaMedium,
  FaBehance,
} from "react-icons/fa6";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { site, footer } from "@/data/site";
import styles from "./Footer.module.css";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  pinterest: FaPinterestP,
  quora: FaQuora,
  reddit: FaRedditAlien,
  medium: FaMedium,
  behance: FaBehance,
};

/** One "icon over label over Coming soon" tile, used by both location rows. */
function PlaceTile({ item }) {
  return (
    <li className={styles.place}>
      <span className={styles.placeIcon}>
        <Image src={item.image} alt="" width={80} height={56} />
      </span>
      <span className={styles.placeName}>{item.name}</span>
      <span className={styles.placeSoon}>{footer.comingSoon}</span>
    </li>
  );
}

/** Illustration + label + red rule + optional caption, at the head of each row. */
function PresenceBlock({ image, label, caption, wide = false }) {
  return (
    <div className={`${styles.presence} ${wide ? styles.presenceWide : ""}`}>
      <Image src={image} alt="" width={wide ? 171 : 145} height={wide ? 99 : 107} />
      <p className={styles.presenceLabel}>{label}</p>
      <span className={styles.rule} aria-hidden="true" />
      {caption ? <p className={styles.presenceCaption}>{caption}</p> : null}
    </div>
  );
}

function LocationRow({ block, group, wide }) {
  return (
    <div className={styles.locationRow}>
      <PresenceBlock {...block} wide={wide} />
      <div className={styles.locationLead}>
        <Image src={group.icon} alt="" width={97} height={97} className={styles.locationIcon} />
        <p className={styles.locationTitle}>{group.title}</p>
      </div>
      <ul className={styles.places}>
        {group.items.map((item) => (
          <PlaceTile key={item.name} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* ---- brand + link columns ---- */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src={footer.logo}
              alt="VD Infotech"
              width={383}
              height={73}
              className={styles.logo}
            />
            <p className={styles.blurb}>{footer.blurb}</p>
            <p className={styles.followTitle}>Follow us on</p>
            <ul className={styles.socials}>
              {footer.socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.name}>
                    <a href={s.href} className={styles.social} aria-label={s.name}>
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footer.columns.map((col) => (
            <nav key={col.title} className={styles.col}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              <span className={styles.rule} aria-hidden="true" />
              <ul className={styles.colLinks}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contact</h3>
            <span className={styles.rule} aria-hidden="true" />
            <ul className={styles.contact}>
              <li>
                <FiPhone aria-hidden="true" />
                <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              </li>
              <li>
                <FiMail aria-hidden="true" />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <FiMapPin aria-hidden="true" />
                <span>{site.address}</span>
              </li>
              <li>
                <FiClock aria-hidden="true" />
                <span>{site.hours.days}</span>
              </li>
              <li>
                <span className={styles.dot} aria-hidden="true" />
                <span>{site.hours.time}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ---- locations (left) + certifications (right) ---- */}
        <div className={styles.middle}>
          <div className={styles.locations}>
            <LocationRow block={footer.presence.head} group={footer.expansion} />
            <LocationRow block={footer.presence.international} group={footer.markets} wide />
          </div>

          <div className={styles.certs}>
            <h3 className={styles.certsTitle}>{footer.certifications.title}</h3>
            <span className={styles.rule} aria-hidden="true" />
            <ul className={styles.certGrid}>
              {footer.certifications.items.map((c) => (
                <li key={c.name} className={styles.certCard}>
                  <Image src={c.image} alt={c.name} width={110} height={62} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---- payments (left) + trust badges (right) ---- */}
        <div className={styles.bottomRow}>
          <div className={styles.payments}>
            <div className={styles.payHeading}>
              <span className={styles.rule} aria-hidden="true" />
              <h3>{footer.payments.title}</h3>
            </div>
            <ul className={styles.payGrid}>
              {footer.payments.items.map((p) => (
                <li key={p.name} className={styles.payCard}>
                  <Image src={p.image} alt={p.name} width={65} height={50} unoptimized />
                  {p.label ? <span className={styles.payLabel}>{p.label}</span> : null}
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.badges}>
            {footer.badges.map((b) => (
              <li key={b.name}>
                <Image src={b.image} alt={b.name} width={176} height={88} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---- legal bar ---- */}
      <div className={styles.legal}>
        <div className="container">
          <div className={styles.legalInner}>
            <p className={styles.crafted}>
              {footer.craftedWith}
              <span className={styles.craftedLinks}>
                {footer.bottomLinks.map((l) => (
                  <a key={l} href="#">
                    {l}
                  </a>
                ))}
              </span>
            </p>
            <p className={styles.copyright}>{footer.copyright}</p>
            <p className={styles.legalLinks}>
              {footer.legalLinks.map((l) => (
                <a key={l} href="#">
                  {l}
                </a>
              ))}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
