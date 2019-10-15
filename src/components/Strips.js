import React, { Component } from 'react';
import Strip from './Strip';
import StripContainer from './styles/StripsStyles';

// LISTS
import myList from '../lists/myList';
import continueWatching from '../lists/continueWatching';
import trendingNow from '../lists/trendingNow';
import becauseThor from '../lists/becauseThor';

export default class Strips extends Component {
    render() {
        return (
            <StripContainer>
                <Strip 
                    title="My List" 
                    films={myList} 
                    list="myList"
                />    
                <Strip 
                    title="Continue Watching for John" 
                    films={continueWatching} 
                    list="continueWatching"
                />    
                <Strip 
                    title="Trending Now" 
                    films={trendingNow} 
                    list="trendingNow"
                />    
                <Strip 
                    title="Because you added Thor to your list" 
                    films={becauseThor} 
                    list="becauseThor"
                />    
            </StripContainer>
        )
    }
}
