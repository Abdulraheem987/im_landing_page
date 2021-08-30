
import styled from 'styled-components'

const FooterContainer = styled.div`
  .footer{
    padding: 10px 0;
  }
  .contact_link div{
    margin: 0 10px 0 0;
  }
  .contact-icon {
    border-radius: 100%;
    background: #de1f26;
    color: #fff;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 2;
  }
  a {
    color: #de1f26;
    &:hover {
      text-decoration: underline;
    }
  }
  `

export default FooterContainer