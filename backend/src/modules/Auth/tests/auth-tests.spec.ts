// import server from "supertest";
// import App from "../../../infra/App";
// import {faker} from "@faker-js/faker";
// import Clients from '../../../models/Clients'
// import { IClient } from '../../../models/Clients'

// let novoHash: string = "";
// let user: IClient = undefined;

// beforeAll(async () => {
//     user = await Clients.create(payload)

// });
// afterAll(async ()=>{
//     await Clientes.findOneAndDelete({_id: user._id})
// })
// describe("POST /login", () => {

//     test("Login de usuário já cadastrado", async () => {
//         const app = new App();
//             await app.setup({
//                 test: true,
//               });
//             const instance = app.getInstance();
//             const response = await server(instance).post("/login").send({
//                 email: "golden@email.com",
//                 senha: "1234abcd",
//             })
//             expect(response.statusCode).toEqual(200);
//     });

//     test("Usuário não cadastrado tentando fazer login", async () => {
//         const app = new App();
//             await app.setup({
//                 test: true,
//               });
//             const instance = app.getInstance();
//             const response = await server(instance).post("/login").send({
//                 email: faker.internet.email(),
//                 senha: faker.internet.password(),
//             })
//             expect(response.statusCode).toEqual(400);
//     });

//     test("Senha inválida", async () => {
//         const app = new App();
//             await app.setup({
//                 test: true,
//               });
//             const instance = app.getInstance();
//             const response = await server(instance).post("/login").send({
//                 email: "golden@email.com",
//                 senha: faker.internet.password(),
//             })
//             expect(response.statusCode).toEqual(401);
//     });

// });

// describe("POST /reset-senha", () => {

//     test("Usuário não encontrado", async () => {
//         const app = new App();
//             await app.setup({
//                 test: true,
//               });
//             const instance = app.getInstance();
//             const response = await server(instance).post("/reset-senha").send({
//                 email: faker.internet.email(),
//             })
//             expect(response.statusCode).toEqual(404);
//     });

//     test("Gerando novo hash para o usuário", async () => {
//         const app = new App();
//             await app.setup({
//                 test: true,
//               });
//             const instance = app.getInstance();
//             user.emaiol
//             const response = await server(instance).post("/reset-senha").send({
//                 email: "golden@email.com",
//             })
//             expect(response.statusCode).toEqual(200);

        

//             if(response.statusCode === 200) {
//                 novoHash = response.body;
//                 console.log(novoHash);
//              }
//     });

// });
