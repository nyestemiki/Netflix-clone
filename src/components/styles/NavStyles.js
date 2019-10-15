import styled from 'styled-components';

const NavbarStyle = styled.div`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    z-index: 1000;
    display: grid;
    grid-template-columns: 2fr 1fr;
    width: calc(100vw - 100px - 10px);
    padding: 7.5px 0;
    font-size: 12px;
    line-height: 16.8px;
    font-weight: 500;
    transition: all .75s;

    & > * {
        z-index: 1000;
    }
    
    &:before {
        transition: all .75s;
        z-index: 0;
        position: absolute;
        width: 100vw;
        height: 60px;
        display: block;
        content: '';
        left: -50px;
        background: ${props => props.scrolled ? 'black' : 'transparent'};
    }
`;

const PrimaryNav = styled.div`
    display: flex;
    align-items: center;
`;

const SecondaryNav = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-end;
    justify-items: center;
`;

const Logo = styled.div`
    position: relative;
    background: url('/imgs/logo.png') no-repeat;
    background-size: contain;
    width: 100px;
    height: 30px;
    margin-right: 20px;
    cursor: pointer;
`;

const NavLink = styled.div`
    margin: 8px;
    cursor: pointer;
    will-change: color;
    transition: color .5s;
    color: ${props => props.focus ? 'white' : '#e5e5e5'};  
    font-weight: ${props => props.focus ? 'bold' : ''};

    &:hover {
        color: #b3b3b3;
    }
`;

const NavItem = styled.div`
    margin: 8px 25px;
    cursor: pointer;
    color: white;  
`;

const AccountIcon = styled.div`
    background: url('/imgs/accounts/account.png') center no-repeat;
    background-size: cover;
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    position: relative;

    &:after { 
        display: block;
        content: '';
        transform: rotateZ(45deg);
        background: linear-gradient(
            135deg, 
            transparent 0%, 
            transparent 50%, 
            white 50%, 
            white 100%
        );
        width: 7px;
        height: 7px;
        position: absolute;
        right: -15px;
        top: 10px;
    }
`;

export default NavbarStyle;
export { PrimaryNav, SecondaryNav, NavLink, NavItem, Logo, AccountIcon };