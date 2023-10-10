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
        "This project seeks to shed light on the simulation algorithms in the game Angry Birds and study Its importance in the video game industry, providing a strong foundation for future video game development and improvement Its performance and quality.",
    },
    {
      id: 6,
      image: "/1.png",
      alt: "Image 1",
      legend:
        "Algorithms that have been used for collision detection:  (Bounding Volume Hierarchy)",
    },
    {
      id: 2,
      image: "/2.png",
      alt: "Image 2",
      legend:
        "BVH is used to organize and speed up the process of detecting collisions between objects, as an algorithm works BVH is similar to a binary search tree, where the virtual world is partitioned into pools of Bounding boxes.",
    },
    {
      id: 3,
      image: "/3.png",
      alt: "Image 3",
      legend:
        "Axis-Aligned Bounding Box collision detection (AABB) \n The collision detection algorithm checks for interferenc Finite rectangles in axial axes It is a simple algorithm to detect collisions between two bodies",
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
        <title>3D-Angry Birds</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          3 Dimensional simulation of Angry Birds game
        </h1>

        <div className={styles.projectsContainer}>
          <ol className={styles.projectsList}>
            <li className={styles.projectItem}>
              <ul className={styles.projectDetails}>
                <li>
                  Description: An engaging 3D reimagining of the popular Angry
                  Birds game, meticulously developed with the Unity engine,
                  showcasing a ground-up approach that avoids relying on Unity's
                  pre-built physics features. This simulation offers an
                  extensive impact simulation, accurate impact recognition,
                  detailed structural breakage, interactive explosions, dynamic
                  object deformation, intuitive projectile manipulation, and
                  thoughtful bird launching strategies.
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
