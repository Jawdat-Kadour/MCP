import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from 'pages/styles.module.css';

export default function Home() {
  const name = 'Jawdat Kadour';
  const age = 22;
  const education = '4th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence';
  const experience = 'Over a year of experience in Flutter/Dart development';
  const skills = 'Experienced in Third party libraries and API\'s, state management, Flutter flavor, and app architecture';
  const designSkills = 'Good designer';
  const previousExperience = 'Previous experience in Mobile app development';
  const agileDevelopment = 'Understanding of the agile development life cycle';
  const communicationSkills = 'Strong communication and consultative skills';
  const initiative = 'Self-initiated and proactive';

  return (
    <div className={styles.container}>
      <Head>
        <title>Y-TECH - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome to ${name}'s CV!`} />
        <div className={styles.cv}>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.details}>
            <div>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              <p>Age: {age}</p>
              <p>Education: {education}</p>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Professional Summary</h2>
              <p>{experience}</p>
              <p>{skills}</p>
              <p>{designSkills}</p>
              <p>{previousExperience}</p>
              <p>{agileDevelopment}</p>
              <p>{communicationSkills}</p>
              <p>{initiative}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
