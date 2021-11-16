import Escritor from '../escritorCSV/csvWriter.js'

const e = new Escritor('./uploads')

export function getEscritor(){
    return e
}

export default {getEscritor};