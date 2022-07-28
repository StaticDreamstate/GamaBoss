import server from "supertest";
import App from "../../../infra/App";
import {faker} from "@faker-js/faker";

describe("POST /login", () => {

    test("Login de usuário já cadastrado", async () => {
        const app = new App();
            await app.setup({
                test: true,
              });
            const instance = app.getInstance();
            const response = await server(instance).post("/login").send({
                email: "golden@email.com",
                senha: "1234abcd",
            })
            expect(response.statusCode).toEqual(200);
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
            expect(response.statusCode).toEqual(400);
    });

    test("Senha inválida", async () => {
        const app = new App();
            await app.setup({
                test: true,
              });
            const instance = app.getInstance();
            const response = await server(instance).post("/login").send({
                email: "golden@email.com",
                senha: faker.internet.password(),
            })
            expect(response.statusCode).toEqual(401);
    });

});

