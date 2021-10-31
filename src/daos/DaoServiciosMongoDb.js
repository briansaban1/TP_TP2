import DaoServicios from './DaoServicios.js'
import { db } from '../config.js'
import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database
const serverUrl = db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })

await client.connect()

class DaoServiciosMongoDb extends DaoServicios {

    constructor() {
        super()
        this.servicios = client.db("ort_tp_db").collection("servicios")
    }

    async buscar(id) {
        let buscada
        try {
            buscada = await this.servicios.findOne({ id })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }

        delete buscada._id

        return buscada
    }

    async insertar(servicio) {
        try {
            await this.servicios.insertOne({ id: servicio.id }, { ...servicio }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

    async guardar(servicio) {
        try {
            await this.servicios.replaceOne({ id: servicio.id }, { ...servicio }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

    async eliminar(servicio) {
        try {
            await this.servicios.deleteOne({ id: servicio.id }, { ...servicio }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

}

export default DaoServiciosMongoDb