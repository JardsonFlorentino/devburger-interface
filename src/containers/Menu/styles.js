import styled from "styled-components";
import BannerHamburger from "../../assets/banner-hamburger.svg";

import { FaArrowLeft } from 'react-icons/fa'
import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";

const MOBILE_BREAKPOINT = '768px';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite}f0;

    background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
    ),
    url('${Background}');
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        padding: 0; 
    }
`;


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px; 
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;
    background-position: center;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: ${(props) => props.theme.white};
        position: absolute;

        right: 15%;
        top: 30%;
    }

    span {
        display: block;
        color: ${(props) => props.theme.white};
        font-size: 20px;
        font-weight: 300; 
    }

    @media (max-width: ${MOBILE_BREAKPOINT}) {
        height: 250px; 
        
        h1 {
            font-size: 50px; 
            line-height: 40px;
            right: 5%; 
            top: 40%;
            text-align: right;
        }

        span {
            font-size: 16px; 
        }
    }
`;


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
    
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        flex-wrap: nowrap;
        justify-content: flex-start;
        gap: 30px;
        margin-top: 30px;
        padding: 0 15px; 
        overflow-x: auto; 
        -webkit-overflow-scrolling: touch; 
        
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? props.theme.purple : '#696969')};
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    cursor: pointer;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${props.theme.purple}`};
    white-space: nowrap; 

    @media (max-width: ${MOBILE_BREAKPOINT}) {
        font-size: 16px;
        padding: 5px 0;
        flex-shrink: 0;
    }
`;


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;
    
    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr); 
        gap: 40px;
        padding: 30px 20px;
    }

   
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        grid-template-columns: 1fr; 
        gap: 60px;
        padding: 20px 20px 30px 20px; 
        margin-top: 40px;
    }
`;
