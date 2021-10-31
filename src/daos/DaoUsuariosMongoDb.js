import DaoUsuarios from './DaoUsuarios.js'
import { db } from '../config.js'
import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database
const serverUrl = db.serverUrl

const cnxStr = `mongodb+srv://${username}:${password}@${serverUrl}/${database}?retryWrites=true&w=majority`

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })

await client.connect()

class DaoUsuariosMongoDb extends DaoUsuarios {

    constructor() {
        super()
        this.usuarios = client.db("ort_tp_db").collection("usuarios")
    }

    async buscar(id) {
        let buscada
        try {
            buscada = await this.usuarios.findOne({ id })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }

        delete buscada._id

        return buscada
    }

    async insertar(usuario) {
        try {
            await this.usuarios.insertOne({ id: usuario.id }, { ...usuario }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

    async guardar(usuario) {
        try {
            await this.usuarios.replaceOne({ id: usuario.id }, { ...usuario }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

    async eliminar(usuario) {
        try {
            await this.usuarios.deleteOne({ id: usuario.id }, { ...usuario }, { upsert: true })
        } catch (error) {
            throw new Error('DB_ERROR: ' + error.message)
        }
    }

}

export default DaoUsuariosMongoDb