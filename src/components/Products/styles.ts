import { Container } from "@/styles/utils";
import styled from "styled-components";


export const ProductContainer = styled.section`
    ${Container}
`;

export const Title = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    margin-top: 3.125rem;
    margin-bottom: 2.8rem;
    
    span {
        text-decoration: underline ${({ theme }) => theme.colors.primary}
    }
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.875rem;
    margin-bottom: 11.25rem;
    
    a {
        color: #000;
        text-decoration: none;
    }
`;

export const ProductItem = styled.div`
    height: 23.125rem;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    box-shadow: 5px 0px 10px #d9d9d9;
    padding: 1rem;

    &:hover {
        box-shadow: 5px 10px 10px #d9d9d9;
        p {
            color: ${({theme}) => theme.colors.primary};
        }
    }
`;

export const ProductName = styled.p`
    font-size: 0.875rem;
`;

export const ProductPrice = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
`;

export const ProductSplitPrice = styled.small`
    font-size: 0.75rem;
    font-weight: 700;
    color: #999;
`;
