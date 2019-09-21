import React from 'react';
import styled from 'styled-components';

const NavbarStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    padding: 20px 40px;
    font-size: 12px;
    line-height: 16.8px;
`;

const PrimaryNav = styled.div`
    display: flex;
`;

const SecondaryNav = styled.div`
    justify-self: end;
    display: flex;
    color: white;
`;

const NavLink = styled.div`
    margin: 5px;
    cursor: pointer;
    will-change: color;
    transition: color .5s;
    color: ${props => props.focus ? 'white' : '#e5e5e5'};  

    &:hover {
        color: #b3b3b3;
    }
`;

export default NavbarStyle;
export { PrimaryNav, SecondaryNav, NavLink };