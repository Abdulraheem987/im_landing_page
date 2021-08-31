
import styled from 'styled-components'

const Hero = styled.div`
.content_container {
  margin-left: 30%;
  margin-top: 20px;
}

@media(min-width: 320px) and (max-width: 976px){
  .banner_container{
    width: 100% !important;
  }
}

.banner_container{
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}
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
  height: 300px;
  width: 100% !important;
}
.watermark_logo {
  height: 100%;
}
.banner_content {
  color: white;
}

`;

export default Hero