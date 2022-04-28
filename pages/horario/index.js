import { useState } from 'react'

import { CustomHead as Head, SearchInput } from "../../components"
import linhas from './../../static/linhas.json'

export default function Horario({ linhas }) {
    return (
        <>
            <Head route_title={'Horarios'} />

            <SearchInput linhas={linhas} />



        </>
    )
}

export async function getStaticProps() {
    

    return {
        props: {
            linhas
        }
    }
}