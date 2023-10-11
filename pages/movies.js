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
      image: "/movies3.png",
      alt: "Image 6",
      legend:
        "Movie suggestion AI enhances our entertainment experience by saving time and introducing us to films tailored to our preferences, ensuring a more enjoyable viewing journey. ",
    },
    {
      id: 2,
      image: "/movies1.png",
      alt: "Image 1",
      legend:
        "Setting your desired configurations gives you many options to choose from.",
    },
    {
      id: 3,
      image: "/movies2.png",
      alt: "Image 2",
      legend:
        "Each suggestion has a certainity factor to make sure making the right decision ",
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
                  Description: This app is like a movie matchmaker! It asks you
                  some smart questions about what you like, then uses fancy math
                  to figure out the best movies for you. It gives you a list of
                  movies, ranked just for you, using all that brainpower!
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
