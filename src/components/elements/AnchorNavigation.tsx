import styled from "styled-components";
import { navigationBase } from "../../custom_types/customTypes";
import { withNavigationTo } from "../HOCs/withNavigationTo";
import React from "react";

interface AnchorProps extends navigationBase { }

const StyledAnchor = styled.a<AnchorProps>`
    font-family: Anton, Kalam, "Shadows Into Light";
    margin: 1vw;
    width: min-content;
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
// Remove the border-bottom if the content inside <AnchorNavigation> is a React element, to remove the underline.
    ${(props) => React.isValidElement(props.children) && `
    border-bottom: 0;
    `
    }
`
export const AnchorNavigation = withNavigationTo<AnchorProps>(({ children, ...props }): React.ReactElement => {

    return (
        <StyledAnchor onClick={() => props.$goToSection ? props.$goToSection(props.$to) : null} {...props}>
            {children}
        </StyledAnchor>
    )
})
