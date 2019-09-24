import React, { Component } from 'react';
import AccountMenuContainer from './styles/AccountMenuStyles';

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
                    
                </AccountMenuContainer>
            )
        )
    }
}