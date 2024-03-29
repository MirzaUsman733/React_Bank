import React, { useState } from 'react';

const PersonalizedServiceSection = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonial-container mb-5">
      <div className="testimonial-card">
        <div className="testimonial-content">
        <img src={testimonials[activeIndex].image} alt="Testimonial Avatar" className="testimonial-image" />
          <p className="testimonial-text">{testimonials[activeIndex].text}</p>
          <p className="testimonial-author">- {testimonials[activeIndex].author}</p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="prev-btn" onClick={handlePrev}>
          &#10094;
        </button>
        <button className="next-btn" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PersonalizedServiceSection;
