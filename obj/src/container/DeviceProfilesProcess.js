"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const DeviceProfilesServiceFactory_1 = require("../build/DeviceProfilesServiceFactory");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class DeviceProfilesProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("device_profiles", "Device profiles microservice");
        this._factories.add(new DeviceProfilesServiceFactory_1.DeviceProfilesServiceFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
    }
}
exports.DeviceProfilesProcess = DeviceProfilesProcess;
//# sourceMappingURL=DeviceProfilesProcess.js.map