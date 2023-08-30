import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './styles.module.css';

const images = [
  '/Jood.jpg', // Update the path to your personal photo
   // Add other image file names here
];

export default function Home() {
  const name = 'JAWDAT KADOUR';
  const age = 22;
  const education =
    '4th year student at ITE (Information Technology Engineering) Faculity, specialized in Artificial Intelligence';
  const experience = 'Over a year of experience in Flutter/Dart development';
  const skills =
    "Experienced in Third party libraries and Restful API's, state management, Push Notification, GetX, Google maps, Flutter flavor, and app architecture";
  const designSkills = 'Good designer';
  const previousExperience = 'Previous experience in Mobile app development';
  const agileDevelopment = 'Understanding of the agile development life cycle';
  const communicationSkills = 'Strong communication and consultative skills';
  const initiative = 'Self-initiated and proactive';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Y-TEjsdaflj;faf- CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome to ${name}'s CV!`} />
        <div className={styles.cv}>
          <h1 className={styles.name}>{name}</h1>
          <img className={styles.photo} src={images[currentImageIndex]} alt="Personal Photo" />
          <div className={styles.details}>
            <div>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <p>Age: {age}</p>
              <p>Education: {education}</p>
              <div className={styles.progressContainer}>
                <p>English Speaking:</p>
                <progress className={styles.progress} value="80" max="100"></progress>
              </div>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <p>{experience}</p>
              <p>{skills}</p>
              <div className={styles.progressContainer}>
                <p>Design Skills:</p>
                <progress className={styles.progress} value="90" max="100"></progress>
              </div>
              <div className={styles.progressContainer}>
                <p>Communication Skills:</p>
                <progress className={styles.progress} value="95" max="100"></progress>
              </div>
              <p>{previousExperience}</p>
              <p>{agileDevelopment}</p>
              <p>{initiative}</p>
            </div>
          </div>
        </div>
        <Link href="/myWork">
  <a className={styles.button}>Some Of My Works</a>
</Link>

      </main>

      <Footer />
    </div>
  );
}
