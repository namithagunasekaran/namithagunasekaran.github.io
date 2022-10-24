import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import { mobile } from "../responsive/reponsive";

const ImageOverlay = styled.div`
    background: black;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;
    opacity: 0;
`;

const DetailsContainer = styled.div`
    max-width: 100%;
    height: 100%;
    background: rgb(242, 242, 242);
    padding: 11% 8%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
const DetailTitle = styled.div`
    color: rgb(25, 25, 25);
    float: none;
    font-family: fbft;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin: auto;
    padding: 0px 0% 3px;
    text-align: center;
    text-transform: none;
    width: 100%;
    ${mobile({
        fontSize: '12px',
    })}
`;

const Container = styled.div`
    display: flex;
    max-width: calc(33.3333% - 13px);
    flex-direction: column;
    cursor: pointer;
    &:hover ${DetailsContainer} {
        background: black;
        opacity: 0.9;
        transition: background 0.2s ease;
    }
    &:hover ${DetailTitle} {
        color: white;
        transition: color 0.2s ease;
    }

    &:hover ${ImageOverlay} {
        opacity: 0.6;
        transition: opacity 0.2s ease;
    }
`;
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0px;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

interface ImageTileProps {
    title: string;
    name: string;
    imgSrc: string;
}

const ImageTile: React.FC<ImageTileProps> = ({ title, imgSrc, name }) => {
    return (
        <Link href={`/work/${name}`}>
            <Container>
                <ImageContainer>
                    <ImageOverlay></ImageOverlay>
                    <Image src={imgSrc} />
                </ImageContainer>
                <DetailsContainer>
                    <DetailTitle>{title}</DetailTitle>
                </DetailsContainer>
            </Container>
        </Link>
    );
};

export default ImageTile;
