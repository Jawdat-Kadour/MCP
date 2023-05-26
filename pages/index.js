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
    '4th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence';
  const experience = 'Over a year of experience in Flutter/Dart development';
  const skills =
    "Experienced in Third party libraries and API's, state management, Flutter flavor, and app architecture";
  const designSkills = 'Good designer';
  const previousExperience = 'Previous experience in Mobile app development';
  const agileDevelopment = 'Understanding of the agile development life cycle';
  const communicationSkills = 'Strong communication and consultative skills';
  const initiative = 'Self-initiated and proactive';
  const liveAt = 'Damascus';
  const references = 'Available upon request';

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const email = 'jkad7619@gmail.com';
  const whatsapp = '0991345578';

  return (
    <div className={styles.container}>
      <Head>
        <title>CV - {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <main>
        <Header title={`Welcome to ${name}'s CV`} />
        <div className={styles.cv}>
          <div className={styles.details}>
            <div className={styles.leftSection}>
              <div className={styles.profile}>
                <img className={styles.photo} src={images[currentImageIndex]} alt="Personal Photo" />
                <h1 className={styles.name}>{name}</h1>
                <h2 className={styles.sectionTitle}>EDUCATION</h2>
              <p>Bachelor of IT Engineering.</p>
              <p>University of Damascus | 2019-present</p>
              </div>
              <div className={styles.additionalInfo}>
                <h2 className={styles.sectionTitle}>Additional Information</h2>
                <p>Live at {liveAt}</p>
                <p>References: {references}</p>
              </div>
              <div className={styles.contact}>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <p>Email: {email}</p>
                <p>WhatsApp: {whatsapp}</p>
              </div>
            </div>
            <div className={styles.rightSection}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <p>Age: {age}</p>
              <p>Education: {education}</p>
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
              <h2 className={styles.sectionTitle}>Programming Languages</h2>
              <ul className={styles.projectsList}>
                <li>Java</li>
                <li>Dart</li>
                <li>HTML/Css/JS</li>
                <li>C++</li>
              </ul>
              
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