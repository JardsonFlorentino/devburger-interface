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

export const HamburgerButton = stelyd.button`
    display: none;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.white};
    padding: 8px;

    @media (max-width: 768px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`

export const MenuOverlay = stelyd.div`
    display: ${(props) => props.open ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 999;
`

export const MobileMenu = stelyd.aside`
    position: fixed;
    top: 72px;
    right: 0;
    width: 280px;
    height: calc(100% - 72px);
    background: ${(props) => props.theme.mainBlack};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 200ms ease-in-out;
    z-index: 1000;

    a {
        color: ${(props) => props.theme.white};
        text-decoration: none;
        font-size: 16px;
    }

    hr {
        border: 1px solid ${(props) => props.theme.darkGray};
        width: 100%;
    }

    @media (min-width: 769px) {
        display: none;
    }
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