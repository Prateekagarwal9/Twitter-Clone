const dbLayer = require('../dbLayer');

var azureSQLDBConnection = {
    connection: null,
    init: async function () {
        return new Promise((resolve, reject) => {
            try {
                // Check connection if already exists return else create new connection
                if (!this.connection) {
                        let connectionConfig = {
                            user: process.env.DB_USER,
                            password: process.env.DB_PWD,
                            database: process.env.DB_NAME,
                            server: process.env.DB_SERVER,
                            pool: {
                                max: 10,
                                min: 0,
                                idleTimeoutMillis: 30000
                            },
                            options: {
                                encrypt: true, // for azure
                                trustServerCertificate: false // change to true for local dev / self-signed certs
                            }
                        }

                        this.connection = dbLayer.createSqlConnection(connectionConfig);
                        resolve(this.connection);
                } else {
                    // Return existing connection 
                    resolve(this.connection);
                }
            } catch (error) {
                this.connection = null;
                reject(new error);
            }
        });
    }
};
module.exports = azureSQLDBConnection;