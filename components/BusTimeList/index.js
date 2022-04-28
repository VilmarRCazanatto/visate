import { useState } from "react"
import { BusTimeListContainer } from "./style"

export default function BusTimeList({ linha, data }) {

    const [saida, setSaida] = useState(0)

    const sec2h = seconds => {
        let h = parseInt(seconds / 60 / 60)
        h = (h < 10 ? "0" : "") + h

        let m = (seconds / 60) % 60
        m = (m < 10 ? "0" : "") + m

        return `${h}:${m}`
    }
    const currentSecond = () => {
        let d = new Date()
        d /= 1000
        d = parseInt(d)
        
        d -= 60*60*3

        d %= 60*60*24

        return d
    }


    return (
        <BusTimeListContainer selected={(() => {
            let horarios = data.horarios[saida]
            let selected = horarios.findIndex(seconds => seconds > currentSecond())

            return selected < 0 ? horarios.length + 1 : selected + 1
        })()}>

            <h2>{linha.name}</h2>

            {data.saida.map((s, i) => (
                <button key={i} className={saida == i ? "selected_saida" : ""} value={i} onClick={function (e) {
                    setSaida(e.target.value)
                }}>{s}</button>
            ))}

            <ul><div>
                <li>----</li>
                {data.horarios[saida].map((seconds, i) => (
                    <li key={i}>{sec2h(seconds)}</li>
                ))}
                <li>----</li>
            </div></ul>

            <button>Ver todos horarios</button>          
        </BusTimeListContainer>
    )
}