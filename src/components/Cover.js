import React, { Component } from 'react';
import CoverStyle, { Trailer, Content, Title, Description, Buttons, Button, Plus, Circle, Replay, AgeRestricion } from './styles/CoverStyles';

export default class Cover extends Component {
    render() {
        return (
            <CoverStyle>
                <Trailer autoPlay>
                    <source src="/vids/gameOverMan.mp4" type="video/mp4"/>
                </Trailer>
                <Content>
                    <Title>Game Over, Man!</Title>
                    <Description>
                        Three zeros try to become heroes when gunmen take hostages at a star-studded party inside a fancy Los Angeles hotel.
                    </Description>
                    <Buttons>
                        <Button>&#9658; Play</Button>
                        <Button><Plus>&#43;</Plus> My List</Button>
                        <Button><Circle>i</Circle> More Info</Button>
                    </Buttons>
                </Content>
                <Replay /> {/* Replay button */}
                <AgeRestricion>13+</AgeRestricion>
            </CoverStyle>
        )
    }
}