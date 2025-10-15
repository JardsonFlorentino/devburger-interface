import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`   
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;    
`;

export const Filter = styled.div`
    display: flex;    
    justify-content: center;
    margin: 28px 0;
    gap: 50px;

`;

export const FilterOptions = styled.button`
    cursor: pointer;
    border: none;
    background: none;
    color: ${(props) => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
    border-bottom: ${(props) => props.$isActiveStatus ? `2px solid ${props.theme.purple}` : 'none' };
    padding-bottom: 5px;
    line-height: 20px;
    font-size: 18px;
    
`;