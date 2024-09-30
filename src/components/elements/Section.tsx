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



    article {
        margin-top: 15vh;
    }


    ${(props) => props.$currentSectionName === "About" && `
        article {
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 1.25rem;
        }

        article img {
            margin: auto;
            width: 30%;
            margin-left: 2.5vw;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }

        article p {
            background-color: var(--background);
            font-weight: light;
            position: relative;
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-right: 2.5vw;
            padding: 10px;
        }

        article span {
            font-size: 3rem;
            font-weight: bolder;
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

