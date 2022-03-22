import Head from "next/head";
import styles from "../styles/projects.module.css";
import Image from "next/image"

const Projects = () => {
  return (
    <>
      <Head>
        <title>Tahmid | Projects</title>
      </Head>
      <div>
        <h1>Projects</h1>
        <h2>Pinit</h2>
        <p>This is a photo storage app tied to a map. You would fill in a form (with various bits of information about that memory) and upload a picture to a specific destination where a pin would appear, you can then click the pin and have it show the image you uploaded amongst other information you uploaded with it. </p>
        <p>Click <a className={styles.a} href="https://pinit-pinit.netlify.app/">here</a> to view Pinit.</p>
        <div className={styles.gif}>
        <Image src="/pinit.gif" width={495} height={270}/>
      </div>
      </div>
    </>
  );
};

export default Projects;
