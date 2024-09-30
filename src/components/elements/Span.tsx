import { styled, css } from "styled-components";
import { ElementBase } from "../../custom_types/customTypes";
import { withCurrentSectionName } from "../HOCs/withCurrentSectionName";

interface SpanProps extends ElementBase {

}

const StyledSpan = styled.span<SpanProps>`
    ${(props) => css`
        ${(() => {
            switch (props.$currentSectionName) {
                case "Home":
                    return `
                        font-size: 3rem;
                        font-weight: bolder;
                        margin-right: 1rem;
                    `
            }
        })}
    `}
`

export const Span = withCurrentSectionName<SpanProps>(({ children, ...props }: SpanProps): React.ReactElement => {

    return (
        <StyledSpan {...props}>
            {children}
        </StyledSpan>
    )
})
