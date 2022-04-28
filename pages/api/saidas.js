const DOMAIN = 'http://localhost:3000'
const API = {
    LINHAS: '/api/linhas',
    HORARIOS: '/api/horarios',
}


let saidas = []

export default async function handler(req, res) {

    console.log({
        saidas_salvas: saidas.length,
        type: !saidas.length ? "fetch" : "cached"
    })

    if (!saidas.length) {

        let linha_codes = await fetch(`${DOMAIN + API.LINHAS}`).then(r => r.json())
        linha_codes = linha_codes.map(l => l.code)

        for (let c = 0; c < linha_codes.length; c++) {
            let horario = await fetch(`${DOMAIN + API.HORARIOS}?linha_code=${linha_codes[c]}&full=true`)
                .then(r => r.text())

            horario = horario.split('":[{')

            horario[0] = horario[0].split('{"')[1]

            if (horario.length == 3) horario[1] = horario[1].split('}],"')[1]

            horario.pop()

            if (!saidas.filter(s => s == horario[0]).length) saidas.push(horario[0])
            if (horario[1] && !saidas.filter(s => s == horario[1]).length) saidas.push(horario[1])
        }

    }

    res.status(200).json(saidas)
}