"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const DeviceProfilesServiceFactory_1 = require("../build/DeviceProfilesServiceFactory");
class DeviceProfilesLambdaFunction extends pip_services3_aws_node_1.CommandableLambdaFunction {
    constructor() {
        super("device_profiles", "Device profiles function");
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('iqs-services-deviceprofiles', 'controller', 'default', '*', '*'));
        this._factories.add(new DeviceProfilesServiceFactory_1.DeviceProfilesServiceFactory());
    }
}
exports.DeviceProfilesLambdaFunction = DeviceProfilesLambdaFunction;
exports.handler = new DeviceProfilesLambdaFunction().getHandler();
//# sourceMappingURL=DeviceProfilesLambdaFunction.js.map