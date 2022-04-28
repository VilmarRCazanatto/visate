import { useState } from "react"
import Link from "next/link"

//Component
import { DrawerButton, Navbar } from "../"
//Styled Component
import { HeaderContainer, HeaderTop } from "./style"

export default function Header() {
    const [expanded, setExpanded] = useState(false)

    const EXPANDED_HEADER_HEIGHT = 296 //altura em vh

    
    if (typeof window != "undefined") {
        window.onclick = ({clientY}) => {
            if (!expanded) return

            if (clientY > EXPANDED_HEADER_HEIGHT ) {
                setExpanded(false)
            }
        }
    }


    return (
        <HeaderContainer expanded={expanded} height={EXPANDED_HEADER_HEIGHT}>
            <HeaderTop>
                <DrawerButton onclick={() => setExpanded(!expanded)} />
                <Link href="/"><h1 onClick={() => setExpanded(false)}>Visate Min</h1></Link>
            </HeaderTop>
            <Navbar onclick={() => setExpanded(false)} />
        </HeaderContainer>
    )
}

