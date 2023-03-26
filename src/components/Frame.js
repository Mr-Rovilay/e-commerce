import React from "react";
import logo from "../images/polo1_evsqam.jpg";
import polo2 from "../images/polo2_igl2zr.jpg";
import polo3 from "../images/polo3_ggueox.png";
import polo4 from "../images/polo4_uxfy54.jpg";
import logo1 from "../images/shirt1_qdxh6w.jpg";
import logo2 from "../images/shirt2_uiqelf.jpg";
import logo3 from "../images/shirt3_pzoaxu.jpg";
import logo4 from "../images/shirt4_v21kok.jpg";
import logo5 from "../images/shirt5_mbnrwf.jpg";
import logo6 from "../images/sneaker1_keogh1.jpg";
import logo7 from "../images/sneaker2_hqerll.jpg";
import logo8 from "../images/sneaker3_izl60q.jpg";

const Frame = () => {
  return (
    <div className="container">
      <h1 className="product">Products</h1>
      <div className="image-frame">
        <div className="card card-1">
          <img src={logo} alt="polo" srcset="" />
          <p className="card-price">N1250.</p>
        </div>
        <div className="card card-1">
          <img src={polo2} alt="" srcset="" />
          <p className="card-price">N1550.</p>
        </div>
        <div className="card card-1">
          <img src={polo3} alt="" srcset="" />
          <p className="card-price">N1650.</p>
        </div>
      </div>
      <div className="image-frame">
        <div className="card card-1">
          <img src={polo4} alt="" srcset="" />
          <p className="card-price">N1750.</p>
        </div>
        <div className="card card-1">
          <img src={logo1} alt="" srcset="" />
          <p className="card-price">N1850.</p>
        </div>
        <div className="card card-1">
          <img src={logo2} alt="" srcset="" />
          <p className="card-price">N1950.</p>
        </div>
      </div>

      <div className="image-frame">
        <div className="card card-1">
          <img src={logo3} alt="" srcset="" />
          <p className="card-price">N2250.</p>
        </div>
        <div className="card card-1">
          <img src={logo4} alt="" srcset="" />
          <p className="card-price">N2350.</p>
        </div>
        <div className="card card-1">
          <img src={logo5} alt="" srcset="" />
          <p className="card-price">N3250.</p>
        </div>
      </div>
      <div className="image-frame">
        <div className="card card-1">
          <img src={logo6} alt="" srcset="" />
          <p className="card-price">N4250.</p>
        </div>
        <div className="card card-1">
          <img src={logo7} alt="" srcset="" />
          <p className="card-price">N5250.</p>
        </div>
        <div className="card card-1">
          <img src={logo8} alt="" srcset="" />
          <p className="card-price">N6250.</p>
        </div>
      </div>
    </div>
  );
};

export default Frame;
