import server from "supertest";
import App from "../../../infra/App";
import {faker} from "@faker-js/faker";

describe("GET /", () => {

    test("Verifica se a API está executando.", async () => {
        const app = new App();
        await app.setup({
            test: true,
          });
        const instance = app.getInstance();
        const response = await server(instance).get("/");
        expect(response.statusCode).toEqual(200);
    });

});

describe("POST /cadastro", () => {

    describe("Cadastro parcial", () =>{

        test("Deve retornar um status 201 em caso de sucesso.", async () => {
            const app = new App();
            await app.setup({
                test: true,
              });
            const instance = app.getInstance();
            const response = await server(instance).post("/cadastro").send({
                nome: faker.name.firstName(),
                email: faker.internet.email(),
                senha: faker.internet.password(),
            })
            expect(response.statusCode).toEqual(201);
        });

        test("Cadastro de usuário repetido.", async () => {
            const app = new App();
            await app.setup({
                test: true,
              });
            const instance = app.getInstance();
            const response = await server(instance).post("/cadastro").send({
                nome: "golden",
                email: "golden@email.com",
                senha: faker.internet.password(),
            })
            expect(response.statusCode).toEqual(400);
        });

    });

});