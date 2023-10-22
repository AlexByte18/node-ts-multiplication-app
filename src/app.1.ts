import { writeFileSync, mkdirSync } from "fs"
import { yarg } from "./config/plugins/yargs.plugin"


let outputMessage = ''
const {b:base, l:limit, s:showTable} = yarg
const headerMessage = `
+++++++++++++++++++++++++++++++
        Tabla del ${base}
+++++++++++++++++++++++++++++++\n
`


for(let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`
}

outputMessage = headerMessage + outputMessage

const outputPat = `outputs`

mkdirSync(outputPat, {recursive: true})

writeFileSync(`${outputPat}/tabla-${base}.txt`, outputMessage)

if (showTable) {
    console.log(outputMessage)
}