import styled from 'styled-components';

const AccountMenuContainer = styled.div`
    position: absolute;
    right: 0;
    top: 35px;
    margin: 40px;
    background: rgba(0, 0, 0, 0.9);
    z-index: 1000;
    color: white;
    font-size: 13px;
    padding: 10px 0;

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

const UserStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 0 10px;

    &:hover {
        text-decoration: underline;
    }

    /* Account Image */
    img {
        width: 35px;
        height: 35px;

        margin: 4px 10px 4px 0;
    }

    /* Account Name */
    h3 {
        font-weight: 100;
        line-height: 18px;
    }
`;

const ManageProfiles = styled.div`
    line-height: 32px;
    padding: 5px 10px;
    font-weight: 100;

    &:hover {
        text-decoration: underline;
    }
`;

const AccountMenuAd = styled.div`
    background-color: rgb(51, 51, 51);
    line-height: 21px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    /* First sentence in ad ("Give people you love free Netflix.") */
    .ad1 {
        width: 175px;
        font-size: 14px;
        font-weight: 700;
        line-height: 17.5px;
        padding: 6.5px;
    }

    /* Second sentence in ad ("We bet they'll thank you later.") */
    .ad2 {
        width: 175px;
        font-size: 12px;
        line-height: 14.4px;
        padding: 6.5px;
    }

    button {
        border: 1px solid red;
        background: rgba(255, 10, 22, 0.75);
        color: white;
        margin: 6.5px;
        border: 2px outset rgb(255, 10, 22);
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        padding: 4.5px;

        &:hover {
            background-color: red;
        }
    }
`;

const AccountMenuLink = styled.div`
    font-weight: 700;
    line-height: 15px;
    padding: 7px 10px;

    &:hover {
        text-decoration: underline;
    }
`;

export default AccountMenuContainer;
export { UserStyle, ManageProfiles, AccountMenuAd, AccountMenuLink };