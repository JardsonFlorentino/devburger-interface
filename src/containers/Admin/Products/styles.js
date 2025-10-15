import styled from "styled-components";

export const Container = styled.div`
    
`;

export const ProductImage = styled.img`
    height: 90px;
    padding: 12px;
    border-radius: 16px;

`;

export const EditButton = styled.button`
    background-color: ${props => props.theme.darkWhite};
    border: 0;
    border-radius: 8px;
    height: 40px;
    width: 40px; 
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
       height: 20px;
       width: 20px;
    }

    &:hover {
        background-color: ${props => props.theme.purple};

        
    svg {
        fill: ${props => props.theme.white};
    }
    
    }

`;
