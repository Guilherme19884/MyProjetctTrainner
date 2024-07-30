import swaggerAutogen from 'swagger-autogen'
import swaggerUi from 'swagger-ui-express'

const doc = {
    info: {
        title: 'MyProject Trainer',
        description: 'Esse é um diário de treino onde o atleta irá anotar os dados do seu treino',
        contact: 'guilherme1984.araujo@gmail.com'
    },
    host: 'localhost:3001',
    schemes: ['http'],
}

const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/app/routes/routes.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc)

export default doc