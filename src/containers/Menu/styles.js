import styled from "styled-components";
import BannerHamburger from "../../assets/banner-hamburger.svg";

import { FaArrowLeft } from 'react-icons/fa'

import Background from "../../assets/background.svg";
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite}f0;

     background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
       url('${Background}');
`


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

    }



`


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 50px;
`

export const CategoryButton = styled(Link)`
    text-decoration: none;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? (props) => props.theme.purple : '#696969')};
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    cursor: pointer;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};

`


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;

`

