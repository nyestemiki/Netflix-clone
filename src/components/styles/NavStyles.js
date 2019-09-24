import styled from 'styled-components';

const NavbarStyle = styled.div`
    position: fixed;
    top: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: 100vw;
    padding: 20px 40px;
    font-size: 12px;
    line-height: 16.8px;
    font-weight: 500;
    background: ${props => props.scrolled ? 'black' : 'transparent'};
`;

const PrimaryNav = styled.div`
    display: flex;
`;

const SecondaryNav = styled.div`
    justify-self: end;
    
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

const Logo = styled.div`
    position: relative;
    top: -3.5px;
    background: url('/imgs/logo.png') center no-repeat;
    background-size: cover;
    width: 100px;
    margin-right: 20px;
    cursor: pointer;
`;

const NavLink = styled.div`
    margin: 8px;
    cursor: pointer;
    will-change: color;
    transition: color .5s;
    color: ${props => props.focus ? 'white' : '#e5e5e5'};  

    &:hover {
        color: #b3b3b3;
    }
`;

const NavItem = styled.div`
    margin: 8px 25px;
    cursor: pointer;
    color: white;  
`;

const Search = styled.div`
    background: url('/imgs/search.png') center no-repeat;
    background-size: cover;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

const Bell = styled.div`
    background: url('/imgs/bell.png') center no-repeat;
    background-size: cover;
    margin-right: 30px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const AccountIcon = styled.div`
    background: url('/imgs/account.png') center no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
`;

export default NavbarStyle;
export { PrimaryNav, SecondaryNav, NavLink, NavItem, Logo, Search, Bell, AccountIcon };