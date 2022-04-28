import Link from 'next/link'

//React Icons
import { BiTimeFive } from 'react-icons/bi'
import { GoGear } from 'react-icons/go'
import { FaRoute } from 'react-icons/fa'

import { NavItemContainer } from "./style"

export default function Navbar({onclick}) {
    const nav_items = [
        {
            icon: <BiTimeFive />,
            text: "Horarios",
            href: "/horario"
        },
        {
            icon: <FaRoute />,
            text: "Rotas",
            href: "/rota"
        },
        {
            icon: <GoGear />,
            text: "Config",
            href: "/config",
            botton: true
        }
    ]

    return (
        <ul>
            {nav_items.map((item, i) => (
                <NavItem key={i} icon={item.icon} href={item.href} botton={item.botton} onclick={onclick}>{item.text}</NavItem>
            ))}
        </ul>
    )
}

function NavItem({ icon, children, href, button, onclick }) {
    return (
        <NavItemContainer>
            
                {icon}
                <Link href={href}><span onClick={onclick}>{children}</span></Link>

            
        </NavItemContainer>
    )
}