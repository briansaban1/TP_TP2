import { getEscritor } from '../escritorCSV/index.js'

const e = getEscritor()

export async function obtenerCsvServicio(datos){
    const csv = await e.create(datos)
}
