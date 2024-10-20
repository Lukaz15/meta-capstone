import { styled, css } from "styled-components"
import { ElementBase } from "../../custom_types/customTypes";
import { withCurrentSectionName } from "../HOCs/withCurrentSectionName";
import { stylesPerSection } from "../../utils/stylesPerSection";

interface ParagraphProps extends ElementBase { }

const StyledParagraph = styled.p<ParagraphProps>`
    ${stylesPerSection({
    "Home": css`
        width: 60%;
        font-size: 2rem;
        margin-left: 25%;
        margin-bottom: 10vh;
        text-shadow: -6px 4px 6px rgba(0, 0, 0, 0.79);
        `,
    "About": css`
        background-color: var(--background);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50%;
        margin-right: 2.5vw;
        padding: 10px;
    `
})}
`


export const Paragraph = withCurrentSectionName<ParagraphProps>(({ children, ...props }: ParagraphProps): React.ReactElement => {
    return (
        <StyledParagraph {...props}>
            {children}
        </StyledParagraph>
    )
})