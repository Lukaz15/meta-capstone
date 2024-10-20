import styled from "styled-components";
import { ElementBase } from "../../custom_types/customTypes";

interface ImgProps extends ElementBase {
    src: string;
    alt?: string;
}

const StyledImg = styled.img<ImgProps>`
    grid-area: "1 / 1 / 2 / 2";
    width:  45%;
    aspect-ratio: 4 / 1;
    margin-top: 2vh;
    margin-left: 2.25vw;
    cursor: default;
    background-color: rgba(18, 18, 18, 0.489);
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    border-radius: 5%;
    padding: 15px;
    transition: background-color 0.25s ease-in-out;

`

export const Img: React.FC<ImgProps> = ({ children, ...props }) => {
    return (
        <StyledImg {...props}>
        </StyledImg>
    )
}