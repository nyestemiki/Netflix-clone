import React, { Component } from 'react';
import CoverStyle, { Trailer, Content, Title, Description, Buttons, Button, Plus, Circle, Replay, AgeRestricion } from './styles/CoverStyles';

export default class Cover extends Component {
    state = {
        videoPlaying: true,
        myList: false
    }

    componentDidMount() {
        // Listening for an ended trailer
        document.getElementById('video').addEventListener('ended', () => {
            this.setState({ videoPlaying: false });
        });
    }

    rePlay = () => {
        const video = document.getElementById('video');
        if (!video.playing) {
            video.play();
            this.setState({ videoPlaying: true });
        }
    }

    myList = () => {
        this.setState({ myList: !this.state.myList });
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
                        <Button onClick={this.rePlay}>&#9658; Play</Button>
                        <Button onClick={this.myList}>
                            <Plus>{this.state.myList ? '✔' : '+'}</Plus> 
                            My List
                        </Button>
                        <Button><Circle className="circle">i</Circle> More Info</Button>
                    </Buttons>
                </Content>
                <Replay /> {/* Replay button */}
                <AgeRestricion>13+</AgeRestricion>
            </CoverStyle>
        )
    }
}