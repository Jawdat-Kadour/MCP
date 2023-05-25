import Head from 'next/head';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, image: '/6.png', alt: 'Image 6', legend: 'Image 6' },
    { id: 6, image: '/1.png', alt: 'Image 1', legend: 'Image 1' },
    { id: 2, image: '/2.png', alt: 'Image 2', legend: 'Image 2' },
    { id: 3, image: '/3.png', alt: 'Image 3', legend: 'Image 3' },
    { id: 4, image: '/4.png', alt: 'Image 4', legend: 'Image 4' },
    { id: 5, image: '/5.png', alt: 'Image 5', legend: 'Image 5' },
    { id: 7, image: '/7.png', alt: 'Image 7', legend: 'Image 7' },
    { id: 8, image: '/8.png', alt: 'Image 8', legend: 'Image 8' },
    // Add more slide data here
  ];

  const settings = {
    dots: false,
    arrows: false, // Hide arrows
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true, // Enable vertical scrolling
    verticalSwiping: true, // Enable vertical swiping
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <>
      <Head>
        <title>My Works</title>
      </Head>
      <h1 className="title">My Works</h1>
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <img className="image" src={slide.image} alt={slide.alt} />
              <div className="description">
                <p className="legend">{slide.legend}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }
        
        .carousel-container {
          position: relative;
          margin-top: 40px;
        }
        
        .slide {
          text-align: center;
          background-color: #412626;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-bottom: 10px; // Add margin to separate slides vertically
        }
        
        .image {
          max-width: 50%; // Adjust the width of the images as per your requirement
          height: auto;
          border-radius: 8px;
          margin-right: 10px; // Add spacing between images
        }
        
        .description {
          flex-grow: 1;
        }
        
        .legend {
          font-size: 18px;
          margin-top: 10px;
          color: #555;
        }
      `}</style>
    </>
  );
}
