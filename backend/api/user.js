const bcrypt = require('bcrypt-nodejs')

module.exports = app => { 
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
    
    //Função que ira criptografar a senha, ela recebe a senha e retorna o hash
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
    //Esse metodo vai servir para inserir e alterar um usuário já existente
    const save = async (req, res) => {
        const user = { ...req.body }
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
            equalsOrError(user.password, user.confirmPassword,
                'Senhas não conferem')
            
            //Confirmação se o usuario não já está cadastrado no banco
            const userFromDB = await app.db('users')
                .where({ email: user.email}).first()
            if(!user.id){
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
            
        } catch(msg){
            return res.status(400).send(msg)
        }
        //Criptografando a senha do usuário
        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))

        }

    }
    //Esse metodo get pega uma lista de todos os usuários do sistema
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}