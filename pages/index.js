// import Head from "next/head";
// import { useState } from "react";
// import Link from "next/link";
// import Header from "@components/Header";
// import Footer from "@components/Footer";
// import styles from "./styles.module.css";

// const images = ["/Jood.jpg"]; // Update the path to your personal photo

// const buttonDetails = {
//   me: {
//     title: "Me",
//     content: [
//       { label: "Age", value: 22 },
//       {
//         label: "Education",
//         value:
//           "5th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence",
//       },
//       { label: "Location", value: "Damascus" },
//     ],
//   },
//   experiences: {
//     title: "My Experiences",
//     content: [
//       {
//         label: "Professional Summary",
//         value:
//           "I’m a Python developer and AI enthusiast. And I have over a year of experience in Flutter/Dart development",
//       },
//       {
//         label: "Skills",
//         value:
//           "Experienced in Third-party libraries and Restful API's, GetX, Push Notification, Google Maps, State Management, Flutter flavor, And app architecture",
//       },
//       {
//         label: "Previous Experience",
//         value: "Previous experience in Mobile-App/Web development",
//       },
//       {
//         label: "Agile Development",
//         value: "Understanding of the agile development life cycle",
//       },
//       { label: "Initiative", value: "Self-initiated and proactive" },
//       { label: "Design Skills", value: "Good designer" },
//       { label: "English Speaking", value: "Fluent" },
//       {
//         label: "Communication Skills",
//         value: "Strong communication and consultative skills",
//       },
//       {
//         label: "Programming Languages",
//         value: ["Python", "Java", "Dart", "HTML/CSS/JS", "C++"],
//       },
//     ],
//   },
//   projects: {
//     title: "Projects",
//     projectsList: [
//       {
//         title: "Yugo",
//         description:
//           "Mobile application designed to connect passengers with nearby taxi drivers.",
//         role: "Developing GUIs included with Google Maps, Registration GUIs",
//       },
//       {
//         title: "Neura",
//         description:
//           "Chatbot application that provides guidance to users for maintaining their health and well-being.",
//         role: "Working on the modules and All the Front-End developing",
//       },
//     ],
//   },
//   contact: {
//     title: "Contact Me",
//     content: [
//       { label: "Email", value: "jkad7619@gmail.com" },
//       { label: "WhatsApp", value: "0991345578" },
//       { label: "References", value: "Available upon request" },
//     ],
//   },
// };

// export default function Home() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [activeSection, setActiveSection] = useState(null);
//   const [currentProject, setCurrentProject] = useState(null);

//   const handleButtonClick = (section) => {
//     setActiveSection(activeSection === section ? null : section);
//     setCurrentProject(null); // Reset currentProject when switching sections
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Professional Portfolio - JAWDAT KADOUR</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main>
//         <Header title="Welcome to My Professional Portfolio: " />
//         <div className={styles.cv}>
//           <div className={styles.profile}>
//             <img
//               className={styles.photo}
//               src={images[currentImageIndex]}
//               alt="Personal Photo"
//             />
//             <h1 className={styles.name}>JAWDAT KADOUR</h1>
//             <div className={styles.buttonGroup}>
//               {Object.keys(buttonDetails).map((section) => (
//                 <button
//                   key={section}
//                   className={`${styles.button} ${
//                     activeSection === section ? styles.active : ""
//                   }`}
//                   onClick={() => handleButtonClick(section)}
//                 >
//                   {buttonDetails[section].title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className={styles.details}>
//             {activeSection && activeSection !== "projects" && (
//               <div>
//                 <h2 className={styles.sectionTitle}>
//                   {buttonDetails[activeSection].title}
//                 </h2>
//                 {buttonDetails[activeSection].content.map((item) => (
//                   <p key={item.label}>
//                     {item.label}:{" "}
//                     {Array.isArray(item.value)
//                       ? item.value.join(", ")
//                       : item.value}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {activeSection === "projects" && (
//               <div>
//                 <h2 className={styles.sectionTitle}>Projects:</h2>
//                 <ul className={styles.projectsList}>
//                   {activeSection === "projects" && (
//                     <div>
//                       {/* <h2 className={styles.sectionTitle}>Projects:</h2> */}
//                       <ul className={styles.projectsList}>
//                         {buttonDetails[activeSection].projectsList.map(
//                           (project, index) => (
//                             <Link
//                               key={index}
//                               href={
//                                 project.title.toLowerCase() === "yugo"
//                                   ? "/yugo"
//                                   : "/neura"
//                               }
//                             >
//                               <a>
//                                 <div>
//                                   <button
//                                     className={`${styles.button} ${
//                                       currentProject === index
//                                         ? styles.active
//                                         : ""
//                                     }`}
//                                     onClick={() => setCurrentProject(index)}
//                                   >
//                                     {project.title}
//                                   </button>
//                                   {currentProject === index && <div></div>}
//                                 </div>
//                               </a>
//                             </Link>
//                           )
//                         )}
//                       </ul>
//                     </div>
//                   )}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }

