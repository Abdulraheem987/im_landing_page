import React, { useState, useEffect } from "react";
// import "../styles.css";
import Lottie from "react-lottie";
import desktopLottie from "./im";
import { mobileLottie } from "../../../images"

export default function LogoLottie(props) {
  // const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  // const handleDeviceWidth = () => setDeviceWidth(window.innerWidth);


  useEffect(() => {
    imLogoHandle();
  }, []);
  
  console.log(props.deviceWidth , "device");

  // console.log(deviceWidth - Math.round(deviceWidth*50/100), "handleDeviceWidth");
  // const devicecal = deviceWidth - Math.round(deviceWidth*50/100)

  const imLogoHandle = () => {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: desktopLottie,
      rendererSettings: {
        preserveAspectRatio: "xMinYMid slice",
        className: "imLogo"
      }
    };
    return defaultOptions;
  };

  const styles = {
    checkAnimation: {
      marginLeft: "-18%"
    }
  };

  return (
    <>
      {window.innerWidth > 976 ? (
        <>
          <div className="imLogo-container">
            <Lottie
              style={styles.checkAnimation}
              resizeMode="cover"
              options={imLogoHandle()}
              height={100}
            />
          </div>
          <div className="desktop_banner_content">
            <p>
              The transforming discovery tool for astute investors.
              <br />
              Every kind of investment opportunity - all in one place.
              Personalised. Unbiased. Free
            </p>
          </div>
        </>
      ) : (
        <>
          <div id="mobile-img" className="mb-4">
            <img
              style={{ width: 280, height: 100 }}
              src={mobileLottie}
              alt="loading..."
            />
          </div>
          <div className="mobile_banner_content">
            <p>
              The transforming industry tool for
              <br />
              every kind of investment opportunity
              <br />- all in one place.
            </p>
          </div>
        </>
      )}
    </>
  );
}
