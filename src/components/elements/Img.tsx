import styled from "styled-components";
import { ElementBase } from "../../custom_types/customTypes";

interface ImgProps extends ElementBase {
    src: string;
    alt?: string;
    header?: boolean;
}

const StyledImg = styled.img<ImgProps>`
    ${(props) => props.header && `
        width: 250px;
        height: auto;
        cursor: inherit;
        border: 0.5px solid #00000000;
        background-color: rgba(18, 18, 18, 0.489);
        box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
        border-radius: 5%;
        padding: 15px;
        transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
        &:hover {
            border-color: var(--secondary);
            background-color: var(--background);
        }
    `}

`

export const Img: React.FC<ImgProps> = ({ children, ...props }) => {
    return (
        <StyledImg {...props}>
        </StyledImg>
    )
}