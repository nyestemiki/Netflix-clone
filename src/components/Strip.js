import React, { Component } from 'react';
import { StripTitle } from './styles/StripStyles';

export default class Strip extends Component {
    state = {

    }

    componentDidMount() {
        // Load data into state
    }

    render() {
        return (
            <>
                <StripTitle>{this.props.title}</StripTitle>
            </>
        )
    }
}
