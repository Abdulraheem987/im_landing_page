import React from 'react';
import FooterContainer from './style';
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer  = () => {
    return(
        <FooterContainer className="container-fluid mt-5" style={{borderTop: '2px solid gray'}}>
        <div className="container">
          <div className="footer row d-flex justify-content-center align-items-center">
              <div className="col-lg-4 col-md-12 col-sm-12 text-lg-end text-md-start text-xl-end text-start">
                <p className="mb-0">
                  For any questions, please contact us: 
                </p>
              </div>
              <div className="mt-3 mb-3 contact_link d-flex align-items-center justify-content-lg-center justify-content-sm-start col-lg-4 col-md-12 col-sm-12">
                <div className="mr-3 contact-icon">
                    <FaEnvelope />
                </div>                
                <a className="text-decoration-none text-dark" target="_blank" href="inquiries@investmentmarkets.com.au">inquiries@investmentmarkets.com.au</a>
              </div>
              <div className="contact_link d-flex align-items-center col-lg-4 col-md-12 col-sm-12">
                <div className="mr-3 contact-icon">
                    <FaPhone />
                </div>
                <a className="text-decoration-none text-dark" target="_blank" href="tel:+61 7 3220 3428">+61 7 3220 3428</a>
              </div>
          </div>
        </div>
      </FooterContainer>
    )
}

export default Footer