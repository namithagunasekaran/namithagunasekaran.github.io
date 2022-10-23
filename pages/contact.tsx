import * as React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SocialMediaContactCard from "../components/SocialMediaContactCard";
import { contacts } from "../data";
interface contactProps {}

const Container = styled.main``;

const NavbarContainer = styled.section`
    height: 100px;
    padding: 30px 0% 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
`;

const ContactFormContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const ContactTitleContainer = styled.div`
    max-width: 620px;
    width: 100%;
    margin: 0px auto;
    padding: 60px 0px;
`;

const ContactTitle = styled.h1`
    text-align: center;
    padding-bottom: 20px;
    font-size: 25px;
    line-height: 27px;
`;
const contact: React.FC<contactProps> = ({}) => {
    return (
        <Container>
            <NavbarContainer>
                <Navbar />
            </NavbarContainer>
            <ContactTitleContainer>
                <ContactTitle>Contact</ContactTitle>
            </ContactTitleContainer>
            <ContactFormContainer>
                {contacts.map((contact) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <SocialMediaContactCard
                            username={contact.username}
                            image={contact.image}
                            profileImage={contact.profile_image}
                            link={contact.link}
                        />
                    );
                })}
            </ContactFormContainer>
        </Container>
    );
};

export default contact;
