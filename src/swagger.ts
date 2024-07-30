import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        title: 'MyProject Trainer',
        description: 'Esse é um diário de treino onde o atleta irá anotar os dados do seu treino',
    },
    host: 'localhost:3000',
    schemes: ['http'],
}

const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/app/routes/routes.ts']

swaggerAutogen()(outputFile, endpointsFiles, doc)