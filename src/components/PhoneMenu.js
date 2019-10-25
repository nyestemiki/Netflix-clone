import React, { Component } from 'react';
import PhoneMenuStyle, { MenuIcon, Menu, Top, Account, AccountImg, AccountName, AccountText, SwitchProfiles, Links, Link, MenuNav } from './styles/PhoneMenuStyles';

export default class PhoneMenu extends Component {
    state = {
        active: false
    }

    toggleActive = () => {
        this.setState({ active: !this.state.active });
    }

    getClosest = (elem, selector) => {
        for (; elem && elem !== document; elem = elem.parentNode ) {
            if (elem.matches(selector)) { 
                return elem;
            }
        }
        return null;
    };

    componentDidMount(event) {
        setTimeout(() => {
            document.addEventListener('click', event => {
                if (!this.getClosest(event.target, '#menu') && !this.getClosest(event.target, '#menuicon')) {
                    this.setState({ active: false });
                }
            });
        }, 700);
    }

    render() {
        return (
            <PhoneMenuStyle>
                <MenuIcon onClick={this.toggleActive} id="menuicon">
                    <div>≡</div>
                </MenuIcon>
                <Menu active={this.state.active} id="menu">
                    <Top>
                        <Account>
                            <AccountImg/>
                            <AccountText>
                                <AccountName>John</AccountName>
                                <SwitchProfiles>Switch Profiles</SwitchProfiles>
                            </AccountText>
                        </Account>
                        <Links>
                            <Link>Account</Link>
                            <Link>Help Center</Link>
                            <Link>Sign out of Netflix</Link>
                        </Links>
                    </Top>
                    <MenuNav>
                        <Link active={true}>Home</Link>
                        <Link>My List</Link>
                        <Link>Action</Link>
                        <Link>Comedy</Link>
                        <Link>TV Shows</Link>
                        <Link>Drama</Link>
                        <Link>Horror</Link>
                        <Link>Anime</Link>
                        <Link>British Movies</Link>
                        <Link>Classical</Link>
                        <Link>Competition</Link>
                        <Link>Crime</Link>
                        <Link>Documenaties</Link>
                        <Link>Reality</Link>
                        <Link>Fantasy</Link>
                        <Link>Musical</Link>
                        <Link>Kids Shows</Link>
                        <Link>Food And Travel</Link>
                    </MenuNav>
                </Menu>
            </PhoneMenuStyle>
        )
    }
}
