// import Head from "next/head";
// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./works.module.css";

// export default function Works() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 1,
//       type: "image",
//       image: "/yugo.jpg",
//       alt: "Image 6",
//       legend: "Online taxi booking streamlines transportation.",
//     },
//     {
//       id: 2,
//       type: "image",

//       image: "/yugo1.jpg",
//       alt: "Image 1",
//       legend: "Ensuring convenience and reducing wait times.",
//     },
//     {
//       id: 3,
//       type: "image",

//       image: "/yugo2.jpg",
//       alt: "Image 2",
//       legend:
//         "Making travel more efficient and accessible. It enhances safety by providing details about the driver and trip, fostering trust and accountability in the service.",
//     },

//     {
//       id: 4,
//       type: "image",

//       image: "/yugo5.jpg",
//       alt: "Image 4",
//       legend:
//         "Users can access our application securely through email or phone number authentication, ensuring a protected and personalized experience.",
//     },
//     {
//       id: 5,
//       type: "image",

//       image: "/yugo8.jpg",
//       alt: "Image 5",
//       legend:
//         "Our service facilitates users (customers and drivers alike) in establishing a personal account, enabling them to seamlessly integrate into the esteemed YUGO community.",
//     },
//     {
//       id: 6,
//       type: "image",

//       image: "/yugo6.jpg",
//       alt: "Image 7",
//       legend: "",
//     },
//     {
//       id: 7,
//       type: "image",
//       image: "/yugo9.jpg",
//       alt: "Image 8",
//       legend:
//         "As a driver of YUGO community you will receive locations of customers requesting you services.",
//     },
//     {
//       id: 8,
//       type: "image",
//       image: "/yugo7.jpg",
//       alt: "Image 9",
//       legend: "",
//     },
//     {
//       id: 9,
//       type: "image",

//       image: "/yugo15.jpg",
//       alt: "Image 10",
//       legend:
//         "selecting start point to get the car you want and a destination to go to is not all your options.",
//     },
//     {
//       id: 10,
//       type: "image",

//       image: "/yugo13.jpg",
//       alt: "Image 11",
//       legend:
//         "The ability to choose the desired vehicle, complete with customizable features, ensuring a tailored and comfortable journey.",
//     },
//     {
//       id: 11,
//       type: "image",

//       image: "/yugo11.jpg",
//       alt: "Image 12",
//       legend: "Submission is your last step to get your car.",
//     },
//     {
//       id: 12,
//       type: "image",

//       image: "/yugo12.jpg",
//       alt: "Image 13",
//       legend:
//         "Customized Services: Profile Management: Users can meticulously curate their profiles, ensuring accuracy and relevance in their interactions within the YUGO community \n Complaint Submission: In the unfortunate event of an unpleasant experience \n  Lost Item Reporting: Our platform allows users to report lost items, providing detailed information to facilitate their recovery, ensuring a hassle-free resolution process. \nCar Sharing Partnerships: To enhance safety and affordability, users can find compatible car-sharing partners, promoting secure travel and cost-sharing opportunities.",
//     },
//     {
//       id: 13,
//       type: "image",
//       image: "/yugo14.jpg",
//       alt: "Image 14",
//       legend:
//         "Favorite Locations: Users can save preferred locations within the application, streamlining service requests and optimizing time management for their utmost convenience.\n Optimized Transportation: We prioritize efficiency by connecting users with the nearest private transportation options, ensuring swift and timely travel, irrespective of other alternatives.\nDisability Services: YUGO provides additional services tailored for individuals with disabilities, ensuring accessibility and comfort in every journey undertaken.\nChild-Friendly Services: Our specialized services cater to families with children, offering safety features and comfort, ensuring a stress-free travel experience for parents and their little ones. ",
//     },
//     {
//       id: 14,
//       type: "video",
//       image: "/yugodash.mp4",
//       alt: "Image 14",
//       legend: "dashboard",
//     },
//   ];

//   const settings = {
//     dots: true,
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     beforeChange: (current, next) => setCurrentSlide(next),
//   };

//   return (
//     <>
//       <Head>
//         <title>YUGO</title>
//       </Head>
//       <div className={styles.container}>
//         <h1 className={styles.title}>YUGO</h1>

//         <div className={styles.projectsContainer}>
//           <ol className={styles.projectsList}>
//             <li className={styles.projectItem}>
//               <span className={styles.projectTitle}>Yugo</span> | Flutter
//               Developer | March 2022 - June 2022
//               <ul className={styles.projectDetails}>
//                 <li>
//                   Description: Mobile application designed to connect passengers
//                   with nearby taxi drivers.
//                 </li>
//                 <li>Role: Developing GUIs included with Maps.</li>
//               </ul>
//             </li>
//           </ol>
//         </div>

