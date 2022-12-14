import { css } from "styled-components";

export const mobile = (props: any) => {
    return css`
        @media only screen and (max-width: 600px) {
            ${props}
        }
    `;
};
export const tablet = (props: any) => {
    return css`
        @media only screen and (min-width: 600px) and (max-width: 1024px) {
            ${props}
        }
    `;
};
