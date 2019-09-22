import React, { Component } from 'react';
import { ItemStyle } from './styles/StripStyles';

export default class StripItem extends Component {
    render() {
        return (
            <ItemStyle>
                <img 
                    src={"/imgs/covers/" + this.props.film + ".jpg"}
                    alt={this.props.film}    
                />
            </ItemStyle>
        )
    }
}
