import React, { Component } from 'react'
import NavbarStyles, { PrimaryNav, SecondaryNav, Logo, NavLink, NavItem, Search, Bell } from './styles/NavStyles';
import AccountManager from './AccountManager';

export default class Navbar extends Component {
    state = {
        scrolled: false
    }

    handleScroll = () => {
        this.setState({ scrolled: window.pageYOffset ? true : false });
    }

    componentDidMount() {

        // Listening for scrolls
        document.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <NavbarStyles scrolled={this.state.scrolled}>
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
                    <AccountManager />
                </SecondaryNav>
            </NavbarStyles>
        )
    }
}