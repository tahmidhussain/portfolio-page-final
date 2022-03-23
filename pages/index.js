import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tahmid | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Here are some of the videos I shot and edited:
        </p>
        <div className={styles.videos}>
        <iframe
          src="https://player.vimeo.com/video/663929427?h=34e3f60109"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          height={360}
          width={360}
        />
        <iframe className={styles.v1}
          src="https://player.vimeo.com/video/663936204?h=fda23bfc0c"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          height={360}
          width={360}
        />
        <iframe
          src="https://player.vimeo.com/video/691142790?h=6da39e9984"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
          height={360}
          width={360}
        />
        </div>
        <p className={styles.text}>
          Below are some of the projects I've worked on:
        </p>
        <Link href="projects">
          <a className={styles.btn}>See my projects</a>
        </Link>
      </div>
    </>
  );
}
