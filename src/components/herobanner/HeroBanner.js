import React, {useState, useEffect} from "react";
import Hero from "./style.js";
import { bannerImage } from "../../../images"
import LogoLottie from "./LogoLottie";
import BannerRegisterForm from '../banner_register_form'

const HeroBanner = () => {
  // console.log(window.innerWidth, 'innerwidth')

  // const [deviceWidth, setDeviceWidth] = useState();

  // const handleDeviceWidth = () => setDeviceWidth(window.innerWidth);

  // useEffect(() => {
  //   if(window){
  //     window.addEventListener("resize", handleDeviceWidth);
  //   }
  //   return () => window.removeEventListener("resize", handleDeviceWidth);
  // }, []);
  

  // console.log(deviceWidth - Math.round(deviceWidth*50/100), "handleDeviceWidth");
  // const devicecal = deviceWidth - Math.round(deviceWidth*85/100)

  return (
    <Hero className="container-fluid p-0">
      <div className="hero_banner_container">
        <div className="row h-100 w-100">
          <div className="h-100 col-12 col-lg-8 col-md-8 p-0">
            <div className="content_container">
              <LogoLottie 
                // deviceWidth={deviceWidth}
              />
            </div>
          </div>

          <div className="h-100 col col-lg-4 col-md-4 mr-0 d-none d-md-flex">
            <img
              className="img_im_logo_banner"
              src={bannerImage}
              width="98%"
              height="98%"
            />
          </div>
        </div>
      </div>
      {/* ===========Search Area========= */}
      <BannerRegisterForm />
    </Hero>
  );
};

export default HeroBanner;
