import styled from "styled-components";

interface NavProps {
    gridArea?: string;
    children?: React.ReactNode;
}

const StyledNav = styled.nav<NavProps>`
    grid-area: ${(props) => props.gridArea || '1 / 2 / 2 / 3'};
    justify-self: end;
    margin-right: 1.5rem;
    margin-top: 1rem;
`

export const Nav: React.FC<NavProps> = ({ children, ...props }) => {
    return (
        <StyledNav {...props}>
            {children}
        </StyledNav>
    )
}
