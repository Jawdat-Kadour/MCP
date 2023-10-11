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
      image: "/R.jpg",
      alt: "Image 6",
      legend:
        "This project seeks to shed light on the simulation algorithms in the game Angry Birds and study Its importance in the video game industry, providing a strong foundation for future video game development and improvement Its performance and quality.",
    },
    {
      id: 2,
      image: "/angry4.png",
      alt: "Image 1",
      legend:
        " the player gains the freedom to navigate a complete 360-degree environment, adding an immersive dimension to gameplay. The ability to aim and shoot at targets from any angle elevates the gaming experience, requiring strategic precision and enhancing the interactive engagement within the virtual world.",
    },
    {
      id: 3,
      image: "/angry.png",
      alt: "Image 2",
      legend:
        "Algorithms that have been used for collision detection:  (Bounding Volume Hierarchy) is used to organize and speed up the process of detecting collisions between objects.",
    },
    {
      id: 4,
      image: "/angry2.png",
      alt: "Image 3",
      legend:
        "As an algorithm works BVH is similar to a binary search tree, where the virtual world is partitioned into pools of Bounding boxes.",
    },
    {
      id: 5,
      image: "/R.png",
      alt: "Image 4",
      legend:
        "Axis-Aligned Bounding Box collision detection (AABB) \n The collision detection algorithm checks for interferenc Finite rectangles in axial axes It is a simple algorithm to detect collisions between two bodies",
    },
    {
      id: 6,
      image: "/angry44.png",
      alt: "Image 5",
      legend:
        "Simulation of projectile motion in games involves accurately predicting the trajectory of objects in motion, considering initial velocity, angle of launch, and gravitational effects.",
    },
    {
      id: 7,
      image: "/angry9.png",
      alt: "Image 5",
      legend:
        "the game contains multiple birds including their physical charactaristics like (speed - weight - exploding power).",
    },
    {
      id: 8,
      image: "/angry10.png",
      alt: "Image 7",
      legend: ":) :) :)",
    },
    {
      id: 9,
      image: "/angry11.png",
      alt: "Image 8",
      legend: "boom.",
    },
    {
      id: 10,
      image: "/angry12.png",
      alt: "Image 9",
      legend:
        "The collision algorithms can handle about 13 Millions triangles in the scene and about 10 Millions vertices",
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
