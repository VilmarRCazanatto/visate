import styled from 'styled-components';

export const SearchInputContainer = styled.div`
position: relative;
    width: 100%;
    padding: 10px;


    input { 
        width: 100%;
        font-size: 20px;
        height: 40px;
        text-indent: 20px;
        border: none;
        outline: none;
        box-shadow: 0 0 10px rgba(0,0,0,.4);
    }

    
`;

export const ScrollDiv = styled.div`
    width: 100%;
    height: 390px;
    overflow: scroll;   

`

export const ListItemContainer = styled.span`
    display: inline-block;
    margin-bottom: 5px;

    cursor: pointer;
`
