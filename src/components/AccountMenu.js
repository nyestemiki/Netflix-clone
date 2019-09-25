import React, { Component } from 'react';
import AccountMenuContainer, { ManageProfiles, AccountMenuAd, AccountMenuLink } from './styles/AccountMenuStyles';
import UserDiv from './UserDiv';

export default class AccountMenu extends Component {
    state = {
        show: false
    }

    componentDidUpdate() {
        const accountMenuDiv = document.getElementById('accountContainer');

        if (accountMenuDiv) {
            accountMenuDiv.addEventListener('mouseenter', () => {
                this.setState({ show: true });
            });
            accountMenuDiv.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    this.setState({ show: false });
                }, 1000);
            });
        }
    }

    render() {
        return (
            // Showing only if hovering over the account icon or this menu
            (this.props.show || this.state.show) && (
                <AccountMenuContainer id="accountContainer">
                    <UserDiv name="Peter" img="account1"/>
                    <UserDiv name="John" img="account2"/>
                    <UserDiv name="Lucy" img="account3"/>
                    <UserDiv name="Kids" img="kids"/>
                    <ManageProfiles>Manage Profiles</ManageProfiles>
                    <AccountMenuAd>
                        <div className="ad1">Give people you love free Netflix.</div>
                        <div className="ad2">We bet they'll thank you later.</div>
                        <button>Refer Friends Now</button>
                    </AccountMenuAd>
                    <AccountMenuLink>Account</AccountMenuLink>
                    <AccountMenuLink>Help Center</AccountMenuLink>
                    <AccountMenuLink>Sign out of Netflix</AccountMenuLink>
                </AccountMenuContainer>
            )
        )
    }
}