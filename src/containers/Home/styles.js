import styled from "styled-components";

import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";


export const Banner = styled.div`
  background-image: url('${BannerHome}');
  background-size: cover;
  background-position: center;
  height: 480px;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: ${(props) => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 15%;
}
`

export const Container = styled.section`
  background: linear-gradient(
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.8)
  ),
   url('${Background}');
  min-height: 100vh;
  
  
`

