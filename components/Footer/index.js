import styled from "styled-components";

const FooterContainer = styled.p`
    font-size: 16px;
    bottom: 7px;
    width: 100%;
    color: #333;
    text-align: center;
`

export default function Footer () {
    return <FooterContainer>by Vilmar Cazanatto &copy;</FooterContainer>
}