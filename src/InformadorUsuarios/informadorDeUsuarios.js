import axios from 'axios'

const USR_URL = 'https://randomuser.me/api/'

export default class InformadorDeUsuarios {
    async getInfo(){
        try {
            const {data} = await axios.get(USR_URL)
            return data 
        } catch (error) {
            throw new Error(`USR_ERROR: $ {error.message}`)
        }
    }
}