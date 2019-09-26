import React, { Component } from 'react';
import AccountMenu from './AccountMenu';
import { AccountIcon } from './styles/NavStyles'; 

export default class AccountManager extends Component {
    state = {
        showMenu: false
    }

    componentDidMount() {
        const accountDiv = document.getElementById('account');
        accountDiv.addEventListener('mouseenter', () => {
            this.setState({ showMenu: true });
        });
        accountDiv.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this.setState({ showMenu: false });
            }, 300);
        });
    }

    render() {
        return (
            <>
                <AccountIcon id="account"/>
                <AccountMenu show={this.state.showMenu}/>
            </>
        )
    }
}