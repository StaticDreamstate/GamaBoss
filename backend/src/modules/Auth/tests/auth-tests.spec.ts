import server from "supertest";
import App from "../../../infra/App";
import { faker } from "@faker-js/faker";
import Clients from '../../../models/Clients'
import logger from "../../../infra/logger";

const payload: any = {
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    telefone: String(faker.phone.number()),
    whatsapp: String(faker.phone.number()),
}

let novoHash: string = "";
const usuario: any = payload;

beforeAll(() => {
    Clients.create(usuario);
    logger.debug(`[beforeAll] Início dos testes do módulo Auth. Usuário aleatório ${usuario.nome}`);
});

afterAll(() => {
    logger.debug(`[beforeAll] Fim dos testes do módulo Auth. Usuário ${usuario.nome} deletado.`);
    Clients.findOneAndDelete({ nome: usuario.nome });
});

describe("Testes do módulo Auth", () => {

    logger.debug("Testes da rota /login");

    test("Login de usuário já cadastrado", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/login").send({
            email: usuario.email,
            senha: usuario.senha,
        })
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/login] Login de usuário já cadastrado: ${response.statusCode}`);
    });

    test("Usuário não cadastrado tentando fazer login", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/login").send({
            email: faker.internet.email(),
            senha: faker.internet.password(),
        })
        expect(response.statusCode).toEqual(404);
        logger.debug(`[/login] Usuário não cadastrado tentando fazer login: ${response.statusCode}`);
    });

    test("Senha inválida", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/login").send({
            email: usuario.email,
            senha: faker.internet.password(),
        });
        expect(response.statusCode).toEqual(401);
        logger.debug(`[/login] Senha inválida: ${response.statusCode}`);
    });

    logger.debug("Testes da rota /reset-senha");

    test("Usuário não encontrado", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/reset-senha").send({
            email: faker.internet.email(),
        });
        expect(response.statusCode).toEqual(404);
        logger.debug(`[/reset-senha] Usuário não encontrado: ${response.statusCode}`);
    });

    test("Gerando novo hash para o usuário", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/reset-senha").send({
            email: usuario.email,
        });
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/reset-senha] Novo hash gerado: ${response.statusCode}`);

        if (response.statusCode === 200) {
            novoHash = response.body;
            console.log(novoHash);
        }
    });

    logger.debug("Testes da rota /recuperar-senha");

    test("Alterando a senha do usuário", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/recuperar-senha").send({
            token: novoHash,
            senha: faker.internet.password(),
        });
        expect(response.statusCode).toEqual(201);
        logger.debug(`[/recuperar-senha] Senha alterada: ${response.statusCode}`);
    });
    
    test("Repetindo a mesma senha", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/recuperar-senha").send({
            token: novoHash,
            senha: usuario.senha,
        });
        expect(response.statusCode).toEqual(400);
        logger.debug(`[/recuperar-senha] Senha repetida: ${response.statusCode}`);
    });
});