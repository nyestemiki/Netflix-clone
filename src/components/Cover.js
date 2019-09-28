import React, { Component } from 'react';
import CoverStyle, { Trailer, Content, Title, Description, Buttons, Button, Plus, Circle, Replay, AgeRestricion } from './styles/CoverStyles';

export default class Cover extends Component {
    state = {
        videoPlaying: true
    }

    componentDidMount() {
        // Listening for an ended trailer
        document.getElementById('video').addEventListener('ended', () => {
            this.setState({ videoPlaying: false });
        });
    }

    render() {
        return (
            <CoverStyle>
                <Trailer autoPlay id="video">
                    <source src="/vids/sample.mp4" type="video/mp4"/>
                </Trailer>
                <Content>
                    <Title showDescription={!this.state.videoPlaying}>Game Over, Man!</Title>
                    <Description show={!this.state.videoPlaying}>
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