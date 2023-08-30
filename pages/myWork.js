import Head from 'next/head';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './works.module.css';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/6.png', alt: 'Image 6', legend: 'I have worked on a project called Neura which is a chatbot application provides guidance to users for maintaining their health and well-being' },
    { id: 6, image: '/1.png', alt: 'Image 1', legend: 'SERVICES PROVIDED BY NEURA:' },
    { id: 2, image: '/2.png', alt: 'Image 2', legend: 'Food systems: Neura offers information on healthy eating, including meal planning, nutrient-rich foods, and recipes..' },
    { id: 3, image: '/3.png', alt: 'Image 3', legend: 'Treatments for diseases: Neura provides information on plant-based medicinal treatments and holistic approaches for various diseases.' },
    { id: 4, image: '/4.png', alt: 'Image 4', legend: 'Presentation of medicine-specific information: Neura can provide specific details about medications, including usage instructions and potential side effects. Presentation of disease-specific information: Neura offers insights on specific diseases, including symptoms, causes, prevention, and management.' },
    { id: 5, image: '/5.png', alt: 'Image 5', legend: 'Period tracker: Neura helps you track and monitor your menstrual cycle.' },
    { id: 7, image: '/7.png', alt: 'Image 7', legend: 'Medication reminder: Neura can help you stay on track with your medication schedule by sending you timely reminders.' },
    { id: 8, image: '/8.png', alt: 'Image 8', legend: ' Weight tracker: Neura helps you track your weight and provides guidance on maintaining a healthy weight.' },
    { id: 9, image: '/9.png', alt: 'Image 9', legend: 'Mood tracker: Neura assists in tracking and managing your mood for emotional well-being' },
    { id: 10, image: '/10.png', alt: 'Image 10', legend: 'General health guidance: Neura provides personalized health advice and tips for overall well-being. Nutritional advices: Neura offers guidance on nutrition, including healthy eating habits and food choices.' },
    { id: 11, image: '/11.png', alt: 'Image 11', legend: 'Fitness tips: Neura provides suggestions for physical activities and exercises to support your fitness goals.' },
    { id: 12, image: '/12.png', alt: 'Image 12', legend: 'Mental well-being support: Neura provides support and resources for improving mental well-being and managing stress. Personalized health insights: Neura analyzes your health data to provide personalized insights and recommendations.' },
    { id: 13, image: '/13.png', alt: 'Image 13', legend: 'Providing a diet that suits many desires of the user and providing a diet based on personal specifications such as weight, height and other specifications...' },
    { id: 14, image: '/14.png', alt: 'Image 14', legend: '' },
    { id: 15, image: '/15.png', alt: 'Image 15', legend: '' },
    { id: 16, image: '/16.png', alt: 'Image 16', legend: '' },
    { id: 17, image: '/17.png', alt: 'Image 17', legend: '' },
    { id: 18, image: '/18.png', alt: 'Image 18', legend: '' },
    { id: 19, image: '/19.png', alt: 'Image 19', legend: '' },
    { id: 20, image: '/20.png', alt: 'Image 20', legend: '' },
    { id: 21, image: '/21.png', alt: 'Image 21', legend: '' },
    { id: 22, image: '/22.png', alt: 'Image 22', legend: '' },
    { id: 23, image: '/23.png', alt: 'Image 23', legend: '' },
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
              <span className={styles.projectTitle}>Neura</span> | Flutter Developer | March 2023 - July 2023
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
