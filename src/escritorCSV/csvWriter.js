import createCsvWriter from 'csv-writer'

export default class Escritor{
    constructor(chosenPath){
        this.createCsv = createCsvWriter.createObjectCsvWriter({
            path: chosenPath,
            header: [
                {id: 'nombre', title: 'Nombre'},
                {id: 'ubicacion', title: 'Ubicacion'}
            ]
        })
    }
    
    async create(datos){
        try{
            await this.createCsv.writeRecords(datos)
        }catch(error){
            console.log(error)
        }
    }
}
