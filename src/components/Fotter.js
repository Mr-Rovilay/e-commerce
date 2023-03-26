import React from "react";
import facebook from "../images/facebook_v9d6bz.png";
import twitter from "../images/twitter_yitov1.png";

const Fotter = () => {
  return (
    <div>
      <br />
      <div className="flex-container">
        <div className="store-story">
          <h1>Supreme Store</h1>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
            delectus maiores velit eaque modi, eius dolorum accusantium
            molestias excepturi odit quo eum assumenda? Quisquam praesentium
            sapiente quo eveniet ex dolorem!
          </h3>
        </div>
        <div className="map-site">
          <h1>SiteMap</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>New Arrival</li>
            <li>Product</li>
          </ul>
        </div>
        <div className="img-f">
          <h1>Connect with us on social media</h1>
          <img src={facebook} alt="facebook" srcset="" width="80" height="70" />
          <img src={twitter} alt="twitter" srcset="" width="80" height="70" />
        </div>
      </div>
    </div>
  );
};

export default Fotter;
