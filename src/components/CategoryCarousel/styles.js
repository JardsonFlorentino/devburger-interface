import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding-left: 30px;

  .carousel-item {
    padding-right: 40px;
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

  @media (max-width: 480px) {
    .react-multiple-carousel__arrow {
      width: 22px;
      height: 22px;
      min-width: 22px;
    }

    padding-left: 15px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.purple};
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.purple};
    left: calc(50% - 28px);
  }

  @media (max-width: 480px) {
    font-size: 26px;
    margin-bottom: 30px;

    &::after {
      width: 40px;
      left: calc(50% - 20px);
    }
  }
`;

export const ContainerItems = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "imageUrl",
})`
  background-image: url(${(props) => props.imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 220px;

  @media (max-width: 480px) {
    height: 160px;
    border-radius: 16px;
  }
`;

export const CategoryButton = styled.button`
  color: ${(props) => props.theme.white};
  background-color: rgba(0, 0, 0, 0.5);

  padding: 8px 20px;
  border-radius: 24px;

  font-size: 18px;
  font-weight: 500;
  border: none;
  cursor: pointer;

  transition: all 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }

  @media (max-width: 480px) {
    padding: 6px 18px;
    font-size: 16px;
    margin-top: 20px;
  }
`;
