import server from "supertest";
import App from "../../../infra/App";
import { faker } from "@faker-js/faker";
import Pets from "../../../models/Pets"
import logger from "../../../infra/logger";

const payload: any = {
    nome: faker.name.firstName(),
    dono: faker.name.firstName(),
    raca: faker.animal.dog(),
    sexo: faker.name.gender(true),
    idade: String(faker.datatype.number()),
    peso: String(faker.datatype.number()),
}

const pet: any = payload;

beforeAll(() => {
    Pets.create(pet);
    logger.debug(`[beforeAll] Início dos testes do módulo Pet. Pet aleatório ${pet.nome} criado.`);
});

afterAll(() => {
    logger.debug(`[beforeAll] Fim dos testes do módulo Pet. Pet ${pet.nome} deletado.`);
    Pets.findOneAndDelete({ nome: pet.nome });
});

describe("Testes do módulo Pet", () => {

    logger.debug("Teste da rota /cadastrar-pet");

    test("Login de usuário já cadastrado", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post("/cadastrar-pet").send({
          ...pet,
        })
         //400 indica uma tentiva repetida de cadastro.
        //Ou seja, o cadastro já foi bem-sucedido em beforeAll.
        expect(response.statusCode).toEqual(400);
        logger.debug(`[/cadastrar-pet] Tentativa de pet já cadastrado: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /listar-pets/:dono");

    test("Pegando todos os pets de um determinado cliente", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post(`/listar-pets/${pet.dono}`);
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/listar-pets/${pet.dono}] Retorno dos pets de ${pet.dono}: ${response.statusCode}`);
    });
});