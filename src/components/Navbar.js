import React, { Component } from 'react'
import NavbarStyles, { PrimaryNav, SecondaryNav, Logo, NavLink, NavItem, Search, Bell, Account } from './styles/NavStyles';

export default class Navbar extends Component {
    render() {
        return (
            <NavbarStyles>
                <PrimaryNav>
                    <Logo />
                    <NavLink focus={true}>Home</NavLink>
                    <NavLink>TV Shows</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Recently Added</NavLink>
                    <NavLink>My List</NavLink>
                </PrimaryNav>
                <SecondaryNav>
                    <Search />
                    <NavItem>KIDS</NavItem>
                    <Bell />
                    <Account />
                </SecondaryNav>
            </NavbarStyles>
        )
    }
}