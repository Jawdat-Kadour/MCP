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
      image: "/space2.jpg",
      alt: "Image 6",
      legend:
        "Simulating celestial bodies' movements is vital in physics as it allows us to model and understand the fundamental laws governing the universe, providing valuable insights into gravitational interactions, planetary orbits, and the behavior of matter in space.",
    },
    {
      id: 2,
      image: "/gal2.png",
      alt: "Image 1",
      legend:
        "this project contains many selectial bodies like planets and stars and asteroids ..., in addition of space dust and realistic background to get the real experience.",
    },
    {
      id: 3,
      image: "/gal1.png",
      alt: "Image 2",
      legend:
        "we can add bodies to the scene aiding in predicting astronomical events and deepening our comprehension of cosmic dynamics ",
    },
    {
      id: 4,
      image: "/gal.png",
      alt: "Image 3",
      legend:
        "In celestial systems, F = G(m1*m2)/r^2 explains how a massive body like a star or planet exerts a dominant gravitational force, dictating the orbits and movements of smaller celestial bodies around it. This gravitational pull is the fundamental force driving the intricate dance of planets, moons, and other objects in space.",
    },
    {
      id: 5,
      image: "/gal3.png",
      alt: "Image 4",
      legend:
        "this is the control panel that allows you to add the information (The mass - The position in 3d space - Velocity of the body). Controlling the time allows you watch events in a different pace. ",
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
