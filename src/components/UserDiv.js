import React, { Component } from 'react';
import { UserStyle } from './styles/AccountMenuStyles';

export default class UserDiv extends Component {
    render() {
        return (
            <UserStyle>
                <img src={"/imgs/accounts/"+this.props.img+".png"} alt={this.props.name} />
                <h3>{this.props.name}</h3>
            </UserStyle>
        )
    }
}
