import styled from 'styled-components';

const FooterStyle = styled.div`
    width: 60vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    /* Typography */
    color: rgba(255, 255, 255, .3);
    font-size: 12px;

    @media screen and (max-width: 1000px) {
        margin: 0;
        width: 100vw;
    }

    @media screen and (max-width: 700px) {
        display: none;        
    }
`;

const Icons = styled.div`
    display: flex;
    
    & > * {
        margin-right: 20px;
    }
`;

const Facebook = styled.div`
    background: url('/imgs/icons/facebook.png') center no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const Instagram = styled.div`
    background: url('/imgs/icons/instagram.png') center no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    cursor: pointer;
`;

const Youtube = styled.div`
    background: url('/imgs/icons/youtube.png') center no-repeat;
    background-size: cover;
    height: 30px;
    width: 40px;
    cursor: pointer;
`;

const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    grid-row-gap: 20px;
    margin: 25px 0;

    & > * {
        cursor: pointer;
    }

    & > *:hover {
        text-decoration: underline;
    }
`;

const ServiceCode = styled.div`
    border: 1px solid rgba(255, 255, 255, .3);
    padding: 6px;
    align-self: start;
    justify-self: start;
    margin: 15px 0;
    cursor: pointer;

    &:hover {
        color: rgba(255, 255, 255, .85);
    }
`;

const CC = styled.div`
    margin: 15px 0;
`;

const Signature = styled.span`
    color: red;
    padding-left: 10px;
    font-weight: bold;
`;

const PhoneFooter = styled.div`
    display: none;
    text-align: center;

    @media screen and (max-width: 700px) {
        display: block;
    }
`;

export default FooterStyle;
export { Icons, Facebook, Instagram, Youtube, Links, ServiceCode, CC, Signature, PhoneFooter };