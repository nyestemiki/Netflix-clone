import styled from 'styled-components';

const AccountMenuContainer = styled.div`
    position: absolute;
    right: 0;
    top: 35px;
    margin: 40px;
    background: rgba(0, 0, 0, 0.85);
    z-index: 1000;

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
`;

export default AccountMenuContainer;