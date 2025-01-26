import React from "react";
import "./Collegephoto.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Collegephoto = () => {
  return (
    <div className="collegephoto">
      <div className="gallery">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <button className="btn dark-btn">
        See More <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Collegephoto;
