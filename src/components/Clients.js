import Image from "next/image";
import { clientLogos } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Marquee from "./ui/Marquee";
import Reveal from "./ui/Reveal";
import styles from "./Clients.module.css";

export default function Clients() {
  return (
    <section className={styles.section} aria-labelledby="clients">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Our Clients</SectionLabel>
          <SectionTitle id="clients" ruled>
            Trusted By Clients
          </SectionTitle>
        </Reveal>
      </div>

      <Marquee speed={34} gap={30}>
        {clientLogos.map((client) => (
          <div key={client.name} className={styles.logo}>
            {client.image ? (
              <Image src={client.image} alt={client.name} width={180} height={120} sizes="200px" />
            ) : (
              <span className={styles.wordmark}>{client.name}</span>
            )}
          </div>
        ))}
      </Marquee>
    </section>
  );
}
