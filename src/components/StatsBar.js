import { TbBox, TbMessageStar, TbLayoutGrid, TbAward } from "react-icons/tb";
import { stats } from "@/data/site";
import Reveal from "./ui/Reveal";
import styles from "./StatsBar.module.css";

const icons = { box: TbBox, star: TbMessageStar, grid: TbLayoutGrid, medal: TbAward };

export default function StatsBar() {
  return (
    <section className={styles.bar} aria-label="Company statistics">
      <div className="container">
        <ul className={styles.grid}>
          {stats.map((stat, i) => {
            const Icon = icons[stat.icon];
            return (
              <Reveal key={stat.label} as="li" className={styles.item} delay={i * 0.08}>
                <Icon className={styles.icon} aria-hidden="true" />
                <span>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.label}>{stat.label}</span>
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
