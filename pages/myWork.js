import Head from 'next/head';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './works.module.css';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/6.png', alt: 'Image 6', legend: 'I have worked on a project called Neura' },
    { id: 6, image: '/1.png', alt: 'Image 1', legend: 'which is a chatbot application' },
    { id: 2, image: '/2.png', alt: 'Image 2', legend: 'provides guidance to users for maintaining their health and well-being' },
    { id: 3, image: '/3.png', alt: 'Image 3', legend: 'As part of my work on Neura, I have developed the GUIs (Graphical User Interfaces) from scratch' },
    { id: 4, image: '/4.png', alt: 'Image 4', legend: 'which means that I have designed and implemented the user interface elements such as buttons, text fields, and menus' },
    { id: 5, image: '/5.png', alt: 'Image 5', legend: 'Additionally, I have fully connected the GUIs, which means that I have integrated all the user interface elements with the underlying logic of the application' },
    { id: 7, image: '/7.png', alt: 'Image 7', legend: 'allowing users to interact with the chatbot and receive guidance on their health' },
    { id: 8, image: '/8.png', alt: 'Image 8', legend: 'Hope you like it.' },
    // Add more slide data here
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
        <title>My Works</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>My Works</h1>

        <div className={styles.projectsContainer}>
          <h2 className={styles.sectionTitle}>Projects:</h2>
          <ol className={styles.projectsList}>
            <li className={styles.projectItem}>
              <span className={styles.projectTitle}>Yugo</span> | Flutter Developer | March 2022 - June 2022
              <ul className={styles.projectDetails}>
                <li>Description: Mobile application designed to connect passengers with nearby taxi drivers.</li>
                <li>Role: Developing GUIs included with Google Maps, Registration GUIs</li>
              </ul>
            </li>
            <li className={styles.projectItem}>
              <span className={styles.projectTitle}>Neura</span> | Flutter Developer | March 2023 - Present
              <ul className={styles.projectDetails}>
                <li>Description: Chatbot application that provides guidance to users for maintaining their health and well-being.</li>
                <li>Role: All the Front-End developing.</li>
              </ul>
            </li>
          </ol>
        </div>

        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className={styles.slide}>
                <img className={styles.image} src={slide.image} alt={slide.alt} />
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
