import React, { useEffect } from "react";
import Members from "./Members";
import "../Style/Team.css";
import Typed from "typed.js";
import sal from "sal.js";
import Nav from "./Nav";
import "../../node_modules/sal.js/dist/sal.css";
export default function Team() {
  useEffect(() => {
    sal();

    const images = document.querySelectorAll(".member_image img");
    const member_post = document.querySelector(".member_post");
    const member_quote = document.querySelector(".member_quote");

    images.forEach((image) => {
      image.addEventListener("mouseover", () => {
        member_post.classList.add("activePostName");
        member_quote.classList.add("activePostName");
        if (image.alt === "pushkar") {
          member_post.innerHTML = "Pushkar";
          member_quote.innerHTML =
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnis magnam voluptatem reprehenderit error corporis sint, magni rem nondolorem!";
        } else if (image.alt === "ekta") {
          member_post.innerHTML = "Ekta";
          member_quote.innerHTML =
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnismagnam voluptatem reprehenderit error corporis sint, magni rem nonsdolorem!";
        } else if (image.alt === "nishant") {
          member_post.innerHTML = "Nishant";
          member_quote.innerHTML =
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnismagnam voluptatem reprehenderit error corporis sint, magni rem nondolorem!";
        } else if (image.alt === "kritika") {
          member_post.innerHTML = "Kritika";
          member_quote.innerHTML =
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque omnismagnam voluptatem reprehenderit error corporis sint, magni rem nondolorem!";
        }
      });
      image.addEventListener("mouseleave", () => {
        member_post.classList.remove("activePostName");
        member_quote.classList.remove("activePostName");
      });
    });
  });
  return (
    <div className="team_page">
      <Nav />

      <div className="team_members">
        <div
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="400"
          data-sel-easing="ease-out-bounce"
          data-sal-repeat="true"
          className="member"
        >
          <div className="member_image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg"
              alt="pushkar"
            />
          </div>
          <div className="member_name">lorem ipsum</div>
        </div>{" "}
        <div
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="500"
          data-sel-easing="ease-out-bounce"
          data-sal-repeat="true"
          className="member"
        >
          <div className="member_image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg"
              alt="ekta"
            />
          </div>
          <div className="member_name">lorem ipsum</div>
        </div>{" "}
        <div
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="600"
          data-sel-easing="ease-out-bounce"
          data-sal-repeat="true"
          className="member"
        >
          <div className="member_image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg"
              alt="nishant"
            />
          </div>
          <div className="member_name">lorem ipsum</div>
        </div>{" "}
        <div
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="700"
          data-sel-easing="ease-out-bounce"
          data-sal-repeat="true"
          className="member"
        >
          <div className="member_image">
            <img
              src="https://cdn.pixabay.com/photo/2016/03/12/23/18/man-1253004_960_720.jpg"
              alt="kritika"
            />
          </div>
          <div className="member_name">lorem ipsum</div>
        </div>
      </div>
      <div className="team_member_about">
        <div className="member_post"></div>
        <div className="member_quote"></div>
      </div>
    </div>
  );
}
