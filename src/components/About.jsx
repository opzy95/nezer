import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './About.css';

const aboutSlides = [
  {
    image: '/iimage/goods4.jpeg',
    alt: 'Cookware available from Nezer Rot HomePro',
    category: 'FOR EVERYDAY LIVING',
    caption: 'Useful things belong in every home.',
  },
  {
    image: '/iimage/goods2.jpeg',
    alt: 'Kitchen essentials for everyday cooking',
    category: 'KITCHEN ESSENTIALS',
    caption: 'Make room for easier routines.',
  },
  {
    image: '/iimage/goods3.jpeg',
    alt: 'Home appliances from Nezer Rot HomePro',
    category: 'HOME APPLIANCES',
    caption: 'Practical upgrades for your home.',
  },
];

function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const slide = aboutSlides[activeSlide];

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % aboutSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  const showSlide = (direction) => {
    setActiveSlide((current) => (current + direction + aboutSlides.length) % aboutSlides.length);
  };

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-layout">
        <div className="about-copy">
          <p className="about-kicker"><span /> About Nezer Rot HomePro</p>
          <h2 id="about-title">A more useful home <em>starts here.</em></h2>
          <p className="about-intro">
            Practical finds for the places and routines that make a house feel like home.
          </p>
          <p className="about-description">
            Explore everyday essentials for cooking, keeping things in order, and making home life easier, from kitchenware and appliances to gadgets and food staples.
          </p>
          <div className="about-categories" aria-label="HomePro product categories">
            <span>Kitchen</span>
            <span>Appliances</span>
            <span>Gadgets</span>
            <span>Food &amp; Cereals</span>
          </div>
          <Link className="about-link" to="/shop">
            Explore the collection <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div
          className="about-visual"
          aria-label="HomePro product photos"
          aria-roledescription="carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              loading="lazy"
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
            />
          </AnimatePresence>
          <div className="about-image-caption">
            <span>{slide.category}</span>
            <strong>{slide.caption}</strong>
          </div>
          <span className="about-image-index">0{activeSlide + 1} / 0{aboutSlides.length}</span>
          <div className="about-image-controls" aria-label="Choose a product photo">
            <button type="button" aria-label="Previous product photo" onClick={() => showSlide(-1)}>
              <FiChevronLeft aria-hidden="true" />
            </button>
            {aboutSlides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                className={`about-image-dot${activeSlide === index ? ' active' : ''}`}
                aria-label={`Show photo ${index + 1}: ${item.category.toLowerCase()}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                onClick={() => setActiveSlide(index)}
              />
            ))}
            <button type="button" aria-label="Next product photo" onClick={() => showSlide(1)}>
              <FiChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;