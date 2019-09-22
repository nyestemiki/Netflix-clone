import React, { Component } from 'react';
import Strip from './Strip';
import StripContainer from './styles/StripsStyles';
import myList from '../myList';

export default class Strips extends Component {
    render() {
        return (
            <StripContainer>
                <Strip title="My List" films={myList}/>    
            </StripContainer>
        )
    }
}
