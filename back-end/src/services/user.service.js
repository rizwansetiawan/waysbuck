const {Register, Login} = require('../repository/user.repository')


const createUser = async(newUser) => {

    const user = await Register(newUser)

    return user
}


const findUser = async(userLogin) => {
    const user = await Login(userLogin)

    if(!user){
        throw Error('Cannot Find User')
    }
    console.log('user serv', user);
    return user
}

module.exports = {
    createUser,
    findUser
}