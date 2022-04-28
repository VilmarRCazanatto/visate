import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: absolute;
    width: 100%;
    height: ${props => props.expanded ?  `${props.height}px` : '74px'};
    background: #333;
    transition .25s all;
    overflow: hidden;
    z-index: 3;

    box-shadow: 0 0 10px rgba(0,0,0,.3);

    h1 {
        font-size: 28px;
        line-height: 74px;
        color: #eee; 
    }


`

export const HeaderTop = styled.div`
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
`