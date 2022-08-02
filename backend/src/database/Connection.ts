import { connect, Mongoose } from "mongoose";
import logger from "../infra/logger";

export default class Connection {
    private instance: Mongoose | undefined;
    private url_connection: string;

    constructor(url_connection: string) {
        this.url_connection = url_connection;
    }

    getInstance() {
        return this.instance;
    }

    async createConnection() {
        try {
            this.instance = await connect(this.url_connection);
            logger.info("[createConnection] Conexão com o banco de dados realizada.");
        } catch(error) {
            logger.error(`[createConnection] Conexão Recusada: ${error}`);
        } 
    }

}