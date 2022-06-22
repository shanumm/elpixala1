import React, { useEffect } from "react";
import "../Style/Preloader.css";
export default function Preloader() {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    const preloader_content = document.querySelector(".preloader_content");
    const preloader_el = document.querySelector(".preloader_el");
    const preloader_pixala = document.querySelector(".preloader_pixala div");
    preloader_content.style.opacity = 1;
    preloader_el.style.transform = "translateX(0)";
    preloader_pixala.style.transform = "translateX(0)";
    preloader.addEventListener("animationend", () => {
      preloader.style.display = "none";
    });
  }, []);

  return (
    <div className="preloader">
      <div className="preloader_content">
        <div className="preloader_el">
          <div>el</div>
        </div>
        <div className="preloader_pixala">
          <div>Pixala</div>
        </div>
      </div>
    </div>
  );
}
