import React, { useEffect } from "react";
import Footer from "./Footer";
import Page3Content from "./Page3Content";
import Testimonials from "./Testimonials";
import Icon from "../Images/pixala studio.png";
import Icon1 from "../Images/pixala comm.png";
import Icon2 from "../Images/pixala store.png";
import Icon3 from "../Images/pixala clikd.png";
import Icon5 from "../Images/pixala ODST.png";
import Icon6 from "../Images/leegals pngggg.png";
import Image3 from "../Images/background1.png";
import Abstract2 from "../Images/newAnimation.gif";
import Creative from "../Images/CREATIVE PNG.png";
import Inspired from "../Images/get inspired.png";
import WorkBest from "../Images/work with the best.png";
import AmazingResults from "../Images/amazing result.png";

import "../../node_modules/sal.js/dist/sal.css";
import Scrollbar from "smooth-scrollbar";
import sal from "sal.js";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import Preloader from "./Preloader";
import Typed from "react-typed";
import { Link, NavLink } from "react-router-dom";

export default function Landing() {
  useEffect(() => {
    sal();
    var options = {
      damping: 0.05,
    };
    Scrollbar.init(document.querySelector("#my-scrollbar"), options);
  });

  useEffect(() => {
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const burgerNav = document.querySelector(".burger_nav");
    const hamburger_links = document.querySelector(".hamburger_links");

    console.log(hamburgerIcon.style.height);
    hamburgerIcon.addEventListener("click", () => {
      burgerNav.classList.toggle("burger_nav_active");
      hamburger_links.classList.toggle("hamburger_links_active");
    });
  });

  useEffect(() => {
    const questions = document.querySelectorAll(".queall");
    const answer = document.querySelectorAll(".ans1");
    for (let i = 0; i < questions.length; i++) {
      questions[i].addEventListener("click", () => {
        answer[i].classList.toggle("ans1Active");
      });
    }
  });

  return (
    <div id="my-scrollbar" className="landing_page">
      <div className="hamburger_icon" id="hamburgerIcon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="burger_nav">
        <Hamburger />
      </div>
      <Nav />
      <div className="landing_page_1st">
        <div className="landing_heading_button_container">
          <div className="landing_heading_button">
            <div>
              <div
                // data-sal-duration="1200"
                // data-sal="slide-up"
                // data-sal-delay="300"
                // data-sel-easing="ease-out-bounce"
                // data-sal-repeat="true"
                className="landing_heading"
              >
                <div>Enhanced in each perception.</div>
                <div> Enhanced in each perception.</div>
              </div>
              {/* <button
                data-sal-duration="1200"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="landing_button"
              >
                Contact Us
              </button> */}
            </div>
          </div>
          <div className="landingQuotes">
            <Typed
              style={{ fontSize: "1.3rem" }}
              strings={[
                "Let our Pixels define the image in your mind ^3000",
                "The more strange, the more wonderful it is ^3000",
                "Big ideas,Creative People,New technology ^3000",
                "Making intelligence visible. ^3000",
                "We often plough so much energy into the big picture, we forget the pixels ^3000",
                "The devil’s in the details ^3000",
              ]}
              loop
              typeSpeed={40}
            ></Typed>
          </div>
        </div>
        <div id="landing_containers" className="landing_containers">
          <div className="landing_container1">
            {/* <img src={Image4} alt="" /> */}
            <section className="lottie1">
              <lottie-player
                className="lottie1"
                autoplay
                loop
                mode="normal"
                src="https://assets2.lottiefiles.com/packages/lf20_wkgiytpm.json"
                style={{
                  width: "100%",
                  height: "100%",
                  // position: "absolute",
                  // top: "60%",
                  // left: "20%",
                }}
              ></lottie-player>
            </section>
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container1_heading"
            >
              Catch your drift, About us
            </div>
            {/* <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="400"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container1_para"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              qui eos magnam nesciunt necessitatibus blanditiis suscipit minima
              fugiat! Minus repudiandae unde cum, vitae laborum doloremque
              impedit facere, voluptatem enim nam incidunt officiis maxime.
              Tenetur magni dicta assumenda dolor. Quos, aliquam!
            </div> */}
          </div>
          <div className="landing_container2">
            <img src={Image3} alt="blog image" />
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container2_para"
            >
              Envisioning, Kicking off from scratch, Nuts and bolts of
              creativity and last but not the least establishing businesses and
              getting the ball rolling.
            </div>
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="600"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container2_button"
            >
              <Link to="/about">
                <button>learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="landing_page_3rd">
        {/* <BgSVGAnimation /> */}
        <div className="page3_heading">Our Divisions</div>

        <div className="page3_content">
          <Page3Content
            delay="300"
            source={Icon}
            heading="Pixala Studio"
            desc=" Danger, deadly, design ahead"
            keyy="contentHeading1"
            altTag="pixala studio logo"
          />
          <Page3Content
            delay="400"
            source={Icon1}
            heading="Pixala Tribe"
            desc=" Savage or Average, all are invited to be a part of our team pseudo pixalites"
            altTag="pixala tribe logo"
          />
          <Page3Content
            delay="500"
            source={Icon2}
            heading="Pixala Store"
            desc=" Modern and flexible themes designed to help you express your brand"
            altTag="pixala store logo"
          />
          <Page3Content
            delay="600"
            source={Icon3}
            heading="Pixala Clikd"
            desc="Give your brands the quality they deserve"
            altTag="pixala clikd logo"
          />
          <Page3Content
            delay="700"
            source={Icon5}
            heading="Pixala ODST"
            desc="Coming Soon..."
            altTag="pixala ODST logo"
          />
          <Page3Content
            delay="800"
            source={Icon6}
            heading="Pixala Legals"
            desc="Coming Soon..."
            altTag="pixala learning logo"
          />
        </div>
      </div>
      <div className="landing_page_4th">
        <div className="page_4_left">
          <div className="page4_top_content">
            <div
              data-sal-duration="1200"
              data-sal="slide-right"
              data-sal-delay="600"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="page4_heading"
            >
              Creative Process
            </div>
            <div
              data-sal-duration="1200"
              data-sal="slide-right"
              data-sal-delay="800"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="page4_desc"
            >
              Design is not just what it looks like and feels like. Design is
              how it works.
            </div>
            <div
              data-sal-duration="1200"
              data-sal="slide-right"
              data-sal-delay="900"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="page4_button"
            >
              <button>Learn More</button>
            </div>
          </div>
          <div className="page4_left_one">
            <img
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="700"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              src={Inspired}
              alt="pixala get inspired image"
              className="page4_left_one_image"
            />
            <div className="page4_left_one_content">
              <div className="page4_left_one_heading">Get Inspired.</div>
              <div className="page4_left_one_text">
                Everything is designed. Few things are designed well.
              </div>
            </div>
          </div>
          <div className="page4_left_two">
            <img
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="700"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              src={Creative}
              alt="pixala get creative image"
              className="page4_left_two_image"
            />
            <div className="page4_left_two_content">
              <div className="page4_left_two_heading">Creative Ideas.</div>
              <div className="page4_left_two_text">
                There are three responses to a piece of design - Yes, No and
                WOW! We are aiming for the WOW!
              </div>
            </div>
          </div>
        </div>
        <div className="page_4_right">
          <div className="page4_right_one">
            <img
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="700"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              src={WorkBest}
              alt="pixala get work with best image"
              className="page4_right_one_image"
            />
            <div className="page4_right_one_content">
              <div className="page4_right_one_heading">Work with the best.</div>
              <div className="page4_right_one_text">
                Use the power of creativity to connect your business to the
                world.
              </div>
            </div>
          </div>
          <div className="page4_right_two">
            <img
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="700"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              src={AmazingResults}
              alt="pixala get amazing image"
              className="page4_right_two_image"
            />
            <div className="page4_right_two_content">
              <div className="page4_right_two_heading">Amazing Results.</div>
              <div className="page4_right_two_text">
                Design adds value faster than it adds costs.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing_page_2nd">
        <div className="landing_page2_text">
          <div
            data-sal-duration="1200"
            data-sal="slide-up"
            data-sal-delay="600"
            data-sel-easing="ease-out-bounce"
            data-sal-repeat="true"
            className="page2_heading"
          >
            <h2>Frequently Asked Questions</h2>
            <h5>Know us better.</h5>
          </div>
          <div className="page2_questions">
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1"
              >
                What is elPixala and how does it work?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans"
              >
                elPixala being the parent company, has six branches operating
                under it that provide these services.Pixel studio is one of
                those divisions that provides services such as web development,
                graphic designing, digital marketing, content writing, and
                product listing at reasonable prices. The remaining branches
                range from a template-based website to a photography, online
                store and an online community too. Just click on the link below:
                <span style={{ color: "#F0FF00" }}>
                  {" "}
                  https://www.elpixala.com/{" "}
                </span>{" "}
                and send your queries to them.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                What are the divisions under elPixala
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                1.Pixala Studio <br /> 2. Pixala Clikd <br /> 3. Pixala ODST{" "}
                <br /> 4. Pixala Tribe <br /> 5. Pixala Store <br /> 6. Pixala
                learn
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                What are the services provided by Pixala Studio?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                Pixala Studio is an online service providing organisation. The
                services include web development, graphic designing, digital
                marketing, product photography, videography and product listing.
                All of these services are available at the most affordable cost
                in the Pixala studios branch of elPixala.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                How much do the services by Pixala studio cost?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                Since the services are customisable, the different divisions of
                elPixala charge according to the type of project you demand.
                However, our cost of services begin from a minimal charge of
                Rs.299 for visiting card designing.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                Tips and tricks for getting started with your own business
                through elPixala.
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                You can give a kick start to your business along with elPixala
                as they are providing intriguing plans for upcoming start-ups.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                In what countries can I avail the services provided by elPixala?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                elPixala provides its services globally. Just click on the given
                link:{" "}
                <span style={{ color: "#F0FF00" }}>
                  https://www.elpixala.com/
                </span>
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                I want to give my website a new look. What should I do?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                If you wish to give a new look to your website, you can surely
                reach out to the elPixala team through the contact us tab on our
                page. Pixala studio deals in redesigning websites (coded and
                non-coded) at the most affordable prices. You can have a look at
                their portfolio by visiting the given link:
                <span style={{ color: "#F0FF00" }}>
                  https://www.elpixala.com/
                </span>
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                Where to get flexible payment options for services like web
                design, logo design, app development, photography etc.
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                You can easily reach out to elPixala for flexible payment
                options for online services like web design, logo design, app
                development, photography etc. as they are providing top-notch
                services at the most affordable price.
              </div>
            </div>
            {/* <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                How do I get to the top of my market using elPixala?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                You can easily get to the top of your market using the digital
                marketing service provided by elPixala. They include every
                element which can benefit your online business and lead it to
                greater heights and success.
              </div>
            </div> */}
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1 queall"
              >
                Does elPixala accept payment through international credit cards?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                Yes,elPixala is accepting payment through international credit
                cards. The services they provide include web development,
                graphic designing, digital marketing, product photography,
                videography, and product listing. All of these services are
                available at the most affordable cost.
              </div>
            </div>
          </div>
        </div>
        <div className="landing_page2_images">
          <img className="abstract1" src={Abstract2} alt="" />
       
        </div>
      </div>
      <div className="landing_page_5th">
        <div className="page5_heading">Testimonials.</div>
        <div className="testimonials">
          <div className="testimonials_top">
            <div id="top1">
              <Testimonials
                name="lorem"
                company="Nature Karts"
                text="The team did an excellent job designing the logo, website development and other promotional material. Everytime I have a need, I will reach out to then because they are the absolute best in their field. Not to mention they are always easily accessible."
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Paylook"
                text="Extremely easy to work with, highly professional, and captured exactly what I was looking for in designing my website and getting my products clicked. I could not be happier with the outcome!
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Gocarmats"
                text="I would absolutely recommend anyone to reach out to the elPixala team for any service they provide. From their skills in photography to graphic designing I am impressed with their perfection and how they give reality to the thoughts of their clients like me myself.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Jazzo"
                text="We had a fantastic experience working with elPixala. The communication was easy, clear and I was impressed by their quality of work and professionalism."
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
            </div>
            <div id="top2">
              <Testimonials
                name="lorem"
                company="Yogyam"
                text="To anyone looking for a results-driven, professional brand development resource that can deliver according to agreed upon budget and timeline, I’d recommend elPixala.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Orgivo"
                text="The team did an excellent job designing the logo, website development and other promotional material. Everytime I have a need, I will reach out to then because they are the absolute best in their field. Not to mention they are always easily accessible.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Inorvo"
                text="Extremely easy to work with, highly professional, and captured exactly what I was looking for in designing my website and getting my products clicked. I could not be happier with the outcome!
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Flipbuy"
                text="I would absolutely recommend anyone to reach out to the elPixala team for any service they provide. From their skills in photography to graphic designing I am impressed with their perfection and how they give reality to the thoughts of their clients like me myself.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
            </div>
          </div>
          <div className="testimonials_bottom">
            <div id="bottom1">
              <Testimonials
                name="lorem"
                company="Team all good"
                text="We had a fantastic experience working with elPixala. The communication was easy, clear and I was impressed by their quality of work and professionalism. "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="momostan"
                text="To anyone looking for a results-driven, professional brand development resource that can deliver according to agreed upon budget and timeline, I’d recommend elPixala.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Nature Karts"
                text="The team did an excellent job designing the logo, website development and other promotional material. Everytime I have a need, I will reach out to then because they are the absolute best in their field. Not to mention they are always easily accessible.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Paylook"
                text="Extremely easy to work with, highly professional, and captured exactly what I was looking for in designing my website and getting my products clicked. I could not be happier with the outcome!
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
            </div>
            <div id="bottom2">
              <Testimonials
                name="lorem"
                company="Gocarmats"
                text="I would absolutely recommend anyone to reach out to the elPixala team for any service they provide. From their skills in photography to graphic designing I am impressed with their perfection and how they give reality to the thoughts of their clients like me myself.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Jazzo"
                text="We had a fantastic experience working with elPixala. The communication was easy, clear and I was impressed by their quality of work and professionalism. 
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Yogyam"
                text="To anyone looking for a results-driven, professional brand development resource that can deliver according to agreed upon budget and timeline, I’d recommend elPixala.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
              <Testimonials
                name="lorem"
                company="Orgivo"
                text="The team did an excellent job designing the logo, website development and other promotional material. Everytime I have a need, I will reach out to then because they are the absolute best in their field. Not to mention they are always easily accessible.
                "
                image="https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                altTagTestimonial="testimonial image"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="career"
        data-sal-duration="1200"
        data-sal="fade"
        data-sal-delay="700"
        data-sel-easing="ease-out-bounce"
        data-sal-repeat="true"
        className="landing_page_career"
        style={{ color: "black", display: "none" }}
      >
        Career Coming Soon
      </div>
      <div className="landing_page_contact">
        <div
          data-sal-duration="1200"
          data-sal="slide-right"
          data-sal-delay="700"
          data-sel-easing="ease-out-bounce"
          data-sal-repeat="true"
          className="landing_page_contact_content"
        >
          <div>
            Let's talk <br /> Share your idea with us and we'll immediately get
            into action.
          </div>
          <Link to="/contact">
            <button>Connect</button>
          </Link>
        </div>
        <div className="landing_page_contact_img">
          {/* <img src={Shape} alt="" /> */}
          <section>
            <lottie-player
              autoplay
              loop
              mode="normal"
              src="https://assets9.lottiefiles.com/packages/lf20_dwwgitei.json"
              style={{
                width: "300px",
                height: "300px",
                position: "absolute",
                top: "50%",
                left: "50%",
                background: "transparent",
                transform: "translate(-50%,-50%)",
              }}
            ></lottie-player>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
