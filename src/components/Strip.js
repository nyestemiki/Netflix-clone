import React, { Component } from 'react';
import { Arrow, StripTitle, StripItems } from './styles/StripStyles';
import StripItem from './StripItem';

export default class Strip extends Component {
    render() {
        return (
            <>
                <StripTitle><Arrow>{this.props.title}</Arrow></StripTitle>
                <StripItems>
                    {(this.props.films).map(film => <StripItem film={film} key={film}/>)}
                </StripItems>
            </>
        )
    }
}
