const azureSqlDb = require('../dataAccess/azureSQLDB')
var crypto = require('crypto');


const registerUserService = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('InsertUserDetails', requestBodyParameters)

}

const loginUserService = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('FetchUserDetails', requestBodyParameters)

}

const updateUserService = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('UpdateUserDetails', requestBodyParameters)

}

const insertTweetService = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('InsertTweet', requestBodyParameters)

}

const tweetListService = async (requestBodyParameters) => {
    return resultSet = await azureSqlDb.retrieveItemsFromDB('TweetList', requestBodyParameters)

}

module.exports = {
    registerUserService,
    loginUserService,
    updateUserService,
    insertTweetService,
    tweetListService
}