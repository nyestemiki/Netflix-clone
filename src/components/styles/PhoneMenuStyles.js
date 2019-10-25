import styled from 'styled-components';

const PhoneMenuStyle = styled.div`
    display: none;

    @media screen and (max-width: 700px) {
        display: block;    
    }
`;

const MenuIcon = styled.div`
    font-size: 50px; 
    width: auto;
    position: relative;
    height: 30px;
    margin-right: 15px;
    cursor: pointer;
`;

const Menu = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};   
    flex-direction: column;
    position: absolute;
    background: black;
    height: 100vh;
    left: -15px;
    padding: 0 15px;
    color: rgba(255, 255, 255, 0.55);
    font-weight: bold;
    font-size: 15px;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(255, 255, 255 , .55);
    position: relative;
    padding: 10px 0;
`;

const Account = styled.div`
    display: flex;
    margin-bottom: 5px;
`;

const AccountImg = styled.div`
    background: url('/imgs/accounts/account.png') center no-repeat;
    background-size: cover;
    margin-right: 5px;
    width: 35px;
    height: 35px;
    cursor: pointer;
`;

const AccountText = styled.div`
    display: flex;
    flex-direction: column;
`;

const AccountName = styled.div`

`;

const SwitchProfiles = styled.div`
    font-size: 10px;
`;

const Links = styled.div`
    
`;

const Link = styled.div`
    padding: 4px 0;

    color: ${props => props.active ? 'white' : ''};

    &::before {
        display: ${props => props.active ? 'inline' : 'none'};;
        content: '';
        height: 100%;
        border: 2px solid rgba(255, 0, 0, .75);
        height: 20px;
        left: 0px;
        position: absolute;
    }
`;

const MenuNav = styled.div`
    
`;
 
export default PhoneMenuStyle;
export { MenuIcon, Menu, Top, Account, AccountImg, AccountName, AccountText, SwitchProfiles, Links, Link, MenuNav };