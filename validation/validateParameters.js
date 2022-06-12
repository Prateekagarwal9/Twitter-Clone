const sql = require('mssql').TYPES

const validateRegisterParmeters = async (requestBody) => {
    var requestBodyParameters = []

    requestBodyParameters.push({ name: 'Id', type: sql.NVarChar, value: requestBody.id});
    requestBodyParameters.push({ name: 'Name', type: sql.NVarChar, value: requestBody.name});
    requestBodyParameters.push({ name: 'UserName', type: sql.NVarChar, value: requestBody.username});
    requestBodyParameters.push({ name: 'Email', type: sql.NVarChar, value: requestBody.email});
    requestBodyParameters.push({ name: 'Password', type: sql.NVarChar, value: requestBody.password});
    console.log(requestBodyParameters);
    return requestBodyParameters;
}

const validateLoginParmeters = async (requestBody) => {
    var requestBodyParameters = []

    requestBodyParameters.push({ name: 'UserName', type: sql.NVarChar, value: requestBody.usernameOrEmail});
    
    console.log(requestBodyParameters);
    return requestBodyParameters;
}


const updateUserParameter = async (requestBody) => {
    var requestBodyParameters = []

    requestBodyParameters.push({ name: 'Name', type: sql.NVarChar, value: requestBody.newInfos.name});
    requestBodyParameters.push({ name: 'Email', type: sql.NVarChar, value: requestBody.newInfos.mail});
    requestBodyParameters.push({ name: 'Website', type: sql.NVarChar, value: requestBody.newInfos.website});
    requestBodyParameters.push({ name: 'Location', type: sql.NVarChar, value: requestBody.newInfos.location});
    requestBodyParameters.push({ name: 'ProfileImage', type: sql.NVarChar, value: requestBody.newInfos.profileImage});
    requestBodyParameters.push({ name: 'BannerImage', type: sql.NVarChar, value: requestBody.newInfos.bannerImage});
    requestBodyParameters.push({ name: 'Id', type: sql.NVarChar, value: requestBody.userId});
    
    console.log(requestBodyParameters);
    return requestBodyParameters;
}

const validateUserParmeters = async (requestBody) => {
    var requestBodyParameters = []

    requestBodyParameters.push({ name: 'UserName', type: sql.NVarChar, value: requestBody.username});
    
    console.log(requestBodyParameters);
    return requestBodyParameters;
}

const newTweetParameter = async (requestBody) => {
    var requestBodyParameters = []
    requestBodyParameters.push({ name: 'TweetId', type: sql.NVarChar, value: requestBody.tweetId});
    requestBodyParameters.push({ name: 'Text', type: sql.NVarChar, value: requestBody.tweetContent.text});
    requestBodyParameters.push({ name: 'TweetImage', type: sql.NVarChar, value: requestBody.tweetContent.tweetImage});
    requestBodyParameters.push({ name: 'Author', type: sql.NVarChar, value: requestBody.tweetContent.author});
    
    console.log(requestBodyParameters);
    return requestBodyParameters;
}


module.exports = {
    validateRegisterParmeters,
    validateLoginParmeters,
    validateUserParmeters,
    updateUserParameter,
    newTweetParameter
};