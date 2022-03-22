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
      <p className={styles.text}>Here are some of the videos I've worked on:</p>
      <div>
      
      </div>
      <p className={styles.text}>Below are some of the projects I've worked on:</p>
      <Link href="projects">
      <a className={styles.btn}>See my projects</a>
      </Link>
  
    </div>
    </>
  );
}