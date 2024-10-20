import styled from "styled-components";
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
    border-bottom: 6px solid var(--main);
    &:hover {
    color: var(--secondary);
    text-shadow: 3px 7px 9px rgba(0, 0, 0, 1);
    border-color: var(--secondary);

    }
`
export const Anchor: React.FC<AnchorProps> = ({ children, ...props }) => {
    return (
        <StyledAnchor {...props}>
            {children}
        </StyledAnchor>
    )
}
