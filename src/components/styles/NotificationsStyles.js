import styled from 'styled-components';

const NotificationsContainer = styled.div`
    position: absolute;
    right: 0;
    top: 35px;
    margin: 25px 58px;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    border-top: 1px solid white;
    display: ${props => props.show ? 'block' : 'none'};

    &:before {
        display: block;
        content: '';
        transform: rotateZ(45deg);
        background: linear-gradient(
            135deg,
            white 0%, 
            white 50%, 
            transparent 50%, 
            transparent 100%
        );
        width: 10px;
        height: 10px;
        
        position: absolute;
        right: 10px;
        top: -5px;
    }

    & > * {
        cursor: pointer;
    }
`;

const NotificationStyle = styled.div`
    padding: 10px;
`;

const NotificationsStyle = styled.div`
    @media screen and (max-width: 700px) {
        display: none;        
    }
`;

export default NotificationsContainer;
export { NotificationStyle, NotificationsStyle };