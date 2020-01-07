"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
let async = require('async');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const BaseDeviceProfilesV1_1 = require("../data/version1/BaseDeviceProfilesV1");
const DeviceProfilesCommandSet_1 = require("./DeviceProfilesCommandSet");
class DeviceProfilesController {
    constructor() {
        this._dependencyResolver = new pip_services3_commons_node_2.DependencyResolver(DeviceProfilesController._defaultConfig);
    }
    configure(config) {
        this._dependencyResolver.configure(config);
    }
    setReferences(references) {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired('persistence');
    }
    getCommandSet() {
        if (this._commandSet == null)
            this._commandSet = new DeviceProfilesCommandSet_1.DeviceProfilesCommandSet(this);
        return this._commandSet;
    }
    getBaseProfiles(correlationId, callback) {
        callback(null, BaseDeviceProfilesV1_1.BaseDeviceProfilesV1);
    }
    getProfiles(correlationId, filter, paging, callback) {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }
    getProfileById(correlationId, id, callback) {
        this._persistence.getOneById(correlationId, id, callback);
    }
    createProfile(correlationId, profile, callback) {
        this._persistence.create(correlationId, profile, callback);
    }
    updateProfile(correlationId, profile, callback) {
        this._persistence.update(correlationId, profile, callback);
    }
    deleteProfileById(correlationId, id, callback) {
        this._persistence.deleteById(correlationId, id, callback);
    }
}
exports.DeviceProfilesController = DeviceProfilesController;
DeviceProfilesController._defaultConfig = pip_services3_commons_node_1.ConfigParams.fromTuples('dependencies.persistence', 'iqs-services-deviceprofiles:persistence:*:*:1.0');
//# sourceMappingURL=DeviceProfilesController.js.map