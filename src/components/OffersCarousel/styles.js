import styled from "styled-components";

export const Container = styled.div`
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left {
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right {
        top: 10px;
    }

    padding-left: 40px;
    padding-bottom: 40px;

    /* 🔥 FIX PARA MOBILE */
    @media (max-width: 480px) {

        padding-left: 10px;  /* menos padding para caber mais conteúdo */
        padding-right: 10px;

        .carousel-item {
            padding-right: 20px; /* reduz espaço entre itens */
        }

        .react-multiple-carousel__arrow--left {
            left: -5px;         /* puxa a seta pra fora do card */
            top: 40%;
            transform: translateY(-50%);
        }

        .react-multiple-carousel__arrow--right {
            right: -5px;        /* puxa a seta pra fora do card */
            top: 40%;
            transform: translateY(-50%);
        }
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.gren};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.gren};
        left: calc(50% - 28px);
    }

    /* título menor no mobile */
    @media (max-width: 480px) {
        font-size: 24px;
        margin: 40px 0;
    }
`;
