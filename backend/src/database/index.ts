import Connection from "./Connection";
import ENV from "../infra/config/env";


if (ENV.NODE_ENV !== "production") {
    const mongoDB = new Connection(`${ENV.MONGODB_URL}`);
  }
  
const mongoDB = new Connection(`mongodb://${ENV.DB_HOST}:${ENV.DB_PORT}/${ENV.DB_NAME}`);

export { mongoDB };