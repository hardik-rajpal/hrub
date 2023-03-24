import { ConnectionOptions } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE,DB_SQLITEPATH } from '@config';
import { readFileSync } from 'fs';
// console.log(__dirname)
// const ormconfig = readFileSync(join(__dirname,'../../ormconfig.json'),'utf-8');
// export const dbConnection: ConnectionOptions = JSON.parse(ormconfig);
export const dbConnection:ConnectionOptions = {
    type:'sqlite',
    database:'db.sqlite3',
    synchronize:false,
    logging:false,
    entities:["src/entities/*{.ts,.js}"],
    migrations:["src/migration/*{.ts,.js}"],
    cli:{
        entitiesDir:'src/entities',
        migrationsDir:'src/migration',
    }
}