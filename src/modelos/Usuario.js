import bcrypt from "bcryptjs";

class Usuario {
    constructor(id, nombre, apellido, usuario, password, email, tipo) {
        this.id = id
        this.setNombre(nombre)
        this.setApellido(apellido)
        this.setUsuario(usuario)
        this.setPassword(password)
        this.setEmail(email)
        this.setTipo(tipo)
    }

    setTipo(tipo) {
        if (!tipo || tipo == '') {
            throw new Error('el password no puede ser nulo ni vacío')
        }
        this.tipo = tipo
    }

    setEmail(email) {
        if (!email || email == '') {
            throw new Error('el password no puede ser nulo ni vacío')
        }
        this.email = email
    }

    setPassword(password) {
        if (!password || password == '') {
            throw new Error('el password no puede ser nulo ni vacío')
        }
        this.password = password
    }

    setUsuario(usuario) {
        if (!usuario || usuario == '') {
            throw new Error('el usuario no puede ser nulo ni vacío')
        }
        this.usuario = usuario
    }

    setNombre(nombre) {
        if (!nombre || nombre == '') {
            throw new Error('el nombre no puede ser nulo ni vacío')
        }
        this.nombre = nombre
    }

    setApellido(apellido) {
        if (!apellido || apellido == '') {
            throw new Error('el apellido no puede ser nulo ni vacío')
        }
        this.apellido = apellido
    }

    static ultimoId = 0

    static nextId() {
        return ++Usuario.ultimoId
    }

    /**
     * Encriptar password
     * @param {String} password 
     * @returns 
     */
    static encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    }

    /**
     * Compara la contraseña que ingresada por el usuario si es correcta con el encriptado
     * @param {String} password 
     * @param {String} receivedPassword 
     * @returns 
     */
    static comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
    }
}

function fromDTO(dto) {
    return new Usuario(dto.id, dto.nombre, dto.apellido, dto.usuario, dto.password, dto.email, dto.tipo)
}

function toDTO(usuario) {
    return {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        usuario: usuario.usuario,
        password: usuario.password,
        email: usuario.email,
        tipo: usuario.tipo
    }
}

export { fromDTO, toDTO }

export default Usuario