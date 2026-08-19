"use client";

import {
  Palette,
  Megaphone,
  Bot,
  TrendingUp,
  Search,
  MessageSquareText,
  RefreshCw,
  Cog,
  BarChart3,
} from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";

import Reveal from "./ui/Reveal";
import styles from "./Ecosystem.module.css";

export default function GrowthEcosystem() {
  return (
    <section className={styles.section} aria-labelledby="growth-ecosystem">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Growth Ecosystem</SectionLabel>
          <SectionTitle id="growth-ecosystem" ruled>
            AI + Creative + Technology + Marketing{" "}
            <span className={styles.accent}>Under One Roof</span>
          </SectionTitle>
          <p className={styles.description}>
            Modern business growth needs more than just marketing. We combine
            AI, creativity, technology, and marketing into one connected
            ecosystem that helps businesses build, grow, automate, and scale.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className={styles.diagramWrapper}>
            <div className={styles.diagramBox}>
            {/* dashed outer ring */}
            <div className={styles.ring} aria-hidden="true" />

            {/* decorative dots along the ring — rotate together as one unit */}
            <div className={styles.dotsOrbit} aria-hidden="true">
              <span className={`${styles.orbitDot} ${styles.dot1}`} />
              <span className={`${styles.orbitDot} ${styles.dot2}`} />
              <span className={`${styles.orbitDot} ${styles.dot3}`} />
              <span className={`${styles.orbitDot} ${styles.dot4}`} />
              <span className={`${styles.orbitDot} ${styles.dot5}`} />
              <span className={`${styles.orbitDot} ${styles.dot6}`} />
              <span className={`${styles.orbitDot} ${styles.dot7}`} />
            </div>

            {/* Technology circle (back layer) */}
            <div className={`${styles.circle} ${styles.circleTechnology}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconTech}`}>
                  {/* <Bot className={styles.icon} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
<rect width="101" height="101" rx="50.5" fill="#0C0C0C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.6706 21.6992C48.0928 21.6992 47.5387 21.9287 47.1301 22.3373C46.7215 22.7459 46.492 23.3 46.492 23.8778V30.9364H37.8649C37.0457 28.8014 35.1329 27.638 32.3226 27.638C28.4883 27.638 26.3315 29.7948 26.3315 33.6291C26.3315 37.4634 28.4883 39.6245 32.3226 39.6245C35.1112 39.6245 37.0152 38.4786 37.8431 36.3784H46.492V40.6005H41.4029C40.6806 40.6005 39.988 40.8874 39.4773 41.3981C38.9666 41.9088 38.6797 42.6015 38.6797 43.3237C38.6797 44.046 38.9666 44.7386 39.4773 45.2493C39.988 45.76 40.6806 46.0469 41.4029 46.0469H46.4877V48.8006H31.8999C31.059 46.7354 29.168 45.6112 26.4012 45.6112C22.5669 45.6112 20.4102 47.768 20.4102 51.6023C20.4102 55.4366 22.5669 57.6021 26.4012 57.6021C29.2377 57.6021 31.1549 56.4213 31.9609 54.2514H46.492V66.6736H42.9322V60.5083C42.9322 59.786 42.6453 59.0934 42.1346 58.5827C41.6239 58.072 40.9313 57.7851 40.209 57.7851H35.3377C34.6155 57.7851 33.9228 58.072 33.4121 58.5827C32.9014 59.0934 32.6145 59.786 32.6145 60.5083C32.6145 61.2305 32.9014 61.9232 33.4121 62.4339C33.9228 62.9446 34.6155 63.2315 35.3377 63.2315H37.4814V66.6736H34.3443C33.5164 64.5648 31.6124 63.4145 28.8194 63.4145C24.9852 63.4145 22.824 65.5713 22.824 69.4099C22.824 73.2486 24.9808 75.401 28.8194 75.401C31.6254 75.401 33.5339 74.242 34.353 72.1157H46.492V77.1177C46.492 77.6955 46.7215 78.2496 47.1301 78.6582C47.5387 79.0668 48.0928 79.2963 48.6706 79.2963H65.0099C67.321 79.2963 69.5375 78.3782 71.1718 76.7439C72.806 75.1097 73.7242 72.8932 73.7242 70.582V62.9091C74.1889 62.8713 74.6392 62.806 75.0749 62.713C76.1897 62.4663 77.2415 61.9916 78.1641 61.3187C80.4037 59.7501 80.9788 56.9703 80.3644 54.7133C78.4996 47.89 76.2818 40.7399 72.6087 34.8578C72.0872 34.0212 71.5305 33.2072 70.9399 32.4178C66.1209 26.0041 59.1582 21.6992 48.6706 21.6992ZM66.6656 48.3214C66.6656 47.5991 66.3787 46.9065 65.868 46.3958C65.3573 45.8851 64.6646 45.5981 63.9424 45.5981C63.2201 45.5981 62.5275 45.8851 62.0168 46.3958C61.5061 46.9065 61.2192 47.5991 61.2192 48.3214V49.0403C61.2192 49.7625 61.5061 50.4552 62.0168 50.9659C62.5275 51.4766 63.2201 51.7635 63.9424 51.7635C64.6646 51.7635 65.3573 51.4766 65.868 50.9659C66.3787 50.4552 66.6656 49.7625 66.6656 49.0403V48.3214Z" fill="white"/>
</svg>
                </div>
                <h3 className={styles.circleTitle}>Technology</h3>
                <p className={styles.circleSubtitle}>
                  Build, Automate &amp; Scale
                </p>
                <ul className={styles.circleList}>
                  <li>Website Development</li>
                  <li>App Development</li>
                  <li>Business Automation</li>
                  <li>Software Solutions</li>
                </ul>
              </div>
            </div>

            {/* Creative circle */}
            <div className={`${styles.circle} ${styles.circleCreative}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconCreative}`}>
                  {/* <Palette className={styles.icon} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
<rect width="101" height="101" rx="50.5" fill="#DC0303"/>
<path d="M51.3327 86C50.3882 86 49.5971 85.68 48.9593 85.04C48.3216 84.4 48.0016 83.6089 47.9993 82.6667C47.9993 82.2778 48.0827 81.8745 48.2493 81.4567C48.416 81.0389 48.666 80.6644 48.9993 80.3333L64.416 64.9167L61.9993 62.5L46.666 77.9167C46.3327 78.25 45.9716 78.5 45.5827 78.6667C45.1938 78.8333 44.7771 78.9167 44.3327 78.9167C43.3882 78.9167 42.5971 78.5978 41.9593 77.96C41.3216 77.3222 41.0016 76.53 40.9993 75.5833C40.9993 75.0278 41.0827 74.5689 41.2493 74.2067C41.416 73.8445 41.6382 73.5256 41.916 73.25L57.3327 57.8333L54.9993 55.5L39.5827 70.8333C39.2493 71.1667 38.8882 71.4167 38.4993 71.5833C38.1105 71.75 37.666 71.8333 37.166 71.8333C36.2771 71.8333 35.4993 71.5 34.8327 70.8333C34.166 70.1667 33.8327 69.3889 33.8327 68.5C33.8327 68.0556 33.916 67.6389 34.0827 67.25C34.2493 66.8611 34.4993 66.5 34.8327 66.1667L50.2493 50.75L47.8327 48.4167L32.4993 63.8333C32.2216 64.1111 31.8882 64.3333 31.4993 64.5C31.1105 64.6667 30.6382 64.75 30.0827 64.75C29.1382 64.75 28.346 64.43 27.706 63.79C27.066 63.15 26.7471 62.3589 26.7493 61.4167C26.7493 60.9722 26.8327 60.5556 26.9993 60.1667C27.166 59.7778 27.416 59.4167 27.7493 59.0833L46.3327 40.5L58.8327 53.0833C59.4438 53.6945 60.166 54.1811 60.9993 54.5433C61.8327 54.9056 62.666 55.0856 63.4993 55.0833C65.2771 55.0833 66.8327 54.4589 68.166 53.21C69.4993 51.9611 70.166 50.3633 70.166 48.4167C70.166 47.6389 70.0271 46.8333 69.7493 46C69.4716 45.1667 68.9716 44.3889 68.2493 43.6667L53.3327 28.75C54.2771 27.8611 55.3327 27.1811 56.4993 26.71C57.666 26.2389 58.8327 26.0022 59.9993 26C61.4438 26 62.7771 26.2367 63.9993 26.71C65.2216 27.1833 66.3327 27.9189 67.3327 28.9167L81.416 43.0833C82.416 44.0833 83.1527 45.1945 83.626 46.4167C84.0993 47.6389 84.3349 49.0556 84.3327 50.6667C84.3327 51.7778 84.0827 52.9033 83.5827 54.0433C83.0827 55.1833 82.3605 56.2245 81.416 57.1667L53.666 85C53.2216 85.4445 52.8327 85.7222 52.4993 85.8333C52.166 85.9445 51.7771 86 51.3327 86ZM22.7493 59.3333L20.5827 57.1667C19.6382 56.2778 18.916 55.2222 18.416 54C17.916 52.7778 17.666 51.5 17.666 50.1667C17.666 48.7222 17.9438 47.3889 18.4993 46.1667C19.0549 44.9445 19.7493 43.9167 20.5827 43.0833L34.666 28.9167C35.5549 28.0278 36.6105 27.3189 37.8327 26.79C39.0549 26.2611 40.2493 25.9978 41.416 26C42.916 26 44.2493 26.2089 45.416 26.6267C46.5827 27.0445 47.7216 27.8078 48.8327 28.9167L65.916 46C66.2493 46.3333 66.4994 46.6945 66.666 47.0833C66.8327 47.4722 66.916 47.8889 66.916 48.3333C66.916 49.2222 66.5827 50 65.916 50.6667C65.2493 51.3333 64.4716 51.6667 63.5827 51.6667C63.0827 51.6667 62.666 51.5978 62.3327 51.46C61.9993 51.3222 61.6382 51.0578 61.2493 50.6667L46.2493 35.8333L22.7493 59.3333Z" fill="white"/>
</svg>
                </div>
                <h3 className={styles.circleTitle}>Creative</h3>
                <p className={styles.circleSubtitle}>
                  Build Trust &amp; Recognition
                </p>
                <ul className={styles.circleList}>
                  <li>Branding</li>
                  <li>Creative Design</li>
                  <li>Content Creation</li>
                  <li>Video Production</li>
                </ul>
              </div>
            </div>

            {/* Marketing circle */}
            <div className={`${styles.circle} ${styles.circleMarketing}`}>
              <div className={styles.circleInner}>
                <div className={`${styles.iconCircle} ${styles.iconMarketing}`}>
                  {/* <Megaphone className={styles.icon} /> */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
<rect width="101" height="101" rx="50.5" fill="#920205"/>
<path d="M64.4561 25.644L64.2636 63.7289L44.8817 55.5379L42.4269 55.5255L41.9262 59.5695L46.7496 59.5939L46.7223 64.9891L41.265 64.9615L39.6107 78.4416L26.422 78.3749L26.6401 35.2131L44.8868 35.3053L64.4561 25.644ZM36.9912 55.498L31.9331 55.4725L31.8445 73.007L34.8389 73.0221L36.9912 55.498ZM76.1011 34.3462L77.9987 36.263C80.5136 38.8035 81.5492 42.5989 81.5318 46.0573C81.5143 49.5129 80.4404 53.3004 77.8999 55.8153L75.9831 57.7129L72.1879 53.8792L74.1048 51.9789C75.3086 50.7899 76.1236 48.5793 76.1365 46.0273C76.1494 43.4781 75.3567 41.262 74.165 40.0582L72.2674 38.1413L76.1011 34.3462ZM70.4593 38.8201L72.3568 40.7369C73.7483 42.145 74.5242 44.0476 74.5142 46.0272C74.5042 48.0068 73.7091 49.9015 72.3035 51.2954L70.3866 53.193L66.5888 49.3593L68.5057 47.459C69.319 46.6538 69.3256 45.3455 68.5204 44.5321L66.6229 42.6152L70.4593 38.8201Z" fill="white"/>
</svg>
                </div>
                <h3 className={styles.circleTitle}>Marketing</h3>
                <p className={styles.circleSubtitle}>
                  Drive Visibility &amp; Leads
                </p>
                <ul className={styles.circleList}>
                  <li>SEO</li>
                  <li>Performance Marketing</li>
                  <li>Social Media Marketing</li>
                  <li>Lead Generation</li>
                </ul>
              </div>
            </div>

            {/* Center badge */}
            <div className={styles.centerCircle}>
              <TrendingUp className={styles.centerIcon} />
              <span>Business Growth</span>
            </div>

            {/* Orbiting pills */}
            <div className={`${styles.pill} ${styles.pillSeo}`}>
              <Search className={styles.pillIcon} />
              <span>AI-Powered SEO</span>
            </div>
            <div className={`${styles.pill} ${styles.pillContent}`}>
              <MessageSquareText className={styles.pillIcon} />
              <span>AI Content Assistance</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAds}`}>
              <RefreshCw className={styles.pillIcon} />
              <span>AI-Enhanced Ad Optimization</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAutomation}`}>
              <Cog className={styles.pillIcon} />
              <span>AI Automation Systems</span>
            </div>
            <div className={`${styles.pill} ${styles.pillAnalytics}`}>
              <BarChart3 className={styles.pillIcon} />
              <span>AI Analytics & Insights</span>
            </div>
            </div>
          </div>
        </Reveal>
        {/* <Reveal delay={0.15}>
          <button className="btn" href="#contact">Build Your Growth System</button>
        </Reveal> */}
      </div>
    </section>
  );
}