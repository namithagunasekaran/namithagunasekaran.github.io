import { keyframes } from "styled-components";

export const fadein = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

export const slideRight = keyframes`
    from{
      opacity : 0;
      transform : translate3d(-20rem,0,0);
    }
    to{
      opacity: 1;
      transform : translate3d(0,0,-10rem);
    }
   `;
