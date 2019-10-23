import React, { Component } from 'react';
import { ItemStyle, Info, HeaderAndBtns, Left, Button, Buttons, Text, Age, MatchAgeDuration, Match, Duration, Title, Tags, MoreInfoArrow } from './styles/StripStyles';
import Shows from '../Shows';

export default class StripItem extends Component {
    state = {
        showInfo: false,
        isFirstInStrip: false,
        isLastInStrip: false
    }

    containsAny = (classlist, list) => {
        const Classlist = Array.from(classlist);
        const List = Array.from(list);
        for (let i = 0; i < Classlist.length; i++) {
            for (let j = 0; j < List.length; j++) {
                if ( Classlist[i] === List[j] ) {
                    return true
                }
            }
        }

        return false;
    }

    componentDidMount() {
        setTimeout(() => {
            const div = document.getElementById(this.props.number);

            const windowWidth = window.innerWidth;
            const showElements = Math.floor(windowWidth/300);
            let lasts = [];
            let firsts = [];
            for (let i = 1; i < this.props.nrItems; i+=showElements) {
                lasts.push('right-' + i);
                let j = i+1;
                firsts.push('right-' + j);
            }

            if ((div.classList.contains('active') && !this.props.firstInList) || 
            this.containsAny(div.classList, firsts)) {
                this.setState({ isFirstInStrip: true });
            } else {
                this.setState({ isFirstInStrip: false });
            }

            if (this.containsAny(div.classList, lasts) && !this.props.lastInList) {
                this.setState({ isLastInStrip: true })
            } else {
                this.setState({ isLastInStrip: false });
            }
        }, 1000);
    }

    render() {
        return (
            <ItemStyle 
                progress={this.props.progress}
                onMouseEnter={() => this.setState({ showInfo: true })}
                onMouseLeave={() => this.setState({ showInfo: false })}  
                isFirstInStrip={this.state.isFirstInStrip}
                isLastInStrip={this.state.isLastInStrip}  
                id={this.props.number}
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
