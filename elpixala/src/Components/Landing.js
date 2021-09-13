import React, { useEffect } from "react";
import BgSVGAnimation from "./BgsvgAnimation";
import Footer from "./Footer";
import Page3Content from "./Page3Content";
import Testimonials from "./Testimonials";
import Icon from "../Icons/icon.png";
import Icon1 from "../Icons/icon1.png";
import Icon2 from "../Icons/icon2.png";
import Icon3 from "../Icons/icon3.png";
import Icon4 from "../Icons/icon4.png";
import Icon5 from "../Icons/icon5.png";
import Icon6 from "../Icons/icon6.png";
import Image2 from "../Icons/animation_500_1.gif";
import Image3 from "../Images/background1.png";
import Image4 from "../Images/background2.png";
import Abstract1 from "../Images/abstract1.png";
import Abstract2 from "../Images/68866-plant-moving.gif";
import Shape from "../Images/shape.png";
import "../../node_modules/sal.js/dist/sal.css";
import Scrollbar from "smooth-scrollbar";
import sal from "sal.js";
import Nav from "./Nav";

export default function Landing() {
  useEffect(() => {
    sal();
    var options = {
      damping: 0.05,
    };
    Scrollbar.init(document.querySelector("#my-scrollbar"), options);
  });

  return (
    <div id="my-scrollbar" className="landing_page">
      <Nav />
      <div className="landing_page_1st">
        <div className="landing_heading_button_container">
          <div className="landing_heading_button">
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="landing_heading"
              >
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <button
                data-sal-duration="1200"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="landing_button"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="landing_image1">
            <img src={Image2} className="image1" alt="" />
          </div>
        </div>
        <div className="landing_containers">
          <div className="landing_container1">
            <img src={Image4} alt="" />
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container1_heading"
            >
              heading
            </div>
            <div
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
            </div>
          </div>
          <div className="landing_container2">
            <img src={Image3} alt="" />
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container2_para"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              qui eos magnam nesciunt necessitatibus blanditiis suscipit minima
              fugiat! Minus repudiandae unde cum, vitae laborum doloremque
            </div>
            <div
              data-sal-duration="1200"
              data-sal="slide-up"
              data-sal-delay="600"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="landing_container2_button"
            >
              <button>learn more</button>
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
            <h2>Lorem ipsum dolor, sit amet consectetur adipisicing.</h2>
            <h5>Lorem, ipsum dolor.</h5>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                quaerat?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sapiente tempore saepe aliquam ab incidunt mollitia dignissimos
                quae dolores eaque velit nam, odio dolorem? Sapiente, magni
                molestias earum explicabo, accusantium aperiam repellendus
                commodi ut excepturi modi odit ipsa distinctio aliquam
                reprehenderit dolores sint ratione ducimus vel minima alias
                pariatur quas.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                quaerat?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sapiente tempore saepe aliquam ab incidunt mollitia dignissimos
                quae dolores eaque velit nam, odio dolorem? Sapiente, magni
                molestias earum explicabo, accusantium aperiam repellendus
                commodi ut excepturi modi odit ipsa distinctio aliquam
                reprehenderit dolores sint ratione ducimus vel minima alias
                pariatur quas.
              </div>
            </div>
            <div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="600"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="que1"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
                quaerat?
              </div>
              <div
                data-sal-duration="1200"
                data-sal="slide-right"
                data-sal-delay="700"
                data-sel-easing="ease-out-bounce"
                data-sal-repeat="true"
                className="ans1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                sapiente tempore saepe aliquam ab incidunt mollitia dignissimos
                quae dolores eaque velit nam, odio dolorem? Sapiente, magni
                molestias earum explicabo, accusantium aperiam repellendus
                commodi ut excepturi modi odit ipsa distinctio aliquam
                reprehenderit dolores sint ratione ducimus vel minima alias
                pariatur quas.
              </div>
            </div>
          </div>
        </div>
        <div className="landing_page2_images">
          <img className="abstract1" src={Abstract2} alt="" />
          {/* <img className="abstract2" src={Abstract1} alt="" /> */}
        </div>
      </div>
      <div className="landing_page_3rd">
        {/* <BgSVGAnimation /> */}
        <div className="page3_heading">Lorem ipsum dolor sit amet.</div>

        <div className="page3_content">
          <Page3Content
            delay="300"
            source={Icon}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
          />
          <Page3Content
            delay="400"
            source={Icon1}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
          />
          <Page3Content
            delay="500"
            source={Icon2}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
          />
          <Page3Content
            delay="600"
            source={Icon3}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
          />
          <Page3Content
            delay="700"
            source={Icon5}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
          />
          <Page3Content
            delay="800"
            source={Icon6}
            heading="lorem ipsum"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident
      velit animi, quae numquam quas."
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
              Lorem ipsum dolor sit.
            </div>
            <div
              data-sal-duration="1200"
              data-sal="slide-right"
              data-sal-delay="800"
              data-sel-easing="ease-out-bounce"
              data-sal-repeat="true"
              className="page4_desc"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              reprehenderit!
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
              src="https://cdn.pixabay.com/photo/2017/03/25/17/55/colorful-2174045_960_720.png"
              alt=""
              className="page4_left_one_image"
            />
            <div className="page4_left_one_content">
              <div className="page4_left_one_heading">Lorem, ipsum.</div>
              <div className="page4_left_one_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                perferendis.
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
              src="https://cdn.pixabay.com/photo/2019/04/26/17/47/color-4158152_960_720.jpg"
              alt=""
              className="page4_left_two_image"
            />
            <div className="page4_left_two_content">
              <div className="page4_left_two_heading">Lorem, ipsum.</div>
              <div className="page4_left_two_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                perferendis.
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
              src="https://cdn.pixabay.com/photo/2020/09/28/16/29/leaves-5610361_960_720.png  "
              alt=""
              className="page4_right_one_image"
            />
            <div className="page4_right_one_content">
              <div className="page4_right_one_heading">Lorem, ipsum.</div>
              <div className="page4_right_one_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                perferendis.
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
              src="https://cdn.pixabay.com/photo/2019/08/19/09/24/banana-4415864_960_720.jpg"
              alt=""
              className="page4_right_two_image"
            />
            <div className="page4_right_two_content">
              <div className="page4_right_two_heading">Lorem, ipsum.</div>
              <div className="page4_right_two_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex,
                perferendis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing_page_5th">
        <div className="page5_heading">Lorem ipsum dolor sit.</div>
        <div className="testimonials">
          <div className="testimonials_top">
            <div id="top1">
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque parlit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolaudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantiumit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dol autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
            </div>
            <div id="top2">
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque parlit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolaudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantiumit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dol autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
            </div>
          </div>
          <div className="testimonials_bottom">
            <div id="bottom1">
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariat lit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolaudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
            </div>
            <div id="bottom2">
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariat lit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolaudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque pariatur, incidunt earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              />
              <Testimonials
                name="lorem"
                company="lorem ipsum"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia modi impedit
            sit culpa eaque  earum laudantium autem dolor?"
                image="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
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
          <div>Lorem ipsum dolor sit amet consectetur adipisicing.</div>
          <button>Connect</button>
        </div>
        <div className="landing_page_contact_img">
          <img src={Shape} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
