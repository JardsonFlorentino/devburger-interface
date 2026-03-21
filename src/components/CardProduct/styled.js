import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: ${(props) => props.theme.spacing?.md || 16}px;
    padding: ${(props) => props.theme.spacing?.md || 16}px;
    border-radius: ${(props) => props.theme.radius?.lg || 20}px;
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(15,15,15,0.08);
    position: relative;
    transition: transform 200ms ease, box-shadow 200ms ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 30px rgba(15,15,15,0.12);
    }

    > div.details {
        display: flex;
        flex-direction: column;
        gap: ${(props) => props.theme.spacing?.sm || 8}px;
        padding-top: ${(props) => props.theme.spacing?.md || 16}px;
    }

    p {
        font-size: 16px;
        color: ${(props) => props.theme.orange};
        line-height: 1.1;
        font-weight: 700;
        margin: 0;
    }

    strong {
        font-size: 18px;
        color: ${(props) => props.theme.black};
        font-weight: 800;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: ${(props) => props.theme.radius?.md || 12}px;
`