
import styled from 'styled-components'

const RegisterFormContainer = styled.div`
.search_area_container{
    background-color: white;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    // height: 130px;
    border-radius: 20px;
    position: relative;
    bottom: 50px;
    padding: 20px;
    box-shadow: 2px 2px 15px 0px rgb(179 179 179 / 60%);
  }

.search_area_container input{
  border: none;
  border-bottom: 1px solid lightgray;
}
.form-control:focus{
  -webkit-box-shadow:none !important;
  box-shadow: none !important;
}
.submit_btn:focus{
  -webkit-box-shadow:none !important;
  box-shadow: none !important;
}


.m-sm{
  
}

@media(min-width: 320px) and (max-width: 976px){
    .search_area_container{
      width: 100% !important;
    }
    .m-sm{
      margin-top: 1rem;
    }
}
@media(min-width: 320px) and (max-width: 976px){
  .m-sm{
    margin-top: 1rem;
  }
}

  .submit_btn{
    width: 100%;
    background: #0d0d40;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    border-radius: 12px;
  }
  
  `

export default RegisterFormContainer