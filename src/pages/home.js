import "../css/base.css";

/** TODO: PrepUni first section
 *  Three students with thinking about bubble
 *  Subtitle
 *  Main Title
 */
import React, { useEffect } from "react";

import center_bubble from "../assets/center_svg.svg";
import left_bubble from "../assets/left_bubble.svg";
import line_png from "../assets/line_png.png";
import prepuni_logo from "../assets/prepuni_logo.png";
import right_bubble from "../assets/though_2.svg";
import stu_1 from "../assets/students_svg.svg";
import stu_2 from "../assets/student_svg.svg";
import stu_3 from "../assets/student_female.svg";

const Home = () => {
  useEffect(() => {
    console.log("running");
  }, []);
  return (
    <div className="first_container">
      <div className={"top_name_container"}>
        <text>Prep</text>
        <text>Uni</text>
      </div>
      {/* <img src={center_pic} className={"bg_logo"} /> */}
      <div className={"inner_child"}>
        <div className={"image_container"}>
          <div className={"first_bubble"}>
            <text className={"text_in_box"}>
              Do I have the expected answers? Wish there was a way to confirm.
            </text>
            <img src={right_bubble} className={"thought_image_1 "} />
          </div>
          <img
            src={stu_1}
            style={{ marginLeft: "10vmin" }}
            className={"stu_first_image"}
          />
        </div>
        {/* <div className={"image_container"}>
          <div className={"second_bubble"}>
            <text className={"text_in_box"}>
              Is it too late to start now? How can I prioritise?
            </text>
            <img src={center_bubble} className={"thought_image_2"} />
          </div>
          <img src={stu_2} className={"stu_second_image"} />
        </div>
        <div className={"image_container"}> 
          <div className={"third_bubble"}>
            <text className={"text_in_box"}>
              My notes are scattered all over the place. I need one reliable
              source.
            </text>
            <img src={left_bubble} className={"thought_image_3 "} />
          </div>
          <img src={stu_3} className={"stu_third_image"} />
        </div>
        */}
      </div>
      <text className={"subtitle"}>
        If you've ever had these thoughts, PrepUni is here to cover all the
        bases.
      </text>
      <img className="l1" src={prepuni_logo} />
      <img className={"line_image"} src={line_png} />
    </div>
  );
};

export default Home;

// XR - 254.33px
// oneplus 6 - 285px
// iphone 6 - 253px
// onelus 8 -
