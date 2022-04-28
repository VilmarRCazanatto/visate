import styled from "styled-components"

const color = "#333"
const font_size = 24
const padding_row = 1.1666
const showed_rows = 4
const main_row = 1

export const BusTimeListContainer = styled.div`

    h2 {
        font-size: 28px;
        padding: 3px 2.5%;
    }
    
    button {
        width: 45%;
        margin: 8px 2.5%;
        border: 3px solid ${color};
        background: #bbb;
        color: ${color};
        font-size: 16px;
        font-weight: 900;
        padding: 6px;
        transition: .35s all;   
    }

    button.selected_saida {
        background: ${color};
        color: #bbb;
    }

    ul {
        height: ${font_size * padding_row * showed_rows}px;
        overflow: hidden;
        /* background: pink; */
    }
    ul div {
        margin-top: ${props => font_size * padding_row * -1 * (props.selected - main_row)}px;
        transition: all .25s;
    }

    li {
        width: 100%;
        font-size: ${font_size * .8}px;
        line-height: ${font_size * padding_row}px;
        text-align: center;
        color: #444;
        transition: all .25s;
    }
    li:nth-child(${props => props.selected + 1}) {
        font-size: ${font_size}px;
        color: black;
    }

`