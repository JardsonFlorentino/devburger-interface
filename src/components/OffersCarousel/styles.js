import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;

  padding-left: 40px;
  padding-bottom: 40px;

  .carousel-item {
    padding-right: 40px;
  }

  .react-multi-carousel-list {
    overflow: visible;
  }

  /* Ajuste das setas */
  .react-multiple-carousel__arrow {
    width: 28px;
    height: 28px;
    min-width: 28px;
  }

  .react-multiple-carousel__arrow--left {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .react-multiple-carousel__arrow--right {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  /* MOBILE */
  @media (max-width: 480px) {
    padding-left: 15px;
    padding-bottom: 30px;

    .carousel-item {
      padding-right: 20px;
    }

    .react-multiple-carousel__arrow {
      width: 22px;
      height: 22px;
      min-width: 22px;
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
  margin: 60px 0 40px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin: 40px 0 25px 0;

    &::after {
      width: 40px;
      left: calc(50% - 20px);
    }
  }
`;
