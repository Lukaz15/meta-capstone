import { styled, css } from "styled-components";
import { ElementBase } from "../../custom_types/customTypes";
import { withCurrentSectionName } from "../HOCs/withCurrentSectionName";
import { stylesPerSection } from "../../utils/stylesPerSection";

interface SpanProps extends ElementBase {
}

const StyledSpan = styled.span<SpanProps>`
    ${stylesPerSection({
    "Home": css`
                font-size: 3rem;
                font-weight: bolder;
                margin-right: 1rem;
                `,
    "About": css`
                font-size: 3rem;
                font-weight: bolder;
    `
})}
`

export const Span = withCurrentSectionName<SpanProps>(({ children, ...props }: SpanProps): React.ReactElement => {

    return (
        <StyledSpan {...props}>
            {children}
        </StyledSpan>
    )
})
