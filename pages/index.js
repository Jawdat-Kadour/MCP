// import Head from "next/head";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@components/Header";
// import Footer from "@components/Footer";
// import styles from "./styles.module.css";

// const images = [
//   "/Jood.jpg", // Update the path to your personal photo
//   // Add other image file names here
// ];

// export default function Home() {
//   const name = "JAWDAT KADOUR";
//   const age = 22;
//   const education =
//     "5th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence";
//   const experience =
//     "I’m a Python developer and AI enthusiast. And i have over a year of experience in Flutter/Dart development";
//   const skills =
//     "Experienced in Third party libraries and Restful API's, GetX, Push Notification, Google Maps, State Management, Flutter flavor, And app architecture";
//   const designSkills = "Good designer";
//   const previousExperience =
//     "Previous experience in Mobile-App/Web development";
//   const agileDevelopment = "Understanding of the agile development life cycle";
//   const communicationSkills = "Strong communication and consultative skills";
//   const initiative = "Self-initiated and proactive";
//   const liveAt = "Damascus";
//   const references = "Available upon request";

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const email = "jkad7619@gmail.com";
//   const whatsapp = "0991345578";

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Professional Portfolio - {name}</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title={`Welcome to My Professional Portfolio: `} />
//         <div className={styles.cv}>
//           <div className={styles.details}>
//             <div className={styles.leftSection}>
//               <div className={styles.profile}>
//                 <img
//                   className={styles.photo}
//                   src={images[currentImageIndex]}
//                   alt="Personal Photo"
//                 />
//                 <h1 className={styles.name}>{name}</h1>
//                 <h2 className={styles.sectionTitle}>EDUCATION</h2>
//                 <p>Bachelor of Information Technology Engineering.</p>
//                 <p>University of Damascus | 2019-present</p>
//               </div>
//               <div className={styles.additionalInfo}>
//                 <h2 className={styles.sectionTitle}>Additional Information</h2>
//                 <p>Live at {liveAt}</p>
//                 <p>References: {references}</p>
//               </div>
//               <div className={styles.contact}>
//                 <h2 className={styles.sectionTitle}>Contact Me</h2>
//                 <p>Email: {email}</p>
//                 <p>WhatsApp: {whatsapp}</p>
//               </div>
//             </div>
//             <div className={styles.rightSection}>
//               <h2 className={styles.sectionTitle}>Personal Information</h2>
//               <p>Age: {age}</p>
//               <p>Education: {education}</p>
//               <h2 className={styles.sectionTitle}>Professional Summary</h2>
//               <p>{experience}</p>
//               <p>{skills}</p>
//               <div className={styles.progressContainer}>
//                 <p>Design Skills:</p>
//                 <progress
//                   className={styles.progress}
//                   value="90"
//                   max="100"
//                 ></progress>
//               </div>
//               <div className={styles.progressContainer}>
//                 <p>English Speaking:</p>
//                 <progress
//                   className={styles.progress}
//                   value="99"
//                   max="100"
//                 ></progress>
//               </div>
//               <p>{previousExperience}</p>
//               <p>{agileDevelopment}</p>
//               <p>{initiative}</p>
//               <h2 className={styles.sectionTitle}>Programming Languages</h2>
//               <ul className={styles.projectsList}>
//                 <li>Python</li>
//                 <li>Java</li>
//                 <li>Dart</li>
//                 <li>HTML/Css/JS</li>
//                 <li>C++</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <Link href="/myWork">
//           <a className={styles.button}>Projects i worked on</a>
//         </Link>
//       </main>

//       <Footer />
//     </div>
//   );
// }
import Head from "next/head";
import { useState } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "./styles.module.css";

const images = [
  "/Jood.jpg", // Update the path to your personal photo
  // Add other image file names here
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const renderContent = () => {
    if (activeSection === "me") {
      return (
        <div>
          <h2 className={styles.sectionTitle}>Personal Information</h2>
          <p>Age: 22</p>
          <p>Education: {education}</p>
        </div>
      );
    } else if (activeSection === "experiences") {
      return (
        <div>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p>{experience}</p>
          <p>{skills}</p>
          <div className={styles.progressContainer}>
            <p>Design Skills:</p>
            <progress
              className={styles.progress}
              value="90"
              max="100"
            ></progress>
          </div>
          <div className={styles.progressContainer}>
            <p>English Speaking:</p>
            <progress
              className={styles.progress}
              value="99"
              max="100"
            ></progress>
          </div>
          <p>{previousExperience}</p>
          <p>{agileDevelopment}</p>
          <p>{initiative}</p>
          <h2 className={styles.sectionTitle}>Programming Languages</h2>
          <ul className={styles.projectsList}>
            <li>Python</li>
            <li>Java</li>
            <li>Dart</li>
            <li>HTML/Css/JS</li>
            <li>C++</li>
          </ul>
        </div>
      );
    } else if (activeSection === "contact") {
      return (
        <div>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
          <p>Email: jkad7619@gmail.com</p>
          <p>WhatsApp: 0991345578</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio - JAWDAT KADOUR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title={`Welcome to My Professional Portfolio: JAWDAT KADOUR`} />
        <div className={styles.cv}>
          <div className={styles.details}>
            <div className={styles.leftSection}>
              <div className={styles.profile}>
                <img
                  className={styles.photo}
                  src={images[0]}
                  alt="Personal Photo"
                />
                <h1 className={styles.name}>JAWDAT KADOUR</h1>
                <button
                  className={styles.button}
                  onClick={() => handleButtonClick("me")}
                >
                  Me
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleButtonClick("experiences")}
                >
                  My Experiences
                </button>
                <button
                  className={styles.button}
                  onClick={() => handleButtonClick("contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className={styles.rightSection}>{renderContent()}</div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
