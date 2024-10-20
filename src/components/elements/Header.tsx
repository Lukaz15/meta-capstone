import styled from 'styled-components';
import { Home, About, Dishes, Book } from '../sections';
import { Anchor, Img, Nav, Ul } from "../elements"
import { ElementBase } from '../../custom_types/customTypes';

interface HeaderProps extends ElementBase { }

const StyledHeader = styled.header<HeaderProps>`
    position: fixed;
    top: 0;
    display: grid;
    grid: 1fr / repeat(2, 1fr);
    grid-gap: 0px;
    width: 100vw;
    background-color: #00000000;
    height: 15vh;
`;

export const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
    return (
        <StyledHeader {...props}>
            <Anchor type="navigation" to={<Home />}>
                <Img src="https://i.postimg.cc/ht1bks19/Asset-14-4x.png" alt="little-lemon-logo" />
            </Anchor>
            <Nav>
                <Ul>
                    <Anchor type="navigation" to={<About />}>About</Anchor>
                    <Anchor type="navigation" to={<Dishes />}>Dishes</Anchor>
                    <Anchor type="navigation" to={<Book />}>Book</Anchor>
                </Ul>
            </Nav>
        </StyledHeader>
    );
};

