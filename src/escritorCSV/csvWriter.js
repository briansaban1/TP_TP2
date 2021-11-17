import createCsvWriter from 'csv-writer'

export default class Escritor{
    constructor(){
        this.createCsv = createCsvWriter.createObjectCsvWriter({
            path: "archivo.csv",
            header: [
                {id: 'titulo', title: 'Titulo'},
                {id: 'ubicacion', title: 'Ubicacion'},
                {id: 'rubro', title: 'Rubro'}
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
