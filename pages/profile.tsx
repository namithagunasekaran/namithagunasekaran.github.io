import Head from "next/head";
import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import ProfileDescription from "../components/ProfileDescription";
import { mobile } from "../responsive/reponsive";
import GlobalStyles from "../styles/GlobalStyles";
import { fadein } from "./work/animation";

interface profileProps {}
const ProfileDescriptionContainer = styled.header`
    width: 96%;
    margin: 0px auto;
`;
const Container = styled.main`
    max-width: 1200px;
    margin: 0px auto;
`;
const NavbarContainer = styled.div`
    height: 100px;
    padding: 30px 0% 0px;
    margin: 0px auto;
    max-width: 1200px;
    width: 96%;
`;
const ResumeContainer = styled.section`
    width: 96%;
    margin: 0px auto;
    position: relative;
`;
const Resume = styled.img`
    position: absolute;
    width: 100%;
    padding-bottom: 30px;
`;
const CloseButton = styled.div`
    margin-left: auto;
    padding: 30px 0px;
    cursor: pointer;
    font-weight: 800;
    ${mobile({
        fontSize: "8px",
        padding: "30px 10px",
    })}
`;
const ProductView = styled.div`
    display: flex;
    align-items: center;
`;
const ModalComponents = styled.div`
    height: 100%;
    width: 1200px;
    display: flex;
    flex-direction: column;
`;
const ModalContainer = styled.div`
    // align-items: center;
    width: 100%;
    height: 650px;
    max-height: 700px;
    position: relative;
`;
const ModalImage = styled.img`
    height: 100%;
    animation: ${fadein} 1s ease running;
    width: 100%;
    position: absolute;
    object-fit: contain;
`;
const profile: React.FC<profileProps> = ({}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showModal, setShowModal] = useState(false);
    return (
        <Container>
            <GlobalStyles />
            <Head>
                <title>Namitha Gunasekaran Portfolio</title>
                <link rel="icon" href="/assets/logo/ng-logo.png" />
            </Head>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            <ProfileDescriptionContainer>
                <ProfileDescription />
            </ProfileDescriptionContainer>
            <ResumeContainer onClick={() => setShowModal(true)}>
                <Resume src="/assets/resume/ng-resume.png" />
            </ResumeContainer>
            <Modal
                open={showModal}
                // imgsrc={product && productDetails[product].images[index]}
                // next={() => go(1)}
                // prev={() => go(-1)}
                // // eslint-disable-next-line react/no-children-prop
                // children={undefined}
            >
                <ModalComponents>
                    <CloseButton onClick={() => setShowModal(false)}>
                        x
                    </CloseButton>
                    <ProductView>
                        <ModalContainer>
                            <ModalImage src={"/assets/resume/ng-resume.png"} />
                        </ModalContainer>
                    </ProductView>
                </ModalComponents>
            </Modal>
        </Container>
    );
};

export default profile;
