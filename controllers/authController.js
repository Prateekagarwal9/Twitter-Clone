const authService = require("../services/authService");
const logger = require("../logger/logger");


const loginController = async (req, res) => {
  try {
    logger.userLogger.info("Request is Processing");
    var userCreds = await authService.fetchLoginCredentialsService(req.body);

    logger.userLogger.info("Request Processed Successfully");
    resultSet.message = "Success"
    res.set('Access-Control-Expose-Headers', '*');
    res.set('Authorization', "Bearer " + token);
    res.set('RefreshToken', refreshToken);
    res.status(200);
    res.send(resultSet);
  }
  catch (error) {
    logger.userLogger.error(`Error encountered: ${error}`);
    res.status(403);
    var message = { message: error.message };
    res.send(message);
  }
}

module.exports = {
  loginController
};