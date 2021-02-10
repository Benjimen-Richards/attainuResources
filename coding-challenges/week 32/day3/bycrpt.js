const bycrypt = require('bcrypt')

const Bycrypt = async () => {
    const password = "benjimen@123"
    // Hashing the string password using bycrypt
    const hashpassword = await bycrypt.hash(password, 8)
    console.log("hashed password===>", hashpassword)
    //comparing the given password with hashpassword
    const ismatch = await bycrypt.compare(password, hashpassword)
    console.log("ismatch ===>", ismatch)
}
Bycrypt()