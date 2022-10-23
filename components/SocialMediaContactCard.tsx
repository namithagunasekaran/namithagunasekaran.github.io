import styled from "styled-components";
import { mobile } from "../responsive/reponsive";

interface SocialMediaContactCardProps {
    username: string;
    image: string;
    profileImage: string;
    link: string;
}

const UserName = styled.div`
    opacity: 0;
    transition: opacity 0.5s;
    position: absolute;
    color: black;
`;
const ImageContainer = styled.div`
    height: 32px;
    width: 32px;
    position: relative;
    border-radius: 5px;
    // margin-left : 10px;
    transition: margin-left 1s;
`;
const ImageIcon = styled.img`
    position: absolute;
    object-fit: contain;
    height: 100%;
    width: 100%;
    opacity: 0.6;
    transition: opacity 1s;
`;
const ProfileImage = styled.img`
    position: absolute;
    object-fit: contain;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: opacity 1s;
    // border-radius: 50%;
`;
const Container = styled.div`
    width: 32px;
    height: 32px;
    margin: 50px 0px;
    transition: width 0.7s, height 0.7s;
    &:hover {
        // box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
        //     rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
        //     rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
        //     rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
        //     rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
        //     rgba(0, 0, 0, 0.09) 0px 32px 16px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
        width: 250px;
        height: 50px;
        background: white;
    }
    &:hover ${ImageContainer} {
        margin-left: 10px;
    }
    &:hover ${ImageIcon} {
        opacity: 0;
    }
    &:hover ${ProfileImage} {
        opacity: 1;
    }
    &:hover ${UserName} {
        opacity: 1;
        position: unset;
    }
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
const ImageLink = styled.a`
    text-decoration: none;
`;
const SocialMediaContactCard: React.FC<SocialMediaContactCardProps> = ({
    username,
    image,
    profileImage,
    link,
}) => {
    return (
        <ImageLink href={link}>
            <Container>
                <ImageContainer>
                    <ImageIcon src={image} />
                    <ProfileImage src={profileImage} />
                </ImageContainer>

                <UserName>{username}</UserName>
            </Container>
        </ImageLink>
    );
};

export default SocialMediaContactCard;
