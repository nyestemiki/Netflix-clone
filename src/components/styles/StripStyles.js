import styled from 'styled-components';

const Arrow = styled.span`
    &:after {
        position: absolute;
        transition: all .75s;
        content: '>';
        font-weight: 400;
        opacity: 0;
    }

    &:hover {
        &:after {
            padding: 0 100px;
            opacity: 1;
        }
    }
`;

const StripTitle = styled.div`
    color: #e5e5e5;
    font-size: 20px;
    margin: 15px 0;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    /* Explore All */
    &:after {
        display: inline-block;
        content: 'Explore All';
        font-size: 14px;
        transition: all .75s;
        font-weight: 400;
        opacity: 0;
    }

    &:hover {
        color: white;

        /* Explore All */
        &:after {
            padding: 0 15px;
            opacity: 1;
        }
    }
`;

const StripItems = styled.div`
    display: flex;
    position: relative;
    
    /* overflow: hidden; */
    margin-bottom: 60px;
    
    img {
        width: 296px;
        height: 167px;
        margin: 0 2px;
    }
`;

const ItemStyle = styled.div`
    display: inline;
    transition: all .7s;
    position: relative;
    z-index: 2000000;

    &:after {
        display: inline-block;
        content: '';
        position: relative;
        margin-top: 10px;
        width: 196px;
        left: 50px;
        height: 3px;
        z-index: 100;
        background: ${props => props.progress ? `linear-gradient(to right, red 0%, red ${props.progress}%, rgba(255, 255, 255, 0.3) ${props.progress}%, rgba(255, 255, 255, 0.3) 100%)` : 'none'};
    
        @media screen and (max-width: 700px) {
            width: 70%;
            left: 15%;
        }
    }

    &:hover {
        transform: scale(1.3);
        z-index: 200000000;
        margin-right: ${props => props.isLastInStrip ? '160' : ''}px;
        margin-left: ${props => props.isFirstInStrip ? '160' : ''}px;
        margin: 0px ${props => !(props.isFirstInStrip || props.isLastInStrip) ? '80' : ''}px;

        @media screen and (max-width: 700px) {
            margin: 0;
            translate: all .6s;
            transform: scale(1);
        }
    }
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 10px;
`;

const HeaderAndBtns = styled.div`
    display: grid;
    grid-template-columns: 9fr 1fr;
`;

const Left = styled.div`
    padding: 10px;

    &:hover {
        .play {
            color: red;
        }
    }
`;

const Button = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, .7);
    border: 1px solid rgba(255, 255, 255, .7);
    margin: 2px 0;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    font-size: 8px;
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
        border-color: white;
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin: 3.5px;
    }
`;

const Title = styled.div`
    font-weight: bold;
    color: white;
`;

const MatchAgeDuration = styled.div`
    display: flex;
    
    & > * {
        margin-right: 10px;
    }
`;

const Match = styled.div`
    color: lightgreen;
`;

const Age = styled.div`
    font-size: 8px;
    top: -2px;
    padding: 1px 2px;
    border: 1px solid rgba(255, 255, 255, .7);
`;

const Duration = styled.div`
    
`;

const Tags = styled.div`
    
`;

const MoreInfoArrow = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: white transparent transparent transparent;
    align-self: center;
    margin: 5px;

    &:hover {
        border-color: red transparent transparent transparent;
    }
`;

export { Arrow, StripTitle, StripItems, ItemStyle, Info, HeaderAndBtns, Left, Button, Buttons, Text, Age, MatchAgeDuration, Match, Duration, Title, Tags, MoreInfoArrow };