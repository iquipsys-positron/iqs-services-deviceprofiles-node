"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_data_node_1 = require("pip-services3-data-node");
const DeviceProfilesMemoryPersistence_1 = require("./DeviceProfilesMemoryPersistence");
class DeviceProfilesFilePersistence extends DeviceProfilesMemoryPersistence_1.DeviceProfilesMemoryPersistence {
    constructor(path) {
        super();
        this._persister = new pip_services3_data_node_1.JsonFilePersister(path);
        this._loader = this._persister;
        this._saver = this._persister;
    }
    configure(config) {
        super.configure(config);
        this._persister.configure(config);
    }
}
exports.DeviceProfilesFilePersistence = DeviceProfilesFilePersistence;
//# sourceMappingURL=DeviceProfilesFilePersistence.js.map