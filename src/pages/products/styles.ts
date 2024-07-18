import { Container } from "@/styles/utils";
import styled from "styled-components";

export const ProductContainer = styled.main`
    ${Container}
`

export const ProductDetail = styled.div`
    display: grid;
    grid-template-columns: 31.25rem auto;
    gap: 1rem;
    margin: 3.125rem 0;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;
    border-radius: 4px;
`

export const ProductName = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0;
`;

export const ProductPrice = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-size: 2.125rem;
    font-weight: 700;
    margin: 0;
    margin-top: 2.8125rem;
`;

export const ProductSplitPrice = styled.small`
    font-size: 0.875rem;
    color: #999;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border: unset;
    border-radius: 4px;
    width: 290px;
    height: 60px;
    background-color: ${({theme}) => theme.colors.primary};
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    margin: 2.25rem 0;  
`;

export const ProductDescription = styled.small`
    font-size: 0.875rem;
`

export const SummaryTitle = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    margin: 0;
    margin-top: 2.8rem;
    margin-bottom: 2.8rem;
    span {
        text-decoration: underline ${({theme}) => theme.colors.primary};
    }
`

export const Summary = styled.div`
    min-height: 80px;
`