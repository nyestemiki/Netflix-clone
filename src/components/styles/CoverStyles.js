import styled, { keyframes } from 'styled-components';

const CoverStyle = styled.div`
    position: relative;
    width: 100vw;
    height: 90vh;

    @media screen and (max-width: 1000px) {
        height: 50vh;
    }
`;

const Trailer = styled.video`
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%; 
    left: -50px;
`;

const Content = styled.div`
    position: absolute;
    padding: 35px 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * { 
        margin-bottom: 40px; 
    }
`;

const Title = styled.div`
    font-size: 3rem; 
`;

const DescriptionAnimationFwd = keyframes`
    from {
        height: auto;
    } to {
        height: 0;
    }
`; 

const DescriptionAnimationBwd = keyframes`
    from {
        height: 0;
    } to {
        height: auto;
    }
`; 
 
const Description = styled.div`
    animation: ${props => props.show ? DescriptionAnimationBwd : DescriptionAnimationFwd};
    animation-duration: 1s;
    display: ${props => props.show ? 'block' : 'none'};
    width: 30vw;
    transition: all 1s;
    overflow: hidden; 
`;

const Buttons = styled.div`
    display: flex;
`;

const Button = styled.div`
    margin-right: 15px;
    padding: 10px 30px;
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    border-radius: 4px;
    transition: transform .35s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        background-color: rgba(255, 255, 255, .85);
        color: rgba(0, 0, 0, .85);

        .circle {
            border: 1px solid rgba(0, 0, 0, .85);
        }
    }
`;

const Plus = styled.div`
    font-weight: bold;
    display: inline-block;
    padding: 0 5px;
`;

const Circle = styled.span`
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid white;
    border-radius: 100%;

    /* Typography */
    text-align: center;
    font-size: 13px;
    font-weight: bold;
`;

const VideoManipulation = styled.div`
    position: absolute;
    float: right;
    bottom: 35%;
    right: 150px;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, .8);
    border-radius: 100%;
    background-color: rgba(0, 0, 0, .25);
    transition: all .5s;

    &:hover {
        transform: scale(1.1);
        border-color: white;
    }
`;

const Arrow = styled.div`
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid white;
    transform: rotateZ(120deg);

    &:after {
        display: block;
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        right: 11px;
        background: linear-gradient( 45deg, transparent 0%, transparent 50%, white 50%, white 100% );
    }
`;

const Mute = styled.div`
    /* If cover-video mute => shows unmute icon and vice-versa */
    background: ${props => props.mute ? "url('/imgs/unmute.png')" : "url('/imgs/mute.png')"} center no-repeat;
    background-size: 15px 15px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const AgeRestricion = styled.div`
    position: absolute;
    float: right;
    bottom: 35%;
    right: 0;
    padding: 7px 100px 7px 12px;
    border-left: 2.5px solid rgba(255, 255, 255, .85);
    background-color: rgba(0, 0, 0, .25);
    backdrop-filter: blur(50px);
`;

export default CoverStyle;
export { Trailer, Content, Title, Description, Buttons, Button, Plus, Circle, VideoManipulation, Arrow, Mute, AgeRestricion };