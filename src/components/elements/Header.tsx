import styled from 'styled-components';
import { Home, About, Dishes, Book } from '../sections';
import { Img, Nav, Ul } from "../elements"
import { ElementBase } from '../../custom_types/customTypes';
import { AnchorNavigation } from './AnchorNavigation';

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
            <AnchorNavigation to={<Home />}>
                <Img header src="https://i.postimg.cc/ht1bks19/Asset-14-4x.png" alt="little-lemon-logo" />
            </AnchorNavigation>
            <Nav>
                <Ul>
                    <AnchorNavigation to={<About />}>About</AnchorNavigation>
                    <AnchorNavigation to={<Dishes />}>Dishes</AnchorNavigation>
                    <AnchorNavigation to={<Book />}>Book</AnchorNavigation>
                </Ul>
            </Nav>
        </StyledHeader>
    );
};

