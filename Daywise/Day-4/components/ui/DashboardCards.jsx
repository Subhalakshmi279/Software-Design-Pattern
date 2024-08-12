// Counter.jsx

import React, { useEffect } from "react";
import "@/assets/css/DashboardCards.css"; // Import the corresponding CSS file
import BlurFade from "../magicui/blur-fade";

const Counter = () => {
  useEffect(() => {
    const animateCountUp = (el) => {
      const animationDuration = 3000;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(animationDuration / frameDuration);
      const easeOutQuad = (t) => t * (2 - t);
      let frame = 0;
      const countTo = parseInt(el.getAttribute("data-target"), 10);
      const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        if (parseInt(el.innerHTML, 10) !== currentCount) {
          el.innerHTML = currentCount;
        }
        if (frame === totalFrames) {
          clearInterval(counter);
        }
      }, frameDuration);
    };

    const countupEls = document.querySelectorAll(".count");
    countupEls.forEach(animateCountUp);
  }, []);

  return (
    <BlurFade delay={0.5} inView>
    <div className="counter_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3>
                <span className="count" data-target="100">0</span>+
              </h3>
              <h4>STAFFS</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_center">
              <h3>
                <span className="count" data-target="20">0</span>+
              </h3>
              <h4>CLASSES</h4>
            </div>
          </div>
          <div className="col-md-4 col-sm-4">
            <div className="count_box box_hover">
              <h3>
                <span className="count" data-target="50">0</span>+
              </h3>
              <h4>COURSES</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </BlurFade>
  );
};

export default Counter;
