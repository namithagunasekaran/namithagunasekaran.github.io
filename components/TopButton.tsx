import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fadein } from "../pages/work/animation";

interface TopButtonProps {}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #f2f2f2;
    border-radius: 50%;
    animation: ${fadein} 0.3s ease;
    cursor: pointer;
`;

const UpArrow = styled.p``;

const TopButton: React.FC<TopButtonProps> = ({}) => {
    const [scrollDistance, setScrollDistance] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setScrollDistance(window.scrollY)
        );
        () => window.removeEventListener('scroll', () => {
            setScrollDistance(0);
        })
    }, []);
    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          setScrollDistance(0);
    }
    if (scrollDistance > 1300) {
        return (
            <Container onClick={scrollTo}>
                <UpArrow>🔝</UpArrow>
            </Container>
        );
    } else {
        return null;
    }
};

export default TopButton;
