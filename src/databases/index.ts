import { DB_SQLITEPATH } from '../config/index';
import { ConnectionOptions } from 'typeorm';
export const dbConnection:ConnectionOptions = {
    type:'sqlite',
    database:DB_SQLITEPATH,
    synchronize:false,
    logging:false,
    entities:["src/entities/*{.ts,.js}"],
    migrations:["src/migration/*{.ts,.js}"],
    cli:{
        entitiesDir:'src/entities',
        migrationsDir:'src/migration',
    }
}