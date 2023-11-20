const prisma = require('../db')
const bcrypt = require('bcrypt')


const Register = async (newUser) => {

    const encryptPass = await bcrypt.hash(newUser.password, 10)

    const user = await prisma.user.create({
        data: {
            email: newUser.email,
            password: encryptPass,
            name: newUser.name
        }
    })

    return user
}


const Login = async (userLogin) => {
    
    const user = await prisma.user.findMany({
        where: {
            email : userLogin.email,
            password : userLogin.password
        }
    })

    const encryptPass = await bcrypt.hash(userLogin.password, 10)

    const isPwValid = await bcrypt.compare( userLogin.password , encryptPass)

    if(!isPwValid){
        console.log("Password and Email Wrong")
    }
    console.log("user repo", user);
    return user

}


module.exports = {
    Register, 
    Login
}