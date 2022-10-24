import * as React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css, keyframes } from "styled-components";

interface ModalProps {
    children: any;
    open: boolean;
    // imgsrc: string;
    // next: any;
    // prev: any;
}

const ModalWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    inset: 0;
    display: flex;
    margin: 0 auto;
    background: white;
    justify-content: center;
    align-items: center;
`;
const CloseButton = styled.div``;

const Modal: React.FC<ModalProps> = ({
    children,
    open,
    // imgsrc,
    // next,
    // prev,
}) => {
    // const handleLeft = () => {
    //     prev();
    // };
    // const handleRight = () => {
    //     next();
    // };
    // useEffect(() => {
    //     setImage(imgsrc);
    // }, [image, imgsrc]);
    return open
        ? createPortal(
              <ModalWrapper>
                  {children}
                  {/* <Arrow onClick={handleLeft}>←</Arrow>
                    {image && (
                        <ModalContainer>
                            <Image src={image} />
                        </ModalContainer>
                    )}
                    <Arrow onClick={handleRight}>→</Arrow> */}
              </ModalWrapper>,
              document.querySelector("#portal") as Element
          )
        : null;
};

export default Modal;
