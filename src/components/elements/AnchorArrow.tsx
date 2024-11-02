import styled, { css } from "styled-components";
import { SectionComponent, navigationBase } from "../../custom_types/customTypes";
import { withNavigationTo } from "../HOCs/withNavigationTo";
import * as sections from "../sections"

interface AnchorProps extends navigationBase {
    $direction: "left" | "right";
    $currentSection?: React.ReactElement;
}

const StyledAnchor = styled.a<AnchorProps>`
    position: absolute;
    top: 50%;
    left: ${(props) => props.$direction === "left" ? "0.85%" : "95%"};
    font-family: 'Material Symbols Outlined';
    margin: 1vw;
    text-decoration: none;
    color: var(--main);
    font-size: 1.75rem;
    z-index: 1;
    pointer-events: all;
    transform: scale(200%);
    background-color: var(--background);
    border-radius: 100%;
    transition: color 0.25s ease-in-out, border-color 0.25s ease-in-out;
    cursor: pointer;
    user-select: none;

    &:hover {
    color: var(--secondary);
    text-shadow: 3px 7px 9px rgba(0, 0, 0, 1);
    border-color: var(--secondary);
    }

    visibility: ${css<AnchorProps>`
    ${(props) => props.$direction === "left" ?
            (props.$currentSection?.type as SectionComponent).index < 1 ?
                "hidden" :
                "visible"
            : (props.$currentSection?.type as SectionComponent).index >= Object.values(sections).length - 1 ?
                "hidden" :
                "visible"
        }`
    };
`
export const AnchorArrow = withNavigationTo<AnchorProps>(({ children, ...props }): React.ReactElement => {
    props.$direction === "left" ? children = "chevron_left" : children = "chevron_right"
    return (
        <StyledAnchor onClick={() => props.$goToSection ? props.$goToSection(props.$to) : null} className={'material-symbols-outlined'}  {...props}>
            {children}
        </StyledAnchor>
    )
})