import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "./styles.module.css";

const images = ["/Jood.jpg"]; // Update the path to your personal photo

const buttonDetails = {
  me: {
    title: "Me",
    content: [
      { label: "Age", value: 22 },
      {
        label: "Education",
        value:
          "5th year student at ITE (Information Technology Engineering), specialized in Artificial Intelligence",
      },
      { label: "Location", value: "Damascus" },
    ],
  },
  experiences: {
    title: "My Experiences",
    content: [
      {
        label: "Professional Summary",
        value:
          "I’m a Python developer and AI enthusiast. And I have over a year of experience in Flutter/Dart development",
      },
      {
        label: "Skills",
        value:
          "Experienced in Third-party libraries and Restful API's, GetX, Push Notification, Google Maps, State Management, Flutter flavor, And app architecture",
      },
      {
        label: "Previous Experience",
        value: "Previous experience in Mobile-App/Web development",
      },
      {
        label: "Agile Development",
        value: "Understanding of the agile development life cycle",
      },
      { label: "Initiative", value: "Self-initiated and proactive" },
      { label: "Design Skills", value: "Good designer" },
      { label: "English Speaking", value: "Fluent" },
      {
        label: "Communication Skills",
        value: "Strong communication and consultative skills",
      },
      {
        label: "Programming Languages",
        value: ["Python", "Java", "Dart", "HTML/CSS/JS", "C++"],
      },
    ],
  },
  projects: {
    title: "Projects",
    projectsList: [
      {
        title: "Yugo",
        description:
          "Mobile application designed to connect passengers with nearby taxi drivers.",
        role: "Developing GUIs included with Google Maps, Registration GUIs",
      },
      {
        title: "Neura",
        description:
          "Chatbot application that provides guidance to users for maintaining their health and well-being.",
        role: "Working on the modules and All the Front-End developing",
      },
      {
        title: "CelestialBodiesSimulator",
        description: "Simulator for celestial bodies exploration.",
        role: "Developing the simulation engine and UI",
      },
      {
        title: "Filmatica",
        description: "Application for managing and discovering movies.",
        role: "Full-stack development",
      },
      {
        title: "AngryBirds3D",
        description: "3D version of the popular Angry Birds game.",
        role: "Game development and design",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    content: [
      { label: "Email", value: "jkad7619@gmail.com" },
      { label: "WhatsApp", value: "0991345578" },
      { label: "References", value: "Available upon request" },
    ],
  },
};

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);

  const handleButtonClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setCurrentProject(null); // Reset currentProject when switching sections
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio - JAWDAT KADOUR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to My Professional Portfolio: " />
        <div className={styles.cv}>
          <div className={styles.profile}>
            <img
              className={styles.photo}
              src={images[currentImageIndex]}
              alt="Personal Photo"
            />
            <h1 className={styles.name}>JAWDAT KADOUR</h1>
            <div className={styles.buttonGroup}>
              {Object.keys(buttonDetails).map((section) => (
                <button
                  key={section}
                  className={`${styles.button} ${
                    activeSection === section ? styles.active : ""
                  }`}
                  onClick={() => handleButtonClick(section)}
                >
                  {buttonDetails[section].title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.details}>
            {activeSection && activeSection !== "projects" && (
              <div>
                <h2 className={styles.sectionTitle}>
                  {buttonDetails[activeSection].title}
                </h2>
                {buttonDetails[activeSection].content.map((item) => (
                  <p key={item.label}>
                    {item.label}:{" "}
                    {Array.isArray(item.value)
                      ? item.value.join(", ")
                      : item.value}
                  </p>
                ))}
              </div>
            )}

            {activeSection === "projects" && (
              <div>
                <h2 className={styles.sectionTitle}>Projects:</h2>
                <ul className={styles.projectsList}>
                  {activeSection === "projects" && (
                    <div>
                      <ul className={styles.projectsList}>
                        {buttonDetails[activeSection].projectsList.map(
                          (project, index) => (
                            <Link
                              key={index}
                              href={
                                project.title.toLowerCase() === "yugo"
                                  ? "/yugo"
                                  : project.title.toLowerCase() === "neura"
                                  ? "/neura"
                                  : project.title.toLowerCase() ===
                                    "celestialbodiessimulator"
                                  ? "/galaxy"
                                  : project.title.toLowerCase() === "filmatica"
                                  ? "/movies"
                                  : project.title.toLowerCase() ===
                                    "angrybirds3d"
                                  ? "/angryBirds"
                                  : "#"
                              }
                            >
                              <a>
                                <div>
                                  <button
                                    className={`${styles.button} ${
                                      currentProject === index
                                        ? styles.active
                                        : ""
                                    }`}
                                    onClick={() => setCurrentProject(index)}
                                  >
                                    {project.title}
                                  </button>
                                  {currentProject === index && <div></div>}
                                </div>
                              </a>
                            </Link>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
