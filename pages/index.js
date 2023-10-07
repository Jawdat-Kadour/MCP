import Head from "next/head";
import { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "./styles.module.css";

const images = ["/Jood.jpg"]; // Update the path to your personal photo

export default function Home() {
  const name = "JAWDAT KADOUR";
  const age = 22;
  const education =
    "5th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence";
  const experience =
    "I’m a Python developer and AI enthusiast. And I have over a year of experience in Flutter/Dart development";
  const skills =
    "Experienced in Third-party libraries and Restful API's, GetX, Push Notification, Google Maps, State Management, Flutter flavor, And app architecture";
  const designSkills = "Good designer";
  const previousExperience =
    "Previous experience in Mobile-App/Web development";
  const agileDevelopment = "Understanding of the agile development life cycle";
  const communicationSkills = "Strong communication and consultative skills";
  const initiative = "Self-initiated and proactive";
  const liveAt = "Damascus";
  const references = "Available upon request";

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const email = "jkad7619@gmail.com";
  const whatsapp = "0991345578";

  const handleButtonClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio - {name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome to My Professional Portfolio: `} />
        <div className={styles.cv}>
          <div className={styles.profile}>
            <img
              className={styles.photo}
              src={images[currentImageIndex]}
              alt="Personal Photo"
            />
            <h1 className={styles.name}>{name}</h1>
            <div className={styles.buttonGroup}>
              <button
                className={`${styles.button} ${
                  activeSection === "me" ? styles.active : ""
                }`}
                onClick={() => handleButtonClick("me")}
              >
                Me
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "experiences" ? styles.active : ""
                }`}
                onClick={() => handleButtonClick("experiences")}
              >
                My Experiences
              </button>
              <button
                className={`${styles.button} ${
                  activeSection === "contact" ? styles.active : ""
                }`}
                onClick={() => handleButtonClick("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className={styles.details}>
            {activeSection === "me" && (
              <div>
                <h2 className={styles.sectionTitle}>Personal Information</h2>
                <p>Age: {age}</p>
                <p>Education: {education}</p>
                <p>Location: {liveAt}</p> {/* Include liveAt in Me */}
              </div>
            )}

            {activeSection === "experiences" && (
              <div>
                <h2 className={styles.sectionTitle}>Professional Summary</h2>
                <p>{experience}</p>
                <p>{skills}</p>
                <p>{previousExperience}</p>
                <p>{agileDevelopment}</p>
                <p>{initiative}</p>
                {
                  <div className={styles.progressContainer}>
                    <p>Design Skills: {designSkills}</p>{" "}
                    <progress
                      className={styles.progress}
                      value="70"
                      max="100"
                    ></progress>
                  </div>
                }
                {
                  <div className={styles.progressContainer}>
                    <p>English Speaking:</p>
                    <progress
                      className={styles.progress}
                      value="99"
                      max="100"
                    ></progress>
                  </div>
                }
                <p>Communication Skills: {communicationSkills}</p>{" "}
                <h2 className={styles.sectionTitle}>Programming Languages</h2>
                <ul className={styles.projectsList}>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Dart</li>
                  <li>HTML/Css/JS</li>
                  <li>C++</li>
                </ul>
              </div>
            )}

            {activeSection === "contact" && (
              <div>
                <h2 className={styles.sectionTitle}>Contact Me</h2>
                <p>Email: {email}</p>
                <p>WhatsApp: {whatsapp}</p>
                <p>References: {references}</p>{" "}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
