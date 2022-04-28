import styled from 'styled-components'

const DrawerButtonSvg = styled.svg`
    position: relative;
    cursor: pointer;
    width: 74px;
    padding: 15px;

    line {
        stroke: #eee;
        stroke-width: 10;
        stroke-linecap: round;
    }
`

export default function DrawerButton({onclick}) {
    return (
        <DrawerButtonSvg 
            viewBox="0 0 100 100"
            onClick={onclick}>

            <line x1="30" y1="25" x2="85" y2="25"></line>
            <line x1="45" y1="50" x2="85" y2="50"></line>
            <line x1="15" y1="75" x2="85" y2="75"></line>


        </DrawerButtonSvg>
    )
}