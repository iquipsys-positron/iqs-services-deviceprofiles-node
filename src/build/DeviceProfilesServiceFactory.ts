import { Factory } from 'pip-services3-components-node';
import { Descriptor } from 'pip-services3-commons-node';

import { DeviceProfilesMongoDbPersistence } from '../persistence/DeviceProfilesMongoDbPersistence';
import { DeviceProfilesFilePersistence } from '../persistence/DeviceProfilesFilePersistence';
import { DeviceProfilesMemoryPersistence } from '../persistence/DeviceProfilesMemoryPersistence';
import { DeviceProfilesController } from '../logic/DeviceProfilesController';
import { DeviceProfilesHttpServiceV1 } from '../services/version1/DeviceProfilesHttpServiceV1';

export class DeviceProfilesServiceFactory extends Factory {
	public static Descriptor = new Descriptor("iqs-services-deviceprofiles", "factory", "default", "default", "1.0");
	public static MemoryPersistenceDescriptor = new Descriptor("iqs-services-deviceprofiles", "persistence", "memory", "*", "1.0");
	public static FilePersistenceDescriptor = new Descriptor("iqs-services-deviceprofiles", "persistence", "file", "*", "1.0");
	public static MongoDbPersistenceDescriptor = new Descriptor("iqs-services-deviceprofiles", "persistence", "mongodb", "*", "1.0");
	public static ControllerDescriptor = new Descriptor("iqs-services-deviceprofiles", "controller", "default", "*", "1.0");
	public static HttpServiceDescriptor = new Descriptor("iqs-services-deviceprofiles", "service", "http", "*", "1.0");
	
	constructor() {
		super();
		this.registerAsType(DeviceProfilesServiceFactory.MemoryPersistenceDescriptor, DeviceProfilesMemoryPersistence);
		this.registerAsType(DeviceProfilesServiceFactory.FilePersistenceDescriptor, DeviceProfilesFilePersistence);
		this.registerAsType(DeviceProfilesServiceFactory.MongoDbPersistenceDescriptor, DeviceProfilesMongoDbPersistence);
		this.registerAsType(DeviceProfilesServiceFactory.ControllerDescriptor, DeviceProfilesController);
		this.registerAsType(DeviceProfilesServiceFactory.HttpServiceDescriptor, DeviceProfilesHttpServiceV1);
	}
	
}
