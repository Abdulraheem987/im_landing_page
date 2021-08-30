
import styled from 'styled-components'

const Hero = styled.div`
.content_container {
  margin-left: ${props => props.devicecal ? `${props.devicecal}px` : '10%'};
  margin-top: 20px;
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
  background: red;
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