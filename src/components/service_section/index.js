import React from 'react';
import ServiceSectionContainer from './style';
import {connecticon, searchicon, attend, viewlisting} from '../../../images';

const ServiceSection  = () => {

    const date = new Date

    return(
        <ServiceSectionContainer className="container service_container">
        <h5 className="services_heading">Launching Q4, {date.getFullYear()}</h5>
        <div className="row">

          <div className="service_card col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={searchicon} />
              <h5>Search Investment Listings</h5>
              <p align='center'>
                Search for investment using your criteria, including by industy, asset className, primary objectives, investor type or enter key workds to find listings which may be of interest.
              </p>
            </div>
          </div>

          <div className="service_card col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={connecticon} />
              <h5>Connect directly with Listees</h5>
              <p align='center'>
                Once you've found the investments matching your objectives, contact the listees directly to have your questions answered, or to apply for an investment, no middle man.
              </p>
            </div>
          </div>

          <div className="service_card col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={viewlisting} />
              <h5>Stay informed</h5>
              <p align='center'>
                Keep up to date and informed through our bite size summaries of investment news and educational content designed to inspire your investment journey.
              </p>
            </div>
          </div>

          <div className="service_card col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img src={attend} />
              <h5>Attend Events</h5>
              <p align='center'>
                Join likeminded investors at physical and virtual events and discover more about investment opportunities, the leaders bhind them and gain market insights.
              </p>
            </div>
          </div>

        </div>
      </ServiceSectionContainer>
    )
}

export default ServiceSection