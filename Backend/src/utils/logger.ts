import winston from 'winston';
import { ElasticsearchTransport } from 'winston-elasticsearch';

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        //new winston.transports.File({ filename: 'logs/combined.log', level: 'info' }),
        new ElasticsearchTransport({
            level: 'info',
            indexPrefix: 'logs',
            clientOpts: {
                node: 'http://es01:9200',
                auth: {
                    username: 'elastic',
                    password: 'elastic'
                }
            },
        })
    ]
});

export default logger;