
import styled from 'styled-components'

const Hero = styled.div`
.content_container {
  margin-left: 30%;
  margin-top: 20px;
}

@media(min-width: 320px) and (max-width: 830px){
  .content_container{
    margin-left: 8% !important;
  }
}
@media(min-width: 320px) and (max-width: 876px) and (orientation: landscape){
  .content_container{
    margin-left: 16% !important;
  }
}

// @media(min-width: 1024px) and (max-width: 1200px){
//   .content_container{
//     margin-left: 13% !important;
//   }
// }

.mobile_banner_content {
  margin-left: 10px;
  color: white;
}
.desktop_banner_content {
  color: white;
  // font-size: 1.1vw;
  font-weight: 500px;
}
.hero_banner_container {
  background: #de0100 !important;
  height: 300px;
}
.watermark_logo {
  height: 100%;
}
.banner_content {
  color: white;
}

`;

export default Hero