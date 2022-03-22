import Head from "next/head";
import Image from "next/image"
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Tahmid | About</title>
      </Head>
      <div>
        <h1>About</h1>
        <p>
          My name is Tahmid, I have just completed a 16 week full stack software development bootcamp after previously having no coding knowledge,
          and this is my portfolio page. I learned the following languages and frameworks: JavaScript, CSS, React JS, Next JS, SQL amongst others.
        </p>

        <p>
          I have a background in Economics, obtaining a BSc and Masters in
          Economics from the University of Surrey. After university I worked in the Civil Service before the completion of the bootcamp. 
        </p>
        <p>
          I would describe myself as someone who is quite creative, I am
          passionate about videography and photography. My favourite film is The
          Truman Show (odd I know). I also like to stay active, as I
          play multiple sports and practice some martial arts. I enjoy
          travelling and have visited over 20 countries.
        </p>
        <div className={styles.me}>
        <Image src="/Tahmid.jpg" width={512} height={384}/>
      </div>
      </div>
    </>
  );
};

export default About;
