import { useRouter } from 'next/router'

import BusTimeList from '../../components/BusTimeList'
import linhas from './../../static/linhas.json'
import saidas from './../../static/saidas.json'
import { MyApiHorarios } from './../../static/urls.json'

export default function Linha({ linha, data, err }) {
    const fallback = useRouter().isFallback

    console.log("Log (at [linha].js)", data, err)

    if (err) return (<div>404</div>)
    if (fallback) return (<div>Loadding...</div>)

    
    
    return (
        <>
            <BusTimeList linha={linha} data={data}/>
                
        </>
    )
}

export async function getStaticProps({ params }) {
    let filter_linhas = linhas.filter(l => l.line == params.linha)
    if (!filter_linhas.length) return { props: { err: 404 } }

    let linha = filter_linhas[0]

    const data = await fetch(`${MyApiHorarios.url}?linha_code=${linha.code}`)
        .then(r => r.json())

    linha = {
        name: linha.name,
        line: linha.line
    }

    data.saida = data.saida.map(s => saidas[s]) 

    return { props: { linha, data } }
}

export function getStaticPaths() {
    return { paths: [], fallback: true };
}