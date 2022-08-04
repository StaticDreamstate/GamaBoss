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

const usuario: any = payload;

beforeAll(() => {
    logger.debug("[beforeAll] Início dos testes do módulo Cliente");
    Clients.create(usuario);
  });

afterAll(() => {
    logger.debug("[beforeAll] Fim dos testes do módulo Cliente");
    Clients.findOneAndDelete({nome: usuario.nome});
  });

describe("Testes do módulo Cliente", () => {

    logger.debug("Teste da rota /");

    test("Verificar se a API está de pé", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).get("/");
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/] Status da API: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /cadastro");

    test("Cadastro de cliente", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/cadastro").send({
            ...usuario,
        });
        //400 indica uma tentiva repetida de cadastro.
        //Ou seja, o cadastro já foi bem-sucedido em beforeAll.
        expect(response.statusCode).toEqual(400);
        logger.debug(`[/cadastro] Cadastro de cliente: ${response.statusCode}`);
    });

});