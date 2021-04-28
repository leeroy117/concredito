import { createPool, PoolOptions } from 'mysql2/promise';

export async function connect() {
    const config: PoolOptions = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'concredito',
        connectionLimit: 10
    };
    // Guardando objeto de coneccion en variable connection
    const connection = await createPool(config);

    return connection;
}