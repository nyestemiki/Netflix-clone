import styled from 'styled-components';

const Arrow = styled.span`
    &:after {
        position: absolute;
        transition: all .75s;
        content: '>';
        font-weight: 400;
        opacity: 0;
    }

    &:hover {
        &:after {
            padding: 0 100px;
            opacity: 1;
        }
    }
`;

const StripTitle = styled.div`
    color: #e5e5e5;
    font-size: 20px;
    margin: 15px 0;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    /* Explore All */
    &:after {
        display: inline-block;
        content: 'Explore All';
        font-size: 14px;
        transition: all .75s;
        font-weight: 400;
        opacity: 0;
    }

    &:hover {
        color: white;

        /* Explore All */
        &:after {
            padding: 0 15px;
            opacity: 1;
        }
    }
`;

const StripItems = styled.div`
    display: flex;
    position: relative;
    
    overflow: hidden;
    margin-bottom: 60px;
    
    img {
        width: 296px;
        height: 167px;
        margin: 0 2px;
    }
    
    /* 
    Progress bar
    &:before {

    } 
    Next strip-fragment
    &:after {
        display: inline-block;
        content: '>';
    } 
    */
`;

const ItemStyle = styled.div`
    display: inline;
`;

export { Arrow, StripTitle, StripItems, ItemStyle };