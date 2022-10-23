import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive/reponsive";
import GlobalStyles from "../styles/GlobalStyles";

const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height:100vh;
    width:100%:
    max-width: 2000px;
    flex-direction: column;
`;
const Logo = styled.img`
    width: 50%;
    ${mobile({
        margin: "auto 0px 140px",
        width: "70%",
    })}
`;
const SeeMore = styled.a`
    text-decoration: none;
    &:visited {
        color :unset;
    }
`;
const SeeMoreContainer = styled.div`
    border-radius: 18px;
    color: #999999;
    font-size: 14px;
    line-height: 60px;
    text-transform: uppercase;
    background-color: rgba(227, 227, 227, 0.25);
    border: none;
    padding: 0px 20px;
    &:hover {
        background-color: rgba(157, 157, 157, 0.63);
        color: white;
        transition: background-color 0.2s ease, color 0.2s ease;
    }
    ${mobile({
        marginBottom: "150px",
    })}
`;
interface homeProps {}

const home: React.FC<homeProps> = ({}) => {
    return (
        <Container>
            <GlobalStyles />
            <Logo src="/assets/logo/ng-logo.png" />
            <SeeMoreContainer>
                <SeeMore href="/work">To know and see more!</SeeMore>
            </SeeMoreContainer>
        </Container>
    );
};

export default home;
``;
