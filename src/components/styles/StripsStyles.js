import styled from 'styled-components';

const StripContainer = styled.div`
    position: relative;
    top: -150px;

    @media screen and (max-width: 1000px) {
        top: -75px;
    }

    @media screen and (max-width: 700px) {
        margin-top: 150px;
    }  
`;

export default StripContainer;