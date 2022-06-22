import React, { useEffect } from "react";

export default function Page3Content({ source, heading, desc, delay, keyy,altTag }) {
  useEffect(() => {
    const contents = document.querySelectorAll(".contents");
    const contentImg = document.querySelectorAll(".content_image");
    const contentHeading = document.querySelectorAll(".content_heading");
    const contentDesc = document.querySelectorAll(".content_desc");
    const serviceOverlay = document.querySelector(".serviceOverlay");
    const cross = document.querySelector(".cross");
    const serviceOverlayImg = document.querySelector(".serviceOverlayImg");
    const serviceOverlayHeading = document.querySelector(
      ".serviceOverlayHeading"
    );
    const serviceOverlayDesc = document.querySelector(".serviceOverlayDesc");

    const serviceOverlayDetails = document.querySelector(
      ".serviceOverlayDetails"
    );

    let serviceDetails = [
      "Creativity- We’ll bring your brands to life by getting you in touch with the best talents in the industry. From labelling to developing and marketing, our team will drive your creative process. <br/>Affordability- Great design and communication at the most affordable rates is all one would desire in the initial stage of their business and trust us, we are here for you, to offer services of superior quality and underrated prices. <br/> Accessibility- Our contact us page is not a dead wood you guys, we believe in prompt and skilled communication. We don't hide behind our emails. Partnering with our clients and being accessible to all, is of utmost importance to us.",
      "Home to the world's best and worst design professionals(which doesn’t exist because everyone is unique in their own way), pseudo pixalites is a community to showcase and find talent with creative work in the field of digital design and development. Let us come together and expand our horizons of thinking through digital events and healthy competition. Join hands and be a part of our community because knowledge my friend, increases by sharing and not by hoarding. When knowledge increases, wonder deepens and when that happens, creativity reaches its peak(which again, does NOT exist). ;p",
      "With fast-loading pages, maximum customizability, and built-in accessibility, Pixala Store themes and templates will help you create unique shopping experiences and user friendly websites to delight your audience.",
      "Browse through thousands of authentic pictures with varying themes and simple licensing. Be prepared for abundant content that will be updated weekly. Also, find free content of premium quality for your brands at Pixala Photography.",
      "Coming Soon",
      "Coming Soon",
    ];

    for (let i = 0; i < 6; i++) {
      contents[i].addEventListener("click", () => {
        serviceOverlay.style.opacity = 1;
        serviceOverlay.style.pointerEvents = "auto";
        serviceOverlayImg.src = `${contentImg[i].src}`;
        serviceOverlayHeading.innerHTML = contentHeading[i].innerHTML;
        serviceOverlayDesc.innerHTML = contentDesc[i].innerHTML;
        serviceOverlayDetails.innerHTML = serviceDetails[i];
      });
    }

    contents.forEach((content) => {
      content.addEventListener("click", () => {});
    });
    cross.addEventListener("click", () => {
      serviceOverlay.style.opacity = 0;
      serviceOverlay.style.pointerEvents = "none";
    });
  }, []);
  return (
    <div
      data-sal-duration="1200"
      data-sal="fade"
      data-sal-delay={delay}
      data-sel-easing="ease-out-bounce"
      data-sal-repeat="true"
      className="contents"
    >
      <div className="contentImageContainer">
        <img className="content_image" src={source} alt={altTag} />
      </div>
      <div id={keyy} className="content_heading">
        {heading}
      </div>
      <div className="content_desc">{desc}</div>
    </div>
  );
}
