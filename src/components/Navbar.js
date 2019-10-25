import React, { Component } from 'react'
import NavbarStyles, { PrimaryNav, SecondaryNav, Logo, NavLink, NavItem } from './styles/NavStyles';
import AccountManager from './AccountManager';
import Search from './Search';
import Notifications from './Notifications';
import PhoneMenu from './PhoneMenu';

export default class Navbar extends Component {
    state = {
        scrolled: false,
        searchOpen: false
    }

    handleScroll = () => {
        this.setState({ scrolled: window.pageYOffset ? true : false });
    }

    openSearch = () => {
        this.setState({ searchOpen: true });
    }

    closeSearch = () => {
        this.setState({ searchOpen: false });
    }

    componentDidMount() {
        // Listening for scrolls
        document.addEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <NavbarStyles scrolled={this.state.scrolled}>
                <PrimaryNav>
                    <PhoneMenu/>
                    <Logo/>
                    <NavLink focus={true}>Home</NavLink>
                    <NavLink>TV Shows</NavLink>
                    <NavLink>Movies</NavLink>
                    <NavLink>Recently Added</NavLink>
                    <NavLink>My List</NavLink>
                </PrimaryNav>
                <SecondaryNav>
                    <Search 
                        open={this.state.searchOpen}
                        openSearch={this.openSearch}
                        closeSearch={this.closeSearch}
                        showAlways={true}
                    />
                    <NavItem>KIDS</NavItem>
                    <Notifications />
                    <AccountManager />
                </SecondaryNav>
            </NavbarStyles>
        )
    }
}