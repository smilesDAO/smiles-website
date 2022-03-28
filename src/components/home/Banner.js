import { useRef, useEffect, useState } from "react";
import { FaDiscord } from 'react-icons/fa';

const Banner = () => {

  return (
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
          <img src="https://images.unsplash.com/photo-1648138754700-532328f117cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1000&q=80"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;