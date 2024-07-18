import styled from "styled-components";
import { Container } from "@/styles/utils";

export const BannerContainer = styled.section`
  ${Container};
  border-top: 3px solid ${({theme}) => theme.colors.primary};
  border-bottom: 3px solid ${({theme}) => theme.colors.primary};
  padding-top: 4px;
`