let DeviceProfilesLambdaFunction = require('../obj/src/container/DeviceProfilesLambdaFunction').DeviceProfilesLambdaFunction;

module.exports = new DeviceProfilesLambdaFunction().getHandler();