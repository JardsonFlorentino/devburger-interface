import styled from "styled-components";
import Texture from "../../assets/texture.svg";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.8), 
    rgba(255,255,255,0.8)
  ),
  url('${Background}');
  box-sizing: border-box;
  overflow-x: hidden; 
`;

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
  border-radius: 16px 16px 0 0;
  margin-bottom: 6px;

  img {
    width: 140px;
  }

  @media (max-width: 1024px) {
    height: 130px;
    img {
      width: 110px;
    }
    border-radius: 10px 10px 0 0;
  }

  @media (max-width: 768px) {
    height: 100px;
    margin-bottom: 2px;
    img {
      width: 80px;
    }
  }
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: ${(props) => props.theme.gren};
  text-align: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 8px;

  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    content: '';
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
  }

  @media (max-width: 1024px) {
    font-size: 26px;
    margin-top: 18px;
    padding-bottom: 6px;

    &::after {
      width: 38px;
      height: 3px;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 4px;
    padding-bottom: 2px;

    &::after {
      width: 22px;
      height: 2px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 40px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 24px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 12px 8px;  
    gap: 16px;
    box-sizing: border-box;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  box-sizing: border-box;

  table {
    min-width: 600px;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }

  @media (max-width: 600px) {
    table {
      min-width: 420px;
    }
  }
`;
