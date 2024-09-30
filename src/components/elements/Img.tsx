import styled from "styled-components";

interface ImgProps {
    $gridarea?: string;
    width?: string;
    marginTop?: string;
    marginleft?: string;
    aspectRatio?: string;
    onClick?: () => void;
    cursor?: string;
    alt?: string;
    $hover?: boolean;
    src: string;
}

const StyledImg = styled.img<ImgProps>`
    grid-area: ${(props) => props.$gridarea || `none`};
    width: ${(props) => props.width || `45%`};
    aspect-ratio: ${(props) => props.aspectRatio || `4 / 1`};
    margin-top: ${(props) => props.marginTop || `2vh`};
    margin-left: ${(props) => props.marginleft || `2.25vw`};
    cursor: ${(props) => props.cursor || `default`};
    background-color: rgba(18, 18, 18, 0.489);
    box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.75);
    border-radius: 5%;
    padding: 15px;
    transition: background-color 0.25s ease-in-out;



    ${(props) => props.$hover && `
        &:hover {
        box-shadow: 0px 0px 6px -1px var(--background-secondary);
        -webkit-box-shadow: 0px 0px 6px -1px var(--background-secondary);
        -moz-box-shadow: 0px 0px 6px -1px var(--background-secondary);
        filter: saturate(200%);
        }
    `}
`

export const Img: React.FC<ImgProps> = ({ ...props }) => {
    return (
        <StyledImg {...props}></StyledImg>
    )
}