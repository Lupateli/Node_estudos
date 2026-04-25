const mongoose = require('mongoose')

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@projetonodejs.n8d6xd9.mongodb.net/?appName=ProjetoNodeJs`
        )

        console.log("Conectado ao banco de dados com sucesso")
    } catch (error) {
        console.log("Ocorreu um erro ao se conectar com o banco:", error)
    }
}

module.exports = connectToDataBase