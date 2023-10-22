import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"

interface runOptions {
    base: number
    limit:number
    showTable: boolean,
    fileName?: string,
    fileDestination?: string
}

export class ServerApp {


    static run({base, limit, showTable, fileName, fileDestination}: runOptions) {
        console.log('server running...')

        const table = new CreateTable().execute({base, limit})
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            destination: `${fileDestination}/${fileName}`
        })

        if (showTable) console.log({table});

        (wasCreated) ? console.log('file created') : console.log('file not created')
    }
}