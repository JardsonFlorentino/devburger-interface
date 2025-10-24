import styled from "styled-components";
import { Link as ReactLink} from "react-router-dom";


import BackgroundLogin from '../../assets/background-login.svg'
import Background from '../../assets/background.svg'

const MOBILE_BREAKPOINT = '768px';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw; 
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        flex-direction: column; 
        height: auto; 
    }
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 70%;
    }
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        display: flex;
        height: 150px; 
        max-width: 100%; 
        
        img {
            display: block; 
            width: 35%; 
            max-height: 80%; 
        }
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color: #1e1e1e;

    p {
        color: ${(props) => props.theme.white};
        font-size: 18px;
        font-weight: 800;
        margin-top: 20px; 

        a {
            color: ${(props) => props.theme.purple};
            text-decoration: underline;
            
        }
    }
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        max-width: 100%; 
        padding: 30px 15px 50px 15px; 
        justify-content: flex-start; 
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: ${(props) => props.theme.white};
    margin-bottom: 20px; 

    span {
        color: ${(props) => props.theme.purple};
        font-family: "Road Rage", sans-serif;
    }
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        font-size: 30px; 
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    
    
    @media (max-width: ${MOBILE_BREAKPOINT}) {
        padding: 0; 
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px; 
    }

    label { 
        color: ${(props) => props.theme.white};
        font-size: 18px;
        font-weight: 600;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        font-weight: 600;
        height: 10px;
    }
`;


export const Link = styled(ReactLink)`
    color: ${(props) => props.theme.purple};
    text-decoration: none;
`;
