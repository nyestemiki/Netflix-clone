import React, { Component } from 'react';
import AccountMenuContainer from './styles/AccountMenuStyles';

export default class AccountMenu extends Component {
    hoversSet = false

    state = {
        show: false
    }

    hoverListeners = () => {
        const accountMenuDiv = document.getElementById('accountContainer');
        accountMenuDiv.addEventListener('mouseenter', () => {
            this.setState({ show: true });
        });
        accountMenuDiv.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this.setState({ show: false });
            }, 1000);
        });
        this.hoversSet = true;
    }

    componentDidUpdate() {
        if (!this.hoversSet) {
            this.hoverListeners();
        }
    }

    render() {
        return (
            // Show menu on icon-hover or menu-hover
            (this.state.show || this.props.show) && (
                <AccountMenuContainer id="accountContainer" onAnimationEnd={this.hoverListeners}>

                </AccountMenuContainer>
            )
        )
    }
}
