import React, { Component } from 'react';
import { ItemStyle } from './styles/StripStyles';
import Shows from '../Shows';

export default class StripItem extends Component {
    render() {
        return (
            <ItemStyle progress={this.props.progress}>
                <img 
                    src={Shows[this.props.film].cover}
                    alt={this.props.film}    
                />
            </ItemStyle>
        )
    }
}
