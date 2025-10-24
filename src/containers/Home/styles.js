import styled from "styled-components";

import BannerHome from "../../assets/banner-home.svg";
import Background from "../../assets/background.svg";

const MOBILE_BREAKPOINT = '768px';


export const Banner = styled.div`
    background-image: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;
    position: relative;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: ${(props) => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 15%;
    }

    @media (max-width: ${MOBILE_BREAKPOINT}) {
        height: 250px; 

        h1 {
            font-size: 40px; 
            right: auto; 
            left: 50%; 
            top: 50%; 
            transform: translate(-50%, -50%); 
            line-height: 35px; 
            text-align: center;
        }
    }
`

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
    ),
        url('${Background}');
    min-height: 100vh;
    width: 100%; 

    @media (max-width: ${MOBILE_BREAKPOINT}) {
        padding: 0 10px; 
    }
`
