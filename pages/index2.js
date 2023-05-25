import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const name = 'Jawdat Kadour';
  const age = 22;
  const education = '4th year student at ITE';
  const experience = 'Over a year of experience in Flutter/Dart development';
  const skills = 'Experienced in Third party libraries and API\'s, state management, Flutter flavor, and app architecture';
  const designSkills = 'Good designer';
  const previousExperience = 'Previous experience in Mobile app development';
  const agileDevelopment = 'Understanding of the agile development life cycle';
  const communicationSkills = 'Strong communication and consultative skills';
  const initiative = 'Self-initiated and proactive';

  return (
    <div className="container">
      <Head>
        <title>Y-TECH - CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome to ${name}'s CV!`} />
        <p className="description">
          Name: {name} <br />
          Age: {age} <br />
          Education: {education} <br />
          Experience: {experience} <br />
          Skills: {skills} <br />
          Design Skills: {designSkills} <br />
          Previous Experience: {previousExperience} <br />
          Agile Development: {agileDevelopment} <br />
          Communication Skills: {communicationSkills} <br />
          Initiative: {initiative} <br />
        </p>
      </main>

      <Footer />
    </div>
  )
}
