import Express, { Application } from "express";
import ENV from "../infra/config/env";
import logger from "../infra/logger";
import detect from "detect-port";
import { mongoDB } from "../database";

type SetupOptions = {
  test?: boolean;
  port?: number;
};

export default class App {
  private instance: Application;
  private defaultPort: number = 4000;

  constructor() {
    this.instance = Express();
  }

  async setup(options: SetupOptions): Promise<void> {
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    await mongoDB.createConnection();

    if (options.test) {
      console.log("[OK] Teste de configuração.");
      console.log(`API: ${ENV.API_NAME}`);
      console.log(`Porta TCP: ${selectedPort}`);
      console.log(`Banco de dados: ${ENV.DB_NAME}`);
      console.log("Saindo...");
      logger.info("[setup] Teste de configuração executado.");
      return;
    }

    detect(selectedPort)
      .then(_port => {
        if (selectedPort == _port) {
          this.instance.listen(selectedPort, () => {
            console.log(`[OK] API aguardando requisições... [Porta TCP ${selectedPort}]`);
            logger.info("[setup] API em execução.");
          })
        } else {
          logger.warn("[setup] Conexão Recusada: Porta em Uso.");
        }
      })
      .catch(err => {
        logger.error("[setup] Conexão Recusada:" + err);
      });

  }

  getInstance() {
    return this.instance;
  }
}