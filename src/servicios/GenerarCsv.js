import createWriter from 'csv-writer'
//const createWriter = require('csv-writer').createObjectCsvWriter
export default class CsvWriter{
    constructor(chosenPath){
        
        this.createCsv = createWriter.createObjectCsvWriter({
            path: chosenPath,
            header: [
                {id: 'nombre', title: 'Nombre'},
                {id: 'ubicacion', title: 'Ubicacion'},
                {id: 'calificacion', title: 'Calificacion'}
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