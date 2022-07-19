import Connection from "./Connection";
import ENV from "../infra/config/env";

const mongoDB = new Connection(`mongodb://${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_NAME}`);

export { mongoDB };