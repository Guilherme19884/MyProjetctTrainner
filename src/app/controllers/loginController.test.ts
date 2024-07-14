import request from 'supertest';
import express, { Application } from 'express';
import { AppDataSource } from '../../database/data-source';
import routers from '../routes/routes';
import UserRepository from '../repositories/UserRepository';
import User from '../entities/User';

let app: Application;

beforeAll(async () => {
    await AppDataSource.initialize();

    app = express();
    app.use(express.json());
    app.use('/', routers);

    // Inserir um usuário de teste no banco de dados
    // const userRepository = AppDataSource.getRepository(User);
    // const user = new User();
    // user.name = 'Nadir Santos';
    // user.email = 'nadir@gmail.com';
    // user.password = '1213456';
    // await userRepository.save(user);
});

afterAll(async () => {
    await AppDataSource.destroy();
});

describe('LoginController', () => {
    it('should return a token for valid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({ email: 'nadir@gmail.com', password: '1213456' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should return 401 for invalid credentials', async () => {
        const response = await request(app)
            .post('/login')
            .send({ email: 'nadir@gmail.com', password: 'wrongpassword' });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('error', 'Usuário não encontrado ou senha incorreta');
    });
});
