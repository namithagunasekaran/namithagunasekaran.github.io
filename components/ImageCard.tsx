import * as React from "react";
import styled from "styled-components";
import { slideRight } from "../animation/animation";
import { mobile } from "../responsive/reponsive";

type ContainerType = {
    direction: string;
};

const ImageContainer = styled.div`
    width: 65%;
    position: relative;
    ${mobile({
        width: "100%",
    })}
`;
const ImageOverlay = styled.section`
    background: black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0;
`;
const CoverTitleContainer = styled.div`
    width: 35%;
    padding-bottom: 6%;
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 6%;
    // background: #f2f2f2;
    ${mobile({
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
    })}
`;
const Container = styled.section<ContainerType>`
    animation: ${slideRight} 1s ease;
    display: flex;
    height: 430px;
    flex-direction: ${(props) =>
        props.direction === "left" ? "row" : "row-reverse"};
    background: #f2f2f2;
    &:hover {
        background: black;
        opacity: 0.8;
        color: white;
        transition: background 0.2s ease, color 0.2s ease;
    }
    &:hover ${ImageOverlay} {
        opacity: 0.6;
        transition: opacity 0.2s ease;
    }
    ${mobile({
        flexDirection: "column",
        height: "90%",
    })};
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CoverTitle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${mobile({
        textAlign: "center",
        fontSize: "12px",
        fontWeight: "bold",
        width : '100%'
    })}
`;

interface ImageCardProps {
    direction: string;
    title: string;
    imgsrc: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ direction, title, imgsrc }) => {
    return (
        <Container direction={direction}>
            <ImageContainer>
                <ImageOverlay></ImageOverlay>
                <Image src={imgsrc} alt={title}></Image>
            </ImageContainer>
            <CoverTitleContainer>
                <CoverTitle>{title}</CoverTitle>
            </CoverTitleContainer>
        </Container>
    );
};

export default ImageCard;
