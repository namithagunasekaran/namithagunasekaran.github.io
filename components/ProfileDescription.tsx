import * as React from "react";
import styled from "styled-components";
import { fadein } from "../animation/animation";
import { mobile } from "../responsive/reponsive";

interface ProfileDescriptionProps {}

const Container = styled.section`
    margin: 0 auto;
    max-width: 850px;
    width: 100%;
    padding: 100px 0px;
    ${
        mobile({
            padding: '60px 0px'
        })
    }
`;

const Head = styled.h1`
    text-align: center;
    padding-bottom: 20px;
    font-family: sans-serif;
    ${
        mobile({
            fontSize: '20px'
        })
    }
`;

const Description = styled.p`
    color: rgb(153, 153, 153);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
    animation: ${fadein} 0.5s ease;
    width: 100%;
    ${mobile({
        fontSize: '14px'
    })}
`;

const ProfileDescription: React.FC<ProfileDescriptionProps> = ({}) => {
    return (
        <Container>
            <Head>Profile</Head>
            <Description>
                A confident and competent furniture designer with 5+ years of
                in-hand and on-site experience, strong educational background,
                and industrial expertise. A detail-oriented and technical
                approach to solving problems resulting in maximum customer
                satisfaction. Have extensive experience in working on a mixture
                of projects dealing with different clientele.
            </Description>
        </Container>
    );
};

export default ProfileDescription;
