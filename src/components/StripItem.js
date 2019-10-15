import React, { Component } from 'react';
import { ItemStyle, Info, HeaderAndBtns, Left, Button, Buttons, Text, Age, MatchAgeDuration, Match, Duration, Title, Tags, MoreInfoArrow } from './styles/StripStyles';
import Shows from '../Shows';

export default class StripItem extends Component {
    state = {
        showInfo: false
    }

    render() {
        return (
            <ItemStyle 
                progress={this.props.progress}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}    
            >
                <img 
                    src={Shows[this.props.film].cover}
                    alt={this.props.film}    
                />
                { this.state.showInfo && 
                    <Info>
                        <HeaderAndBtns>
                            <Left>
                                <Button className="play"><span>▶</span></Button>
                                <Text>
                                    <Title>Title</Title>
                                    <MatchAgeDuration>
                                        <Match>100% Match</Match>
                                        <Age>16+</Age>
                                        <Duration>1h 55m</Duration>
                                    </MatchAgeDuration>
                                    <Tags>Action - Thriller - Adventure</Tags>
                                </Text>
                            </Left>
                            <Buttons>
                                <Button><span role="img" aria-label="like">👍</span></Button>
                                <Button><span role="img" aria-label="dislike">👎</span></Button>
                                <Button>+</Button>
                            </Buttons>
                        </HeaderAndBtns>
                        <MoreInfoArrow/>
                    </Info>
                }
            </ItemStyle>
        )
    }
}
