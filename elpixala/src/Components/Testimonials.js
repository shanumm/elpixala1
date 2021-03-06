import React from "react";

export default function Testimonials({ text, image, name, company,altTagTestimonial }) {
  return (
    <div className="testimonial_container">
      <div className="testimonial_white_box">
        <div className="testimonial_text">{text}</div>
      </div>
      <div className="testimonial_belong">
        <div className="testimonial_img">
          <img src={image} alt={altTagTestimonial} />
        </div>
        <div className="testimonial_position">
          <div className="testimonial_name"></div>
          <div className="testimonial_company">{company}</div>
        </div>
      </div>
    </div>
  );
}
