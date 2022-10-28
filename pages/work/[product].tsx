import Head from "next/head";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ImageTile from "../../components/ImageTile";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import { coverCardInfo, productDetails } from "../../data";
import { mobile } from "../../responsive/reponsive";
import GlobalStyle from "../../styles/GlobalStyles";
import Image from "next/image";
import { fadein } from "../../animation/animation";
const Container = styled.main`
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 96%;
`;
const NavbarContainer = styled.header`
    height: 100px;
    padding: 30px 0% 0px; 
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    width: 100%;
`;
const HeaderContainer = styled.div`
    max-width: 620px;
    width: 100%;
    padding: 60px 0px 60px 0px;
    margin: 0px auto;
    ${mobile({
        padding: "25px 0px 25px 0px",
    })}
`;
const Header = styled.div`
    color: rgb(25, 25, 25);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    padding-bottom: 20px;
    padding-top: 0px;
    text-align: center;
    text-transform: none;
    width: 100%;
    ${mobile({
        fontSize: "16px",
        lineHeight: "17px",
        paddingBottom: "13px",
    })}
`;
const ImageContainer = styled.section`
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
`;
const ProductImage = styled(Image)`
    width: 100%;
    object-fit: cover;
    cursor: zoom-in;
`;
const ImageTileContainer = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
`;
const Title = styled.div`
    padding-top: 60px;
    max-width: 100%;
    width: 100%;
    color: rgb(25, 25, 25);
    font-family: fbft;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 30px;
`;
const ModalContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 100%;
`;
const ModalImage = styled(Image)`
    height: 92%;
    animation: ${fadein} 1s ease running;
    width: 100%;
    object-fit: contain;
`;
const Arrow = styled.div`
    padding: 10px;
    background: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    border-radius: 50%;
    ${mobile({
        padding: "5px",
        fontSize: "5px",
    })}
    cursor: pointer;
`;
const CloseButton = styled.div`
    margin-left: auto;
    padding: 10px 0px;
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
    ${mobile({
        width: "100%",
        height: "100%",
    })}
`;
const ModalComponents = styled.div`
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
`;
interface WorkProps {}
type ObjectKey = keyof typeof productDetails;
const Work: React.FC<WorkProps> = ({}) => {
    const [moreProducts, setMoreProducts] = useState<typeof coverCardInfo>([]);
    const [showModal, setShowModal] = useState(false);
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const product = router.query.product as ObjectKey;

    const clickEvent = (idx: any) => {
        setShowModal(true);
        setIndex(idx);
        console.log(showModal, index);
    };
    const go = (iterator: number) => {
        setIndex(
            Math.max(
                0,
                (index + iterator) % productDetails[product].images.length
            )
        );
        console.log(index);
    };
    useEffect(() => {
        let index: number = 0;
        coverCardInfo.forEach((cci, idx) => {
            if (cci.name === product) {
                index = idx;
            }
        });
        let products = [];
        for (let i = 1; i <= 3; i++) {
            let realIndex = (index + i) % coverCardInfo.length;
            products.push(coverCardInfo[realIndex]);
            setMoreProducts(products);
        }
    }, [product]);
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
            <HeaderContainer>
                <Header>{product && productDetails[product].title}</Header>
            </HeaderContainer>
            {product &&
                productDetails[product].images.map((img, idx) => {
                    return (
                        <ImageContainer
                            key={idx}
                            onClick={() => clickEvent(idx)}
                        >
                            <ProductImage src={img} alt="product" />
                        </ImageContainer>
                    );
                })}
            <Title>You may also like</Title>
            <ImageTileContainer>
                {product &&
                    moreProducts.length >= 3 &&
                    moreProducts.map((productDetail) => {
                        return (
                            <ImageTile
                                key={productDetail.id}
                                name={productDetail.name}
                                title={productDetail.title}
                                imgSrc={productDetail.image}
                            />
                        );
                    })}
            </ImageTileContainer>
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
                        X
                    </CloseButton>
                    <ProductView>
                        <Arrow onClick={() => go(-1)}>←</Arrow>
                        <ModalContainer>
                            <ModalImage
                                alt="img"
                                src={
                                    product &&
                                    productDetails[product].images[index]
                                }
                                key={index}
                            />
                        </ModalContainer>
                        <Arrow onClick={() => go(1)}>→</Arrow>
                    </ProductView>
                </ModalComponents>
            </Modal>
        </Container>
    );
};

export default Work;
