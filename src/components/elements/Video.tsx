import styled from "styled-components";

type VideoType =
    | "video/mp4"
    | "video/webm"
    | "video/ogg"
    | "video/mpeg"
    | "video/quicktime"
    | "video/x-msvideo"
    | "video/3gpp"
    | "video/x-matroska";

interface VideoProps {
    $background?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    src: string;
    type: VideoType;

}

const StyledVideo = styled.video<VideoProps>`

    ${(props) => props.$background && `
        position: absolute;
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        z-index: -2;
    `}

`

export const Video: React.FC<VideoProps> = (props) => {
    return (
        <StyledVideo {...props}>
            <source src={props.src} type={props.type} />
        </StyledVideo>
    )
}