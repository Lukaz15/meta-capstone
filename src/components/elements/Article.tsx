import { styled, css } from "styled-components";
import { ElementBase } from "../../custom_types/customTypes";
import { withCurrentSectionName } from "../HOCs/withCurrentSectionName";
import { stylesPerSection } from "../../utils/stylesPerSection";

interface ArticleProps extends ElementBase { }

const StyledArticle = styled.article<ArticleProps>`
    margin-top: 15vh;
    ${stylesPerSection({
    "About": css`
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 1.25rem;
        `
})}
`

export const Article = withCurrentSectionName<ArticleProps>(({ children, ...props }: ArticleProps): React.ReactElement => {
    return (
        <StyledArticle {...props}>
            {children}
        </StyledArticle>
    )
})