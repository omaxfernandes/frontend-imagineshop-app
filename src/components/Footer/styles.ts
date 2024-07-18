import { Container } from "@/styles/utils";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledFooter = styled.footer`
    height: 12.5rem;
    background-color: #f4f4f4;
`;

export const FooterContainer = styled.div`
    ${Container};
    display: grid;
    grid-template-columns: 8.125rem auto 8.125rem;
    padding: 2.5rem 0 0 0;
`

export const Contact = styled.p`
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.secondary};
    margin: 0;
    text-align: center;
    margin-top: 8.125rem;
`

export const SocialNetworksList = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
`

export const SocialNetworkIcon = styled(FontAwesomeIcon)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: 1.875rem;
    cursor: pointer;
`