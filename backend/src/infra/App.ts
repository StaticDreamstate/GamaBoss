import Express, {Application} from "express";
import ENV from "../infra/config/env";

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
        
        if (options.test) {
          console.log("[OK] Teste de configuração.");
          console.log(`API: ${ENV.API_NAME}`);
          console.log(`Porta TCP: ${selectedPort}`);
          console.log("Saindo...");
          return;
        }

        this.instance.listen(selectedPort, () =>
          console.log(`[OK] API aguardando requisições... [Porta TCP ${selectedPort}]`)
        );
      }
    
      getInstance() {
        return this.instance;
      }  
    }