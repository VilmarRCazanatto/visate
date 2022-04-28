import Link from "next/link";
import { useState } from "react";

import { SearchInputContainer, ScrollDiv, ListItemContainer } from './style'

export default function SearchInput({ linhas }) {
    const [searchedLinhas, setSearchedLinhas] = useState([])

    function handlerSearchType(searchText) {

        if (searchText.length == 0) {
            setSearchedLinhas(linhas)

            return
        }

        setSearchedLinhas(linhas.filter(linha => {
            let formated_name = linha.line + linha.name.toLowerCase()
            if (formated_name.indexOf(searchText.toLowerCase()) >= 0) return true
        }))
    }

    return (
        <SearchInputContainer>
            <input onKeyUp={e => handlerSearchType(e.target.value)} />
            <ScrollDiv>
                <ul>
                    {searchedLinhas.map(
                        ({ code, line, name }) => <ListItem key={code} line={line}>{name}</ListItem>)
                    }
                </ul>
            </ScrollDiv>
        </SearchInputContainer>
    )
}

function ListItem({ line, children }) {
    return (
        <li><Link href={`/horario/${line}`}><ListItemContainer><span>L{line}</span> {children}</ListItemContainer></Link></li>
    )
}