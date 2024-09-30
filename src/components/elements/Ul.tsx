import styled from "styled-components";
import React from "react";

interface UlProps {
    children?: React.ReactNode;
}

const StyledUl = styled.ul<UlProps>`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const Ul: React.FC<UlProps> = ({ children, ...props }) => {
    return (
        <StyledUl {...props}>
            {React.Children.map(children, (child, i) => (
                <li key={i}>{child}</li>
            ))}
        </StyledUl>
    )
}
