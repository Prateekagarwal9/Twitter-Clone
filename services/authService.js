const azureSqlDb = require('../dataAccess/azureSQLDB')
var crypto = require('crypto');

const fetchLoginCredentialsService = async (requestBodyParameters) => {
    userCreds = await azureSqlDb.retrieveItemsFromDB('FetchLoginCredentials', requestBodyParameters)
    if (userCreds.length > 0) {
        return userCreds;
    }
    throw ('Invalid Credentials');

}


module.exports = {
    fetchLoginCredentialsService
}