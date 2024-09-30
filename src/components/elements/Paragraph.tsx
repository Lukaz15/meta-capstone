import { styled, css } from "styled-components"
import { ElementBase } from "../../custom_types/customTypes";
import { withCurrentSectionName } from "../HOCs/withCurrentSectionName";

interface ParagraphProps extends ElementBase {

}

const StyledParagraph = styled.p<ParagraphProps>`
    ${(props) => css`
        ${(() => {
            switch (props.$currentSectionName) {
                case "Home":
                    return `
                            width: 60%;
                            font-size: 2rem;
                            margin-left: 25%;
                            margin-bottom: 10vh;
                            text-shadow: -6px 4px 6px rgba(0, 0, 0, 0.79);
                            `
                default:
                    return ``

            }
        })}
    `}
`


export const Paragraph = withCurrentSectionName<ParagraphProps>(({ children, ...props }: ParagraphProps): React.ReactElement => {
    return (
        <StyledParagraph {...props}>
            {children}
        </StyledParagraph>
    )
})