import React from 'react'
import RegisterFormContainer from './style';

const BannerRegisterForm  = () => {
    return(
        <RegisterFormContainer className="container">
          {/* <div className="row"> */}
        <div className="search_area_container">
          <p>Register your interest to be the first to know when we launch</p>
          <form class="row">
            <div class="col-lg-5">
            <input type="password" class=" form-control" id="inputPassword2" placeholder="Your name*" />
            </div>
            <div class="col-lg-5">
            <input type="password" class="form-control" id="inputPassword2" placeholder="Your email*" />
            </div>
            <div class="col-lg-2">
              <button type="submit" class="submit_btn btn mb-3">Submit</button>
            </div>
          </form>
        </div>
        {/* </div> */}
        </RegisterFormContainer>
    )
}

export default BannerRegisterForm