import styled from "styled-components";

export const MainContentContainer = styled.div`
    position: absolute;
    width: 50vw;
    height: 45vh;
    left: 25vw;
    top: 29vh;
    background: #aaa;
    padding: 2vh;
    z-index: 1;

    box-shadow: 0 0 10px rgba(0,0,0,.3);

    p {
        color: #444;
        text-align: center;
        font-size: 2.4vh;
    }

    p:nth-child(1) {
        font-size: 8vh;
        line-height: 6vh;
        margin-top: 1vh;
    }
    p:nth-child(2) {
        font-size: 3.7vh; 
        line-height: 3.6vh;
    }
    p:nth-child(3) {
        font-size: 6vh;
    }
    p:nth-child(4) {
        margin-top: 3vh;
        text-align: justify;
    }

`