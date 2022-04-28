import { VisateHorarios } from './../../static/urls.json'
import saidas from './../../static/saidas.json'
import linhas from './../../static/linhas.json'

const getToday = () => {
    let objDate = new Date()
    return [
        objDate.getFullYear(),
        objDate.getMonth() + 1,
        objDate.getDate()
    ].join('-')
}

export default async function handler(req, res) {
    let { linha_code, date, full } = req.query
    let URL = VisateHorarios.url

    if (
        !linha_code ||
        !linhas.filter(l => l.code == linha_code).length ||
        date &&
        Number.isNaN(new Date(date).getTime())
    ) res.status(400).json([])

    let data = {
        "route": linha_code,
        "day": date ? date : getToday(),
        "project": "230tf"
    }


    let response = await fetch(
        URL,
        {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
            method: "POST"
        }
    ).then(r => r.json())

    if (!full) {
        let saida = []
        let horarios = []

        saidas.forEach((s, i) => {

            if (response[s]) {
                saida.push(i)

                horarios.push(response[s].map(h => h.seconds))
            }

        })

        if (!saida.length) {
            saida.push(-1)
            horarios.push([])
        }

        response = { saida, horarios }
    }


    res.status(200).json(response)
}