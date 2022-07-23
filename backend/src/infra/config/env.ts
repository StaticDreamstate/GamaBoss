import "dotenv/config";

const ENV = {
  API_NAME: process.env.API_NAME as string,
  DB_HOST: process.env.DB_HOST as string,
  DB_PORT: Number(process.env.DB_PORT as string),
  DB_NAME: process.env.DB_NAME as string,
  KEY: process.env.KEY as string,
};

export default ENV;
