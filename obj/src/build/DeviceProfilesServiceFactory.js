"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_components_node_1 = require("pip-services3-components-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const DeviceProfilesMongoDbPersistence_1 = require("../persistence/DeviceProfilesMongoDbPersistence");
const DeviceProfilesFilePersistence_1 = require("../persistence/DeviceProfilesFilePersistence");
const DeviceProfilesMemoryPersistence_1 = require("../persistence/DeviceProfilesMemoryPersistence");
const DeviceProfilesController_1 = require("../logic/DeviceProfilesController");
const DeviceProfilesHttpServiceV1_1 = require("../services/version1/DeviceProfilesHttpServiceV1");
class DeviceProfilesServiceFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(DeviceProfilesServiceFactory.MemoryPersistenceDescriptor, DeviceProfilesMemoryPersistence_1.DeviceProfilesMemoryPersistence);
        this.registerAsType(DeviceProfilesServiceFactory.FilePersistenceDescriptor, DeviceProfilesFilePersistence_1.DeviceProfilesFilePersistence);
        this.registerAsType(DeviceProfilesServiceFactory.MongoDbPersistenceDescriptor, DeviceProfilesMongoDbPersistence_1.DeviceProfilesMongoDbPersistence);
        this.registerAsType(DeviceProfilesServiceFactory.ControllerDescriptor, DeviceProfilesController_1.DeviceProfilesController);
        this.registerAsType(DeviceProfilesServiceFactory.HttpServiceDescriptor, DeviceProfilesHttpServiceV1_1.DeviceProfilesHttpServiceV1);
    }
}
exports.DeviceProfilesServiceFactory = DeviceProfilesServiceFactory;
DeviceProfilesServiceFactory.Descriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "factory", "default", "default", "1.0");
DeviceProfilesServiceFactory.MemoryPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "persistence", "memory", "*", "1.0");
DeviceProfilesServiceFactory.FilePersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "persistence", "file", "*", "1.0");
DeviceProfilesServiceFactory.MongoDbPersistenceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "persistence", "mongodb", "*", "1.0");
DeviceProfilesServiceFactory.ControllerDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "controller", "default", "*", "1.0");
DeviceProfilesServiceFactory.HttpServiceDescriptor = new pip_services3_commons_node_1.Descriptor("iqs-services-deviceprofiles", "service", "http", "*", "1.0");
//# sourceMappingURL=DeviceProfilesServiceFactory.js.map