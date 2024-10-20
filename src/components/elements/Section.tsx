import { styled } from "styled-components";
import { slide } from "../../styles/animations";
import { useSection } from "../../context/SectionContext";
import { SectionNames, AnimationState } from "../../custom_types/customTypes";

interface SectionProps {
    $currentSectionName?: SectionNames;
    children: React.ReactNode;
    $ref?: HTMLDivElement;
    $animationState?: AnimationState;
}


const StyledSection = styled.section<SectionProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
    ${slide}



    ${(props) => props.$currentSectionName === "About" && `
        article img {
            margin: auto;
            width: 30%;
            margin-left: 2.5vw;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }
    `}

`

export const Section: React.FC<SectionProps> = ({ children, ...props }): React.ReactElement => {
    const { currentSectionName, sectionRef, animationState } = useSection()

    return (
        <StyledSection  {...props} $animationState={animationState} ref={sectionRef} $currentSectionName={currentSectionName} >
            {children}
        </StyledSection>
    )
}

