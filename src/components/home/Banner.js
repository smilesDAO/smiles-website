import { FaDiscord } from 'react-icons/fa';
import banner from "../../img/banner.png";
// import bannerWide from "../../img/banner-wide.png"; // alternative

const Banner = () => {
  return (
    <div className="banner-container-outer">
      <div className="banner-container">
        <div className="banner-wrapper">
          <div className="left-container">
            <h1 className="title">If making<br></br>people smile<br></br>was an NFT...</h1>
            <div className="button">
            <FaDiscord id="buttonIcon"></FaDiscord>
            <h2> Join the experiment</h2>
            </div>
          </div>
          <div className="right-container">
            <img src={banner}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
