import "../css/middle.css";

import { Component, useEffect, useState } from "react";

import images from "../assets";
import line_png from "../assets/line_png.png";
import { render } from "react-dom";

// import "@vetixy/circular-std";

const Render_Item = ({ name, image }) => {
  return (
    <div className="fixed_box ">
      <h3 className={"fixed_text"}>{name}</h3>
      <img src={image} className={"fixed_image"} />
    </div>
  );
};
const Middle = () => {
  console.log("images", images[3].image);
  return (
    <div class="main">
      <div className="inner_container">
        <div className="slider left_cont">
          <Render_Item name={images[0].name} image={images[0].image} />
          <Render_Item name={images[1].name} image={images[1].image} />
          <Render_Item name={images[2].name} image={images[2].image} />
        </div>
        <div className="middle_con">
          <div className="middle_slider middle_top">
            <Render_Item name={images[3].name} image={images[3].image} />
            <Render_Item name={images[4].name} image={images[4].image} />
            <Render_Item name={images[5].name} image={images[5].image} />
          </div>

          <div className="box">
            <text className="center_text">
              Are you tired of searching for study material? Is the night before
              exam too stressful? PrepUni is coming soon to help with your
              examination anxiety.
            </text>
          </div>
          <div className="middle_slider  middle_bottom">
            <Render_Item name={images[10].name} image={images[10].image} />
            <Render_Item name={images[11].name} image={images[11].image} />
            <Render_Item name={images[12].name} image={images[12].image} />
          </div>
        </div>
        <div className="slider right_cont">
          <Render_Item name={images[6].name} image={images[6].image} />
          <Render_Item name={images[7].name} image={images[7].image} />
          <Render_Item name={images[8].name} image={images[8].image} />
          <Render_Item name={images[9].name} image={images[9].image} />
        </div>
      </div>
      <img className={"line_image"} src={line_png} />
    </div>
  );
};
export default Middle;
