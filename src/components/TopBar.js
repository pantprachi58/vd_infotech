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
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FiSmartphone, FiChevronDown } from "react-icons/fi";
import { SiThreads } from "react-icons/si";
import { site } from "@/data/site";
import styles from "./TopBar.module.css";

const socials = [
  { Icon: FaFacebookF, label: "Facebook" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaYoutube, label: "YouTube" },
  { Icon: FaLinkedinIn, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X" },
  { Icon: FaPinterestP, label: "Pinterest" },
  { Icon: FaQuora, label: "Quora" },
  { Icon: FaReddit, label: "Reddit" },
  { Icon: SiThreads, label: "Threads" },
  { Icon: FaBehance, label: "Behance" },
];

export default function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.contacts}>
          <a className={styles.item} href={`mailto:${site.email}`}>
            <MdEmail size={13} />
            {site.email}
          </a>
          <a className={styles.item} href={`tel:${site.phone.replace(/\s/g, "")}`}>
            <FiSmartphone size={13} />
            {site.phone}
          </a>
        </div>

        <div className={styles.right}>
          <span className={styles.locale} aria-label="Region: India">
            <Image 
              src="/images/indian-flag.svg" 
              alt="India" 
              width={20} 
              height={14}
              style={{ borderRadius: '2px' }}
            />
            <FiChevronDown size={12} />
          </span>
          <ul className={styles.socials}>
            {socials.map(({ Icon, label }) => (
              <li key={label}>
                <a className={styles.social} href="#" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
