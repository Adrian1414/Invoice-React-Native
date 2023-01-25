const bcrypt = require('bcryptjs')

const hashPassword = password => {
    const salt = bcrypt.genSaltSync(8)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

const comparePassword = (email, password) => {
    const compare = bcrypt.compareSync(email, password)
    return compare
}

module.exports =  {hashPassword, comparePassword }