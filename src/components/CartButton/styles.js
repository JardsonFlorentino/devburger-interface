import styled, { css } from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    width: 100%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color: ${(props) => props.theme.white};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover {
        background-color: ${(props) => props.theme.secondDarkPurple};
    }

    /* floating variant for mobile */
    ${(props) => props.floating && css`
        position: fixed;
        right: 16px;
        bottom: 20px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        z-index: 1200;
        padding: 0;

        @media (min-width: 769px) {
            display: none;
        }
    `}

`

export const Badge = styled.span`
    position: absolute;
    top: -6px;
    right: -6px;
    background: ${(props) => props.theme.red};
    color: #fff;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    transform-origin: center;
    animation: pop 240ms cubic-bezier(.2,.9,.3,1) both;

    @keyframes pop {
        0% { transform: scale(0.85); opacity: 0.75; }
        50% { transform: scale(1.08); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`