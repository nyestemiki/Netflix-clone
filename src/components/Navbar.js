import React, { Component } from 'react'
import NavbarStyles, { PrimaryNav, SecondaryNav, NavLink } from './styles/NavStyles';

export default class Navbar extends Component {
    render() {
        return (
            <NavbarStyles>
                <PrimaryNav>
                    <NavLink>Netflix</NavLink>
                    <NavLink focus={true}>Home</NavLink>
                    <NavLink>TV Shows</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Recently Added</NavLink>
                    <NavLink>My List</NavLink>
                </PrimaryNav>
                <SecondaryNav>
                    <NavLink>Search</NavLink>
                    <NavLink>KIDS</NavLink>
                    <NavLink>bell</NavLink>
                    <NavLink>accounts</NavLink>
                </SecondaryNav>
            </NavbarStyles>
        )
    }
}