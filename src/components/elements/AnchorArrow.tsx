import styled from "styled-components";
import { useSection } from "../../context/SectionContext";
import { ElementBase } from "../../custom_types/customTypes";

interface AnchorProps extends ElementBase {
    to: React.ReactElement;
}

const StyledAnchor = styled.a<AnchorProps>`
    font-family: Anton, Kalam, "Shadows Into Light";
    margin: 1vw;
    text-decoration: none;
    cursor: pointer;
    color: var(--main);
    transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
    font-size: 1.75rem;
    z-index: 1;
    pointer-events: all;

    ${(props) =>
        (props.type === 'button-left' || props.type === 'button-right')
            ? `
            font-family: 'Material Symbols Outlined';
            color: inherit;
            text-decoration: none;
            transform: scale(200%);
            background-color: var(--background);
            border-radius: 100%;
            margin: 2vw;
            cursor: pointer;
        `
            : `
            border-bottom: 6px solid var(--main);
        `}

    &:hover {
    color: var(--secondary);
    text-shadow: 3px 7px 9px rgba(0, 0, 0, 1);
    border-color: var(--secondary);

    }
`
export const AnchorArrow: React.FC<AnchorProps> = ({ children, ...props }) => {
    const { goToSection } = useSection()


    return (
        <StyledAnchor onClick={() => goToSection(props.to)} className={'material-symbols-outlined'}  {...props}>
            {children}
        </StyledAnchor>
    )
}
