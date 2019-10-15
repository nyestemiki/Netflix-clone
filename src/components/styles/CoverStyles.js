import styled, { keyframes } from 'styled-components';

const CoverStyle = styled.div`
    width: 100vw;
    height: 90vh;
    position: relative;

    @media screen and (max-width: 1000px) {
        height: 50vh;
    }
`;

const Trailer = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100%; 
    position: absolute;
    left: -50px;
`;

const Content = styled.div`
    top: 150px;
    position: relative;
    padding: 35px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 30vh;

    & > * { 
        margin-bottom: 20px; 
    }
`;

const TitleAnimationFwd = keyframes`
    from {
        transform: translateY(100%);
    } to {
        transform: translateY(0);
    }
`;

const TitleAnimationBwd = keyframes`
    from {
        transform: translateY(0);
    } to {
        transform: translateY(1%);
    }
`;

const Title = styled.div`
    font-size: 3rem; 
    /* animation: ${props => props.showDescription ? TitleAnimationFwd : TitleAnimationBwd};
    animation-duration: .6s; */
`;

// const DescriptionAnimationFwd = keyframes`
//     from {
//         /* transform: translateY(100%); */
//     } to {
//         /* transform: translateY(0); */
//         height: 0;
//     }
// `; 

const DescriptionAnimationBwd = keyframes`
    from {
        /* transform: translateY(0); */
        height: auto;
    } to {
        /* transform: translateY(100%); */
        height: 0vh;
    }
`; 
 
const Description = styled.div`
    animation: ${props => props.show ? '' : DescriptionAnimationBwd};
    animation-duration: 1s;
    /* display: ${props => props.show ? 'block' : 'none'}; */
    transition: all 1s;
    width: 50vw;
    overflow: hidden; 
`;

const Buttons = styled.div`
    display: flex;
`;

const Button = styled.div`
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(10px);
    margin-right: 15px;
    padding: 10px 30px;
    border-radius: 2px;

    &:hover {

    }
`;

const Plus = styled.div`
    font-weight: bold;
    display: inline-block;
`;

const Circle = styled.span`
    border-radius: 100%;
    border: 1px solid white;
    display: inline-block;
    width: 18px;
    height: 18px;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
`;

const Replay = styled.div`
    
`;

const AgeRestricion = styled.div`
    
`;

export default CoverStyle;
export { Trailer, Content, Title, Description, Buttons, Button, Plus, Circle, Replay, AgeRestricion };