import server from "supertest";
import App from "../infra/App";
import { faker } from "@faker-js/faker";
import logger from "../infra/logger";
import Clients from "../models/Clients";
import Pets from "../models/Pets";

const payload: any = {
    nome: faker.name.firstName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
    telefone: String(faker.phone.number()),
    whatsapp: String(faker.phone.number()),
}

let novoHash: string = "";
let plano: any;
const usuario: any = payload;

const pet: any = {
    nome: faker.name.firstName(),
    raca: faker.animal.dog(),
    sexo: faker.name.gender(true),
    idade: String(faker.datatype.number()),
    peso: String(faker.datatype.number()),
};

beforeAll(() => {
    logger.debug("[beforeAll] Início da bateria de testes.")
});

afterAll(() => {
    logger.debug("[beforeAll] Fim da bateria de testes.");
    Clients.findOneAndDelete(usuario._id);
    Pets.findOneAndDelete(pet._id);
});

describe("Bateria de testes integrados", () => {

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
        expect(response.statusCode).toEqual(201);
        logger.debug(`[/cadastro] Cadastro de cliente: ${response.statusCode}`);
    });

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

    logger.debug("Testes da rota /reset-senha");

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

    logger.debug("Teste da rota /cadastrar-pet/:id");

    test("Novo cadastro de pet", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post(`/cadastrar-pet/${usuario._id}/`).send({
            ...pet,
        });

        expect(response.statusCode).toEqual(201);
        logger.debug(`[/cadastrar-pet] Cadastro de pet: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /listar-pets/:dono");

    test("Pegando todos os pets de um determinado cliente", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).get(`/listar-pets/${pet.dono}`);
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/listar-pets/${pet.dono}] Retorno dos pets de ${pet.dono}: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /listar-pet/:id");

    test("Pegando um determinado pet pelo id", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).get(`/listar-pet/${pet._id}`);
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/listar-pet/${pet._id}] Retorno de um pet específico: ${pet._id} - ${response.statusCode}`);
    });

    logger.debug("Teste da rota /editar-pet/:dono/:id");

    test("Editando informações de um determinado pet", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });

        const newData: any = {
            nome: faker.name.firstName(),
            raca: faker.animal.dog(),
            sexo: faker.name.gender(true),
            idade: String(faker.datatype.number()),
            peso: String(faker.datatype.number()),
        };

        const instance = app.getInstance();
        const response = await server(instance).put(`/editar-pet/${usuario._id}/${pet._id}`).send({
            ...newData,
        });
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/editar-pet/${usuario._id}/${pet._id}] Edição das informações do pet ${pet._id}: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /novo-plano/:id");

    test("Criando um plano para um animal já cadastrado (pelo seu id)", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).post(`/novo-plano/${pet._id}`).send({
            vacina: true,
        });
        plano = response;
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/novo-plano/${pet._id}] Criação de novo plano: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /listar-plano/:id");

    test("Listando os dados de um plano por id", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });
        const instance = app.getInstance();
        const response = await server(instance).get(`/listar-plano/${plano._id}`);
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/listar-plano/${plano._id}] Dados do plano ${plano._id}: ${response.statusCode}`);
    });

    logger.debug("Teste da rota /atualizar-plano/:id");

    test("Editando informações de um determinado plano", async () => {
        const app = new App();
        await app.setup({
            test: true,
        });

        const newData: any = {
            vacina: true,
            emergencia: true,
            teleAtendimento: true,
        };

        const instance = app.getInstance();
        const response = await server(instance).put(`/atualizar-plano/${plano._id}/`).send({
            ...newData,
        });
        expect(response.statusCode).toEqual(200);
        logger.debug(`[/atualizar-plano/${plano._id}/] Edição das informações do plano ${plano._id}: ${response.statusCode}`);
    });

});