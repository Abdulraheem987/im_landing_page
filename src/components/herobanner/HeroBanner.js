import React, {useState, useEffect, useLayoutEffect} from "react";
import Hero from "./style.js";
import { backgroundBanner } from "../../../images"
import LogoLottie from "./LogoLottie";
import BannerRegisterForm from '../banner_register_form'

const HeroBanner = () => {

  const bgbanner = {
    backgroundImage: `url(${backgroundBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 350
  }
  
  return (
    <Hero className="container-fluid p-0">
      <div className="hero_banner_container" style={bgbanner}>
        {/* <div className="row h-100 w-100"> */}
          {/* <div className="h-100 col-12 col-lg-8 col-md-8 p-0">
            <div className="content_container"> */}
            <div className="container pt-4">
              <div className="banner_container">
                <LogoLottie />
              </div>
            </div>
            {/* </div>
          </div> */}

          {/* <div className="h-100 col col-lg-4 col-md-4 mr-0 d-none d-md-flex">
            <img
              className="img_im_logo_banner"
              src={bannerImage}
              width="98%"
              height="98%"
            />
          </div> */}
        {/* </div> */}
      </div>
      {/* ===========Search Area========= */}
      <BannerRegisterForm />
    </Hero>
  );
};

export default HeroBanner;
