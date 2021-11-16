import Escritor from 'csvWriter.js'

const e = new Escritor('./uploads')

export default function getEscritor(){
    return e
}