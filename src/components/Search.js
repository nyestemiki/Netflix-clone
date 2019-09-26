import React, { Component } from 'react';
import styled from 'styled-components';

const SearchIcon = styled.div`
    background: url('/imgs/search.png') center no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin: 5px;
`;

const SearchDiv = styled.div`
    border: ${props => props.open ? '1px solid white' : '1px solid transparent'};
    transition: all .5s;
    display: flex;
    padding: 5px;
    box-sizing: border-box;

    .search-area {
        width: ${props => props.open ? '250px' : '0'};
        will-change: width;
        transition: all .35s;
        background: transparent;
        border: none;
        color: white;
        font-size: 14px;
    }
        .search-area:focus {
            outline: none;
        }
`;

export default class Search extends Component {
    checkClick = event => {
        console.log(event);
        if (!event.target.classList.contains('search')) {
            this.props.closeSearch();
        }
    }

    componentDidMount() {
        // Listening for clicks
        document.addEventListener('click', this.checkClick);
    }

    render() {
        return (
            <SearchDiv 
                onClick={this.props.openSearch}
                open={this.props.open}    
            >
                <SearchIcon className="search" />
                <input 
                    type="text" 
                    className="search search-area"
                    placeholder="Titles, people, genres"    
                />
            </SearchDiv>
        )
    }
}
