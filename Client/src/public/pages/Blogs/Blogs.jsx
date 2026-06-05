// Blogs.jsx

import PageHeroSection from "../../component/ui/PageHeroSection/PageHeroSection";
import styles from "./Blogs.module.css";

import {
  BookOpen,
  Globe,
  BarChart3,
  Video,
} from "lucide-react";

const blogCards = [
  {
    icon: BookOpen,
    imageClass: "imageOne",
    tag: "Stream Selection",
    title:
      "How to Choose the Right Academic Stream After Grade 10",
    link: "Read more →",
    author: "By Dr. Priya Sharma",
    date: "12 May 2026",
  },

  {
    icon: Globe,
    imageClass: "imageTwo",
    tag: "Studying Abroad",
    title:
      "The Reality of Studying Abroad: What Brochures Won't Tell You",
    link: "Read more →",
    author: "By Arjun Mehta",
    date: "5 May 2026",
  },

  {
    icon: BarChart3,
    imageClass: "imageThree",
    tag: "Psychometric Tools",
    title:
      "Understanding Aptitude Tests: What They Measure and What They Don't",
    link: "Read more →",
    author: "By Neha Kapoor",
    date: "28 Apr 2026",
  },

  {
    icon: Video,
    imageClass: "imageFour",
    tag: "Vlogs",
    title:
      "A Week in the Life of an Indian Student at a UK University",
    link: "Watch now →",
    author: "Riya Desai",
    date: "20 Apr 2026",
  },
];

export default function Blogs() {
  return (
    <div className={styles.blogsPage}>

      {/* HERO SECTION */}
      <section className={styles.blogsHero}>

        <PageHeroSection
          eyeBrow={"Blogs & Vlogs"}
          pageHeroTitle={"Notes from a research-driven practice."}
          pageHeroIntro={
            "We're preparing our first set of essays and short videos on stream selection, psychometric tools and the realities of studying abroad. They'll appear here as they're published."
          }
        />

      </section>

      {/* BLOG CARDS */}
      <section className={styles.blogsCardsSection}>

        <div className="blogs-container container section">

          <div className={styles.blogsGrid}>

            {blogCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  className={styles.blogCard}
                  key={card.title}
                >

                  <div
                    className={`${styles.blogCardImage} ${
                      styles[card.imageClass]
                    }`}
                  >
                    <Icon size={48} />
                  </div>

                  <div className={styles.blogCardBody}>

                    <p className={styles.blogCardTag}>
                      {card.tag}
                    </p>

                    <h2 className={styles.blogCardTitle}>
                      {card.title}
                    </h2>

                    <a
                      href="/"
                      className={styles.blogCardLink}
                    >
                      {card.link}
                    </a>

                    <div className={styles.blogCardMeta}>
                      <span>{card.author}</span>
                      <span>{card.date}</span>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}