import styled from "styled-components";

import Texture from "../../assets/texture.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
    width: 100%;
     background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
       url('${Background}');
      min-height: 100vh;
      
`

export const Banner = styled.div`
    background-image: url('${Texture}');
    background-color: ${(props) => props.theme.mainBlack};
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

    img {
        width: 140px;
    }

`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: ${(props) => props.theme.gren};
    text-align: center;
    position: relative;
    margin-top: 30px;

    &::after {
        position: absolute;
        left: calc(50% + -28px);
        bottom: 0;
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.gren};
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px;
`