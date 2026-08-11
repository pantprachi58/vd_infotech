import { FaHandshakeAngle } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbBrain, TbChartBar } from "react-icons/tb";
import {
  MdOutlineScreenSearchDesktop,
  MdOutlineArticle,
  MdAutorenew,
  MdPlayCircleFilled,
  MdInsertChartOutlined,
} from "react-icons/md";
import { ecosystem } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import ArrowButton from "./ui/ArrowButton";
import Reveal from "./ui/Reveal";
import styles from "./Ecosystem.module.css";

const circleIcons = {
  creative: FaHandshakeAngle,
  marketing: HiOutlineSpeakerphone,
  technology: TbBrain,
};

// Red nodes on the dashed ring, as [left%, top%] of the diagram box.
const orbitDots = [
  [10.2, 30.2],
  [8.2, 53.8],
  [90, 30.2],
  [91.8, 54.1],
  [34, 82.4],
  [63.9, 83],
];

// Each orbit chip has a fixed slot around the diagram, matching the design.
const chips = [
  { index: 0, Icon: MdOutlineScreenSearchDesktop, slot: "chipLeftTop" },
  { index: 2, Icon: MdAutorenew, slot: "chipLeftLow" },
  { index: 1, Icon: MdOutlineArticle, slot: "chipRightTop" },
  { index: 3, Icon: MdPlayCircleFilled, slot: "chipRightLow" },
  { index: 4, Icon: MdInsertChartOutlined, slot: "chipBottom" },
];

export default function Ecosystem() {
  return (
    <section className={styles.section} aria-labelledby="ecosystem">
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.head}>
          <SectionLabel>Growth Ecosystem</SectionLabel>
          <h2 id="ecosystem" className={styles.title}>
            AI <span className={styles.plus}>+</span> Creative <span className={styles.plus}>+</span>{" "}
            Technology <span className={styles.plus}>+</span> Marketing
            <br />
            <span className={styles.underline}>Under One Roof</span>
          </h2>
          <p className={styles.intro}>
            Modern business growth needs more than just marketing. We combine AI, creativity,
            technology, and marketing into one connected ecosystem that helps businesses build, grow,
            automate, and scale.
          </p>
        </Reveal>

        <Reveal className={styles.diagram}>
          <span className={styles.orbitRing} aria-hidden="true" />

          {orbitDots.map(([left, top]) => (
            <span
              key={`${left}-${top}`}
              className={styles.orbitDot}
              style={{ left: `${left}%`, top: `${top}%` }}
              aria-hidden="true"
            />
          ))}

          {ecosystem.circles.map((circle) => {
            const Icon = circleIcons[circle.key];
            return (
              <div key={circle.key} className={`${styles.circle} ${styles[circle.key]}`}>
                <span className={styles.circleIcon} aria-hidden="true">
                  <Icon />
                </span>
                <h3 className={styles.circleTitle}>{circle.title}</h3>
                <p className={styles.circleSub}>{circle.subtitle}</p>
                <ul className={styles.circleList}>
                  {circle.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className={styles.core}>
            <span>
              <TbChartBar className={styles.coreIcon} aria-hidden="true" />
              <br />
              Business
              <br />
              Growth
            </span>
          </div>

          {chips.map(({ index, Icon, slot }) => (
            <span key={ecosystem.orbit[index]} className={`${styles.chip} ${styles[slot]}`}>
              <Icon className={styles.chipIcon} aria-hidden="true" />
              {ecosystem.orbit[index]}
            </span>
          ))}
        </Reveal>

        <Reveal className={styles.cta}>
          <ArrowButton href="#contact">Build Your Growth System</ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
