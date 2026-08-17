import Image from "next/image";
import { FaRegCalendar, FaArrowRightLong } from "react-icons/fa6";
import { blog } from "@/data/site";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import Reveal from "./ui/Reveal";
import styles from "./Blog.module.css";

function Meta({ date }) {
  return (
    <div className={styles.meta}>
      <span className={styles.date}>
        <FaRegCalendar />
        Date: {date}
      </span>
      <span className={styles.more}>
        Read more <FaArrowRightLong />
      </span>
    </div>
  );
}

export default function Blog() {
  return (
    <section className={styles.section} aria-labelledby="blog">
      <div className="container">
        <Reveal className={styles.head}>
          <SectionLabel>Blogs &amp; News</SectionLabel>
          <SectionTitle id="blog" ruled onDark>
            The Growth Journal
          </SectionTitle>
        </Reveal>

        <div className={styles.layout}>
          <Reveal>
            <a href="#" className={styles.featured}>
              <div className={styles.featuredMedia}>
                <Image
                  src={blog.featured.image}
                  alt=""
                  width={624}
                  height={515}
                  sizes="(max-width: 991px) 100vw, 40vw"
                />
              </div>
              <div className={styles.featuredBody}>
                <h3 className={styles.featuredTitle}>{blog.featured.title}</h3>
                <p className={styles.excerpt}>{blog.featured.body}</p>
                <Meta date={blog.featured.date} />
              </div>
            </a>
          </Reveal>

          <ul className={styles.list}>
            {blog.posts.map((post, i) => (
              <Reveal key={`${post.title}-${i}`} as="li" delay={i * 0.08}>
                <a href="#" className={styles.post}>
                  <div className={styles.postMedia}>
                    <Image
                      src={post.image}
                      alt=""
                      width={380}
                      height={276}
                      sizes="(max-width: 767px) 100vw, (max-width: 1199px) 220px, 380px"
                    />
                  </div>
                  <div className={styles.postBody}>
                    <h3 className={styles.postTitle}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.body}</p>
                    <Meta date={post.date} />
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}