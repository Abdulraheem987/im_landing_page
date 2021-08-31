import React, {useState, useEffect} from 'react'
import RegisterFormContainer from './style';
import cogoToast from 'cogo-toast';

const BannerRegisterForm  = () => {
    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: userName, email: userEmail})
    };
    fetch(process.env.REQUEST_URL, requestOptions)
      .then(async res => {
        console.log(res, 'res')
        if(res.ok){
          setLoading(false)
          setUserName(null)
          setUserEmail(null)
          return cogoToast.success('Your request has been submitted successfully');
        }
        else{
          setLoading(false)
          return cogoToast.error(res.statusText || "Some thing went wrong");
        }
      })
    }


    return(
        <RegisterFormContainer className="container">
          {/* <div className="row"> */}
        <div className="search_area_container">
          <p>Register your interest to be the first to know when we launch</p>
          <form className="row" onSubmit={handleSubmit}>
            <div className="col-lg-5 m-sm">
            <input 
              min="1"
              type="text" 
              className="form-control" 
              id="username" 
              placeholder="Your name*" 
              onChange={(e) => setUserName(e.target.value)}
            />
            </div>
            <div className="col-lg-5 m-sm">
            <input 
              type="email" 
              className="form-control" 
              id="password" 
              placeholder="Your email*"
              onChange={(e) => setUserEmail(e.target.value)}
            />
            </div>
            <div className="col-lg-2 m-sm">
              <button loading={loading} type="submit" className="submit_btn btn">{loading ? 'Submit...' : "Submit"}</button>
            </div>
          </form>
        </div>
        {/* </div> */}
        </RegisterFormContainer>
    )
}

export default BannerRegisterForm