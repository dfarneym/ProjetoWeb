// Conexão com banco de dados

module.exports = {
    client: 'postgresql',
    connection: {
      database: 'seraquepresta',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
