import { useRef, useEffect, useState } from "react";

const Wtf = () => {
  return (
    <div className="wtf-container">
      <div className="gif-left">
        <img src="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"/>
      </div>
      <div className="gif-right">
        <img src="https://media.giphy.com/media/1d7F9xyq6j7C1ojbC5/giphy.gif"/>
      </div>
      <h1>WTF?</h1>
      <div className="description">Smiles is an experimental attempt to enable philanthropic fundraising through a group that collectively owns and <a className="hyperlink" href="https://www.smilesdao.web.app">controls the funds.</a> Our mission is simple: make more people smile. While donations as we know them often end up in a blackhole, Blockchains for the first time enable transparency and organisational accountability.</div>
      <div className="image-wrapper">
        <div className="image-stack">
          <div className="img-wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/UNICEF_Logo.png/1200px-UNICEF_Logo.png"/>
          </div>
          <div>UNICEF</div>
        </div>
        <div className="image-stack">
          <div>+</div>
        </div>
        <div className="image-stack">
        <div className="img-wrapper">
          <img src="https://akns-images.eonline.com/eol_images/Entire_Site/2020629/rs_1024x759-200729102655-1024-The-Lost-Boys-cast-photo-1-ch-072920.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top"/>
          </div>
        <div>LOST BOYS</div>
        </div>
      </div>
    </div>
  );
};

export default Wtf;