import styled from 'styled-components';

interface HeaderProps {
    backgroundColor?: string;
    height?: string;
    children?: React.ReactNode;
}

const StyledHeader = styled.header<HeaderProps>`
    position: fixed;
    top: 0;
    display: grid;
    grid: 1fr / repeat(2, 1fr);
    grid-gap: 0px;
    width: 100vw;
    background-color: ${(props) => props.backgroundColor || '#00000000'};
    height: ${(props) => props.height || '15vh'};
`;

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
    return (
        <StyledHeader {...props}>
            {children}
        </StyledHeader>
    );
};

