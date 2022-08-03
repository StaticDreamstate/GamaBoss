import winston from "winston";
import path from "path";

const logger = winston.createLogger({
    defaultMeta: {service: 'user-service'},
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.errors({stack: true})
    ),
    transports: [
        // new winston.transports.Console(),
        new winston.transports.File({filename: path.resolve("src", "infra", "logs", "errors.log"), 
        level: "error"}),
        new winston.transports.File({filename: path.resolve("src", "infra", "logs", "warns.log"), 
        level: "warn"}),
        new winston.transports.File({filename: path.resolve("src", "infra", "logs", "info.log"), 
        level: "info"}),
        new winston.transports.File({filename: path.resolve("src", "infra", "logs", "tests.log"), 
        level: "debug"}),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
  
  export default logger;