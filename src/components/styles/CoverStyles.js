import styled from 'styled-components';

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
`;

const Content = styled.div`
    top: 150px;
    position: relative;
    padding: 35px;
    display: flex;
    flex-direction: column;
    
    & > * {
        margin-bottom: 20px; 
    }
`;

const Title = styled.div`
    font-size: 3rem;
`;

const Description = styled.div`
    width: 50vw;
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