//         <div className={styles.carouselContainer}>
//           <Slider {...settings}>
//             {slides.map((slide) => (
//               <div key={slide.id} className={styles.slide}>
//                 {slide.type === "image" ? (
//                   <img
//                     className={styles.image}
//                     src={slide.src}
//                     alt={slide.alt}
//                   />
//                 ) : slide.type === "video" ? (
//                   <video className={styles.video} controls>
//                     <source src={slide.src} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : null}
//                 <div className={styles.description}>
//                   <p className={styles.legend}>{slide.legend}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// }
import Head from "next/head";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./works.module.css";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      type: "image",
      src: "/yugo.jpg",
      alt: "Image 6",
      legend: "Online taxi booking streamlines transportation.",
    },
    {
      id: 2,
      type: "image",
      src: "/yugo1.jpg",
      alt: "Image 1",
      legend: "Ensuring convenience and reducing wait times.",
    },
    {
      id: 3,
      type: "image",
      src: "/yugo2.jpg",
      alt: "Image 2",
      legend:
        "Making travel more efficient and accessible. It enhances safety by providing details about the driver and trip, fostering trust and accountability in the service.",
    },
    {
      id: 4,
      type: "image",
      src: "/yugo5.jpg",
      alt: "Image 4",
      legend:
        "Users can access our application securely through email or phone number authentication, ensuring a protected and personalized experience.",
    },
    {
      id: 5,
      type: "image",
      src: "/yugo8.jpg",
      alt: "Image 5",
      legend:
        "Our service facilitates users (customers and drivers alike) in establishing a personal account, enabling them to seamlessly integrate into the esteemed YUGO community.",
    },
    {
      id: 6,
      type: "image",
      src: "/yugo6.jpg",
      alt: "Image 7",
      legend: "",
    },
    {
      id: 7,
      type: "image",
      src: "/yugo9.jpg",
      alt: "Image 8",
      legend:
        "As a driver of YUGO community you will receive locations of customers requesting your services.",
    },
    {
      id: 8,
      type: "image",
      src: "/yugo7.jpg",
      alt: "Image 9",
      legend: "",
    },
    {
      id: 9,
      type: "image",
      src: "/yugo15.jpg",
      alt: "Image 10",
      legend:
        "Selecting start point to get the car you want and a destination to go to is not all your options.",
    },
    {
      id: 10,
      type: "image",
      src: "/yugo13.jpg",
      alt: "Image 11",
      legend:
        "The ability to choose the desired vehicle, complete with customizable features, ensuring a tailored and comfortable journey.",
    },
    {
      id: 11,
      type: "image",
      src: "/yugo11.jpg",
      alt: "Image 12",
      legend: "Submission is your last step to get your car.",
    },
    {
      id: 12,
      type: "image",
      src: "/yugo12.jpg",
      alt: "Image 13",
      legend:
        "Customized Services: Profile Management: Users can meticulously curate their profiles, ensuring accuracy and relevance in their interactions within the YUGO community \n Complaint Submission: In the unfortunate event of an unpleasant experience \n  Lost Item Reporting: Our platform allows users to report lost items, providing detailed information to facilitate their recovery, ensuring a hassle-free resolution process. \nCar Sharing Partnerships: To enhance safety and affordability, users can find compatible car-sharing partners, promoting secure travel and cost-sharing opportunities.",
    },
    {
      id: 13,
      type: "image",
      src: "/yugo14.jpg",
      alt: "Image 14",
      legend:
        "Favorite Locations: Users can save preferred locations within the application, streamlining service requests and optimizing time management for their utmost convenience.\n Optimized Transportation: We prioritize efficiency by connecting users with the nearest private transportation options, ensuring swift and timely travel, irrespective of other alternatives.\nDisability Services: YUGO provides additional services tailored for individuals with disabilities, ensuring accessibility and comfort in every journey undertaken.\nChild-Friendly Services: Our specialized services cater to families with children, offering safety features and comfort, ensuring a stress-free travel experience for parents and their little ones. ",
    },
    {
      id: 14,
      type: "video",
      src: "/yugodash.mp4",
      alt: "Video",
      legend: "Dashboard Overview",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const lastVideoIndex = slides.findIndex((slide) => slide.type === "video");

  return (
    <>
      <Head>
        <title>YUGO</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>YUGO</h1>

        <div className={styles.projectsContainer}>
          <ol className={styles.projectsList}>
            <li className={styles.projectItem}>
              <span className={styles.projectTitle}>Yugo</span> | Flutter
              Developer | March 2022 - June 2022
              <ul className={styles.projectDetails}>
                <li>
                  Description: Mobile application designed to connect passengers
                  with nearby taxi drivers.
                </li>
                <li>Role: Developing GUIs included with Maps.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={slide.id} className={styles.slide}>
                {slide.type === "image" ? (
                  <img
                    className={styles.image}
                    src={slide.src}
                    alt={slide.alt}
                  />
                ) : index === lastVideoIndex ? (
                  <video className={styles.video} controls>
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
                <div className={styles.description}>
                  <p className={styles.legend}>{slide.legend}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
