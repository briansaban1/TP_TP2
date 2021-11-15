import express from 'express'
import { routerPersonas } from './rutas/routerPersonas.js'

export function crearServidor() {

    const app = express()

    app.use(express.json())

    app.use('/api/personas', routerPersonas)

    let server

    return {
        conectar: (puerto = 0) => {
            return new Promise((resolve, reject) => {
                server = app.listen(puerto)
                server.on('request', request => { console.log(`${new Date().toLocaleString()}: ${request.method} ${request.url}`) })
                server.on('listening', () => { resolve(server) })
                server.on('error', error => { reject() })
            })
        },
        desconectar: () => {
            return new Promise((resolve, reject) => {
                server.close(error => {
                    if (error) reject(error)
                    else resolve()
                })
            })
        }
    }
}

export default ( crearServidor);