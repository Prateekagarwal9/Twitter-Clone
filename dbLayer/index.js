const sql = require('mssql');

/**
 * create sql connection
 */
function createSqlConnection(connectionConfig) {
    return new sql.ConnectionPool(connectionConfig);
}

/**
 * async call stored procedure from sql database from sql database
 */
async function callStoredProcedure(connection, storedProcedure, parameters, returnOutputParameters = false) {
    try {
        await connection.connect();
        let request = connection.request();

        parameters.forEach(param => {
            if (param.type !== undefined) {
                if (param.output == true) {
                    request.output(param.name, param.type, param.value);
                }
                else {
                    request.input(param.name, param.type, param.value);
                }
            }
        });

        let result = await request.execute(`dbo.${storedProcedure}`);

        let response;

        if (returnOutputParameters == true) {
            response = {
                dbItemsList: result.recordset,
                outputParameters: result.output
            }
        }
        else {
            response = result.recordset
        }
        return response;
    }
    catch (error) {
        console.log(error);
        throw new error;
    }

}


module.exports = {
    createSqlConnection: createSqlConnection,
    callStoredProcedure: callStoredProcedure
}