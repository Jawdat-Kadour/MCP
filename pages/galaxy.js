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
      image: "/6.png",
      alt: "Image 6",
      legend:
        "The project embodies a highly intricate pursuit within the field of astrophysics - a precise physical simulation that accurately replicates the complex motions of celestial objects. This simulation provides an all-encompassing representation of gravitational forces, illustrating the mutual attraction between these celestial entities while considering fundamental aspects such as mass and diverse physical attributes.",
    },
    {
      id: 6,
      image: "/1.png",
      alt: "Image 1",
      legend:
        "chatbot application provides guidance to users for maintaining their health and well-being",
    },
    {
      id: 2,
      image: "/2.png",
      alt: "Image 2",
      legend:
        "As part of my work on Neura, I have developed the Neural networks and the GUIs",
    },
    {
      id: 3,
      image: "/3.png",
      alt: "Image 3",
      legend:
        "I have implemented most of the services of the chatbot in addition of implementing the user interface elements such as buttons, text fields, and menus...",
    },
    {
      id: 4,
      image: "/4.png",
      alt: "Image 4",
      legend:
        "Additionally, I have integrated all the user interface elements with the underlying logic of the application",
    },
    {
      id: 5,
      image: "/5.png",
      alt: "Image 5",
      legend:
        "allowing users to interact with the chatbot and receive guidance on their health",
    },
    {
      id: 7,
      image: "/7.png",
      alt: "Image 7",
      legend: "SERVICES PROVIDED BY NEURA :) ",
    },
    {
      id: 8,
      image: "/8.png",
      alt: "Image 8",
      legend:
        "Medication reminder: Neura can help you stay on track with your medication schedule by sending you timely reminders.",
    },
    {
      id: 9,
      image: "/conv.png",
      alt: "Image 9",
      legend:
        "Neura can handle all possible messages from users due to his immense database of intents and patterns.",
    },
    {
      id: 10,
      image: "/info.png",
      alt: "Image 10",
      legend:
        "Presentation of disease-specific information: Neura offers insights on specific diseases, including symptoms, causes, prevention, and management.",
    },
    {
      id: 11,
      image: "/article.png",
      alt: "Image 11",
      legend:
        "it also provides scientific articles from the FDA and PubMed database.",
    },
    {
      id: 12,
      image: "/treat.png",
      alt: "Image 12",
      legend:
        "Treatments for diseases: Neura provides information on plant-based medicinal treatments and holistic approaches for various diseases.",
    },
    {
      id: 13,
      image: "/warn.png",
      alt: "Image 13",
      legend: "it proviedes also warnings of using these treatmetns",
    },
    {
      id: 14,
      image: "/system.png",
      alt: "Image 14",
      legend:
        "Food systems: Neura offers information on healthy eating, including meal planning, nutrient-rich foods, and recipes..",
    },
    {
      id: 15,
      image: "/period.png",
      alt: "Image 15",
      legend:
        "Period tracker: Neura helps you track and monitor your menstrual cycle.",
    },
    {
      id: 16,
      image: "/med.png",
      alt: "Image 16",
      legend:
        "Presentation of medicine-specific information: Neura can provide specific details about medications, including usage instructions and potential side effects. ",
    },
    {
      id: 17,
      image: "/serv.png",
      alt: "Image 17",
      legend:
        "Weight tracker: Neura helps you track your weight and provides guidance on maintaining a healthy weight.",
    },
    {
      id: 18,
      image: "/serv2.png",
      alt: "Image 18",
      legend:
        "Mood tracker: Neura assists in tracking and managing your mood for emotional well-being.",
    },
    {
      id: 19,
      image: "/serv3.png",
      alt: "Image 19",
      legend:
        " Fitness tips: Neura provides suggestions for physical activities and exercises to support your fitness goals.",
    },
    {
      id: 20,
      image: "/joke.png",
      alt: "Image 20",
      legend:
        "Mental well-being support: Neura provides support and resources for improving mental well-being and managing stress. Personalized health insights: Neura analyzes your health data to provide personalized insights and recommendations.",
    },
    {
      id: 21,
      image: "/water.png",
      alt: "Image 21",
      legend:
        "Analyzing the percentage of water in the body and knowing the appropriate amount that he likes to eat on a daily basis.",
    },
    {
      id: 22,
      image: "/menu.png",
      alt: "Image 22",
      legend:
        "General health guidance: Neura provides personalized health advice and tips for overall well-being. Nutritional advices: Neura offers guidance on nutrition, including healthy eating habits and food choices.",
    },
    {
      id: 23,
      image: "/bye.png",
      alt: "Image 23",
      legend:
        "Providing a diet that suits many desires of the user and providing a diet based on personal specifications such as weight, height and other specifications...",
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

  return (
    <>
      <Head>
        <title>CelestialBodiesSimulator</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>CelestialBodiesSimulator</h1>

        <div className={styles.projectsContainer}>
          <ol className={styles.projectsList}>
            <li className={styles.projectItem}>
              <span className={styles.projectTitle}>
                CelestialBodiesSimulator
              </span>{" "}
              <ul className={styles.projectDetails}>
                <li>
                  Description: The project embodies a highly intricate pursuit
                  within the field of astrophysics - a precise physical
                  simulation that accurately replicates the complex motions of
                  celestial objects. This simulation provides an
                  all-encompassing representation of gravitational forces,
                  illustrating the mutual attraction between these celestial
                  entities while considering fundamental aspects such as mass
                  and diverse physical attributes.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <img
                  className={styles.image}
                  src={slide.image}
                  alt={slide.alt}
                />
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
