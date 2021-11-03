import CsvWriter from '../src/servicios/GenerarCsv.js'

const records = [
    {nombre: 'Lo de Jorge', ubicacion: 'Calle falsa 123', calificacion: '9'},
    {nombre: 'Lo de Martin', ubicacion: 'Tincho 1010', calificacion: '3'},
    {nombre: 'Lo de Mariano', ubicacion: 'Profe 2021', calificacion: '10'}
]
const escritor = new CsvWriter('pito.csv')
try{
    await escritor.create(records)
    console.log('done')
}catch(error){
    console.log(error)
}