var azureSQLDBConnection = require('./azureSQLDBConnection');
const db = require('./db');

module.exports.retrieveItemsFromDB = async (storedProcedure, parameters) => {
    try {
        // Initialize SQL Server Connection
        let connection = await azureSQLDBConnection.init();
        // Retrieve Records From SQL Server DB
        let dbItemsList = await db.callStoredProcedure(connection, storedProcedure, parameters);
        return dbItemsList;
    }
    catch (error) {
        console.log('error occurred while fetching items from database - ', error);
        throw new error
    }
}