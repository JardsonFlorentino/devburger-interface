import stelyd from "styled-components";
import { Link } from "react-router-dom";


export const Container = stelyd.div`
    background-color: ${(props) => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
`
export const Content = stelyd.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

export const Navigation = stelyd.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        hr {
        height: 24px;
        border: 2px solid ${(props) => props.theme.darkGray}
        }
    }

   
`

export const HeaderLink = stelyd(Link)`
    color: ${(props) => props.$isActive ? props.theme.purple : props.theme.white};
    border-bottom: ${(props) => props.$isActive ? `2px solid ${props.theme.purple}` : 'none'};
    padding-bottom: 3px;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;

    &:hover {
        color: ${(props) => props.theme.purple};
    }

`

export const Options = stelyd.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;

`

export const Profile = stelyd.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p {
        color: ${(props) => props.theme.white};
        line-height: 90%;
        font-weight: 300;
    }

    span {
        color: ${(props) => props.theme.purple};
        font-weight: 700;
    }

`

export const LinkContainer = stelyd.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Logout = stelyd.button`
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.red};
    text-decoration: none;
    font-weight: 700;
    


`