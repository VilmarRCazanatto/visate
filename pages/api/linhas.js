export default async function handler(req, res) {
    const LINE_COUNT = 76

    try {

        const html = await fetch('https://editor.mobilibus.com/web/bus2you/230tf#')
            .then(response => response.text())


        let options = html.split('</option>')

        options = options.filter((o, i) => !(i == 0 || i > LINE_COUNT))
        options = options.map(o => o.split('<option')[1])

        let lines = options.map(o => {
            let code, line, name

            code = o.split('value="')[1].split('"')[0]
            line = o.split(`${code}">`)[1].split(' - ')[0]
            name = o.split(' - ')[1]

            let formated_line = ""
            for(let c = 0; c < line.length; c++) {
                if (Number.isInteger(Number(line[c]))) formated_line += line[c]
            }            
            line = formated_line

            if (code == "p4r") line = "t01"

            return { code, line, name }
        })

        res.status(200).json(lines)

    }
    catch (err) {
        console.log(err)
        res.status(500)
    }
}