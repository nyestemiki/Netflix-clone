import React, { Component } from 'react';
import styled from 'styled-components';
import NotificationsContainer, { NotificationStyle, NotificationsStyle } from './styles/NotificationsStyles';

const Bell = styled.div`
    background: url('/imgs/bell.png') center no-repeat;
    background-size: cover;
    margin-right: 30px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

export default class Notifications extends Component {
    state = {
        onIcon: false,
        onContainer: false
    }

    componentDidMount() {
        const notificationIcon = document.getElementById('notificationsBell');
        notificationIcon.addEventListener('mouseenter', () => {
            this.setState({ onIcon: true });
        });
        notificationIcon.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this.setState({ onIcon: false });
            }, 300);
        });

        const notificationDiv = document.getElementById('notificationsDiv');
        notificationDiv.addEventListener('mouseenter', () => {
            this.setState({ onContainer: true });
        });
        notificationDiv.addEventListener('mouseleave', () => {
            setTimeout(() => {
                this.setState({ onContainer: false });
            }, 300);
        });
    }

    render() {
        return (
            <NotificationsStyle>
                <Bell id="notificationsBell"/>
                <NotificationsContainer 
                    show={this.state.onIcon || this.state.onContainer} 
                    id="notificationsDiv"
                >
                    <NotificationStyle>
                        No new notifications
                    </NotificationStyle>
                </NotificationsContainer>
            </NotificationsStyle>
        )
    }
}
