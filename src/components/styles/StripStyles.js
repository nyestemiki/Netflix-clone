import styled from 'styled-components';

const StripTitle = styled.div`
    color: #e5e5e5;
    font-size: 20px;
    margin: 15px 0;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    /* Arrow */
    &:before {
        display: inline-block;
        content: '>';
        position: absolute;
        left: 85px;
        transition: all .75s;
        font-weight: 400;
        opacity: 0;
    }

    /* Explore All */
    &:after {
        display: inline-block;
        content: 'Explore All';
        font-size: 14px;
        opacity: 0;
        transition: all .75s;
        font-weight: 400;
    }

    &:hover {
        color: white;

        /* Arrow */
        &:before {
            padding: 0 85px;
            opacity: 1;
        }

        /* Explore All */
        &:after {
            padding: 0 15px;
            opacity: 1;
        }
    }
`;

const StripItems = styled.div`
    display: grid;
    grid-auto-columns: repeat(6, minmax(150px, 1fr));
    position: relative;
    
    /* &:after {
        display: inline-block;
        content: '>';
    } */
`;

const ItemStyle = styled.div`
    display: inline-block;
`;

export { StripTitle, StripItems, ItemStyle };