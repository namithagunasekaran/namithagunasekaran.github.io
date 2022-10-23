import * as React from "react";
import styled from "styled-components";
import { fadein } from "../pages/work/animation";
import { mobile } from "../responsive/reponsive";

const Container = styled.section`
    width: 100%;
`;
const Title = styled.div`
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    margin-bottom: 15px;
    text-align: center;
    text-transform: none;
    animation: ${fadein} 2s ease;
    ${mobile({
        lineHeight: "20px",
        fontSize: "20px",
        fontWeight: 'bold'
    })};
`;
const Subtitle = styled.div`
    font-family: fbft;
    text-align: center;
    color: rgb(153, 153, 153);
    font-size: 20px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    animation: ${fadein} 2s ease;
    text-transform: none;
    ${mobile({
        lineHeight: "12px",
        fontSize: "12px",
    })};
`;

interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = ({}) => {
    return (
        <Container>
            <Title>Hi, I&apos;m Namitha Gunasekaran!</Title>
            <Subtitle>
                I do what I love and I absolutely love what I do!
            </Subtitle>
        </Container>
    );
};

export default Introduction;
