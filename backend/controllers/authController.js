const authService = require("../services/authService");
const requestParameterValidation = require("../validation/validateParameters");
const { 
  v1: uuidv1,
  v4: uuidv4,
} = require('uuid');

const registerController = async (req, res) => {
  try {
    console.log("Request Processing");
    var id = uuidv1();
    req.body.id = id;
    var requestBody = await requestParameterValidation.validateRegisterParmeters(req.body);
    console.log(requestBody);
    var response = await authService.registerUserService(requestBody);
    var resultSet = {
      "following": [],
      "followers": [],
      "likedTweets": [],
      "tweets": [],
      "bookmarks": [],
      "username" : "",
      "__v": 0
  }
  var date = new Date().toString()
  resultSet["username"] = req.body.username;
  resultSet["name"] = req.body.name;
  resultSet["password"] = req.body.password;
  resultSet["joinedDate"] = date;
  resultSet["_id"] = id;  
    resultSet.message = "Success"
    res.set('Access-Control-Expose-Headers', '*');
    res.status(200);
    res.send(resultSet);
  }
  catch (error) {
    res.status(403);
    console.log(error);
    var message = { message: error };
    res.send(message);
  }
}

const loginController = async (req, res) => {
  try {
    console.log("Request Processing");
    var requestBody = await requestParameterValidation.validateLoginParmeters(req.body);
    console.log(requestBody);
    var response = await authService.loginUserService(requestBody);
    console.log(response);
    if(response.length !=0 && response[0].Password == req.body.password)
    {
      var resultSet = {
        "foundUser": {
            "following": [],
            "followers": [],
            "likedTweets": [],
            "tweets": [],
            "bookmarks": [],
            "__v": 0
        }
    }
    var date = new Date().toString()
    resultSet.foundUser["username"] = response[0].UserName;
    resultSet.foundUser["name"] = response[0].Name;
    resultSet.foundUser["password"] = response[0].Password;
    resultSet.foundUser["email"] = response[0].Email;
    resultSet.foundUser["joinedDate"] = date;
    resultSet.foundUser["_id"] = response[0].Id;
  }
    else
    {
      var resultSet = {
        "foundUser": null
      }
    }

  
    res.set('Access-Control-Expose-Headers', '*');
    res.status(200);
    res.send(resultSet);
  }
  catch (error) {
    res.status(403);
    console.log(error);
    var message = { message: error };
    res.send(message);
  }
}


module.exports = {
  registerController,
  loginController
};