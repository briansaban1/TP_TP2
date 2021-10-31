import { db } from './src/config.js'

import { MongoClient } from 'mongodb'

const username = db.username
const password = db.password
const database = db.database

const cnxStr = `mongodb+srv://${username}:${password}@mymaincluster.eucl2.mongodb.net/${database}?retryWrites=true&w=majority`

const client = new MongoClient(cnxStr, { useNewUrlParser: true, useUnifiedTopology: true })

await client.connect()

const dbPersonas = client.db("ort_tp2").collection("personas")

console.log('me conecté!')

const persona = {
    nombre: 'marian',
    edad: 35
}

const result = await dbPersonas.insertOne(persona)

console.log(result)
console.log(persona)

const buscada = await dbPersonas.findOne({ nombre: 'marian' })
console.log(buscada)

await client.close()

console.log('me desconecté')
