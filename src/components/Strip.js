import React, { Component } from 'react';
import { StripTitle, StripItems } from './styles/StripStyles';
import StripItem from './StripItem';

export default class Strip extends Component {
    render() {
        return (
            <>
                <StripTitle>{this.props.title}</StripTitle>
                <StripItems>
                    <StripItem />
                </StripItems>
            </>
        )
    }
}