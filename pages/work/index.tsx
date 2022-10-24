import Head from "next/head";
import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import ImageCard from "../../components/ImageCard";
import Introduction from "../../components/Introduction";
import Navbar from "../../components/Navbar";
import TopButton from "../../components/TopButton";
import { coverCardInfo } from "../../data";
import { mobile } from "../../responsive/reponsive";
import GlobalStyle from "../../styles/GlobalStyles";
const Container = styled.main`
    ${mobile({
        margin: "0px",
        padding: "0px 20px",
        width: "100%",
    })}
`;

const NavbarContainer = styled.section`
    height: 100px;
    padding: 30px 0% 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
`;
const IntroductionContainer = styled.section`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
    padding: 110px 0px 100px 0px;
    ${mobile({
        padding: "38px 0px 34px 0px",
    })}
`;

const ImageCardContainer = styled.div`
    max-width: 1200px;
    height: 430px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    margin-bottom: 45px;
    cursor: pointer;
    ${mobile({
        width: "100%",
        marginBottom: "0",
    })}
`;
const TopButtonContainer = styled.div`
    display: block;
    position: fixed;
    bottom: 40px;
    height: 60px;
    width: 60px;
    right: 40px;
`;

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
    return (
        <Container>
            <GlobalStyle />
            <Head>
                <title>Namitha Gunasekaran Portfolio</title>
                <link rel="icon" href="/assets/logo/ng-logo.png" />
            </Head>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            <IntroductionContainer>
                <Introduction />
            </IntroductionContainer>
            {coverCardInfo.map((cci, idx) => {
                if (idx % 2 === 0) {
                    return (
                        <Link href={`/work/${cci.name}`} key={cci.id}>
                            <ImageCardContainer className="image-container">
                                <ImageCard
                                    direction="left"
                                    title={cci.title}
                                    imgsrc={cci.image}
                                />
                            </ImageCardContainer>
                        </Link>
                    );
                } else {
                    return (
                        <Link href={`/work/${cci.name}`} key={cci.id}>
                            <ImageCardContainer key={cci.id}>
                                <ImageCard
                                    direction="right"
                                    title={cci.title}
                                    imgsrc={cci.image}
                                />
                            </ImageCardContainer>
                        </Link>
                    );
                }
            })}
            <TopButtonContainer>
                <TopButton />
            </TopButtonContainer>
        </Container>
    );
};

export default index;
