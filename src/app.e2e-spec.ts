import request from 'supertest';
import { app } from './app';

// esse teste vai simular uma requisição no app
test('[e2e] CreateLesson', async () => {
  const response = await request(app)
    .post('/lessons')
    .send({ title: 'Nova Aula' })

  // é esperado que o status da minha response seja 201
  expect(response.status).toBe(201);
  // verificando que no corpo da minha resposta não tenha o error
  expect(response.body.error).toBeFalsy();
});