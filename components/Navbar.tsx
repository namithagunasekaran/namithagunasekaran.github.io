import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { fadein } from "../animation/animation";
import GlobalStyle from "../styles/GlobalStyles";
import Modal from "./Modal";

type NavbarType = {
    pathname: string;
};

const Container = styled.header`
    height: 100%;
    border-bottom: 6px solid rgb(242, 242, 242);
    display: flex;
    align-items: center;
`;

const Nav = styled.nav`
    max-width: 100%;
    margin: 0px auto;
`;

const NavItem = styled.a<NavbarType>`
    padding: 10px 30px 10px 0px;
    color: ${(props) =>
        props.href === props.pathname ? "black" : "rgb(153, 153, 153)"};
    font-size: 17px;
    font-style: normal;
    font-weight: ${(props) => (props.href === props.pathname ? "500" : "300")};
    line-height: 30px;
    text-decoration: none;
`;

const Hamburger = styled.div`
    width: 30px;
    font-size: 30px;
    margin-left: auto;
    // border: 1px solid black;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ModalContainer = styled.div`
    display: flex;
    animation: ${fadein} 0.5s ease;
`;
const NavList = styled.div`
    display: flex;
    flex-direction: column;
`;
const NavListItem = styled.a<NavbarType>`
    margin: 20px 0px;
    text-align: center;
    padding: 10px 30px 10px 0px;
    color: ${(props) =>
        props.href === props.pathname ? "black" : "rgb(153, 153, 153)"};
    font-size: 17px;
    font-style: normal;
    font-weight: ${(props) => (props.href === props.pathname ? "500" : "300")};
    line-height: 30px;
    text-decoration: none;
`;
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const updateMedia = () => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 650);
        } else {
            return;
        }
    };
    useEffect(() => {
        updateMedia();
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    const router = useRouter();
    return (
        <Container>
            {isMobile === false ? (
                <Nav>
                    <Link href="/" passHref>
                        <NavItem pathname={router.pathname}>Home</NavItem>
                    </Link>
                    <Link href="/profile" passHref>
                        <NavItem pathname={router.pathname}>Profile</NavItem>
                    </Link>
                    <Link href="/work" passHref>
                        <NavItem pathname={router.pathname}>Work</NavItem>
                    </Link>
                    <Link href="/contact" passHref>
                        <NavItem pathname={router.pathname}>Contact</NavItem>
                    </Link>
                </Nav>
            ) : (
                <>
                    <Hamburger onClick={() => setOpenModal(true)}>
                        &#9776;
                    </Hamburger>
                    <Modal open={openModal}>
                        <ModalContainer>
                            <NavList>
                                <Link href="/" passHref>
                                    <NavListItem pathname={router.pathname}>Home</NavListItem>
                                </Link>
                                <Link href="/profile" passHref>
                                    <NavListItem pathname={router.pathname}>Profile</NavListItem>
                                </Link>
                                <Link href="/work" passHref>
                                    <NavListItem pathname={router.pathname}>Work</NavListItem>
                                </Link>
                                <Link href="/contact" passHref>
                                    <NavListItem pathname={router.pathname}>Contact</NavListItem>
                                </Link>
                            </NavList>
                        </ModalContainer>
                    </Modal>
                </>
            )}
            <GlobalStyle />
        </Container>
    );
};

export default Navbar;
