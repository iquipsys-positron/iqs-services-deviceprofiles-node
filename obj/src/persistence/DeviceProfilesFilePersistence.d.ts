import { ConfigParams } from 'pip-services3-commons-node';
import { JsonFilePersister } from 'pip-services3-data-node';
import { DeviceProfilesMemoryPersistence } from './DeviceProfilesMemoryPersistence';
import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
export declare class DeviceProfilesFilePersistence extends DeviceProfilesMemoryPersistence {
    protected _persister: JsonFilePersister<DeviceProfileV1>;
    constructor(path?: string);
    configure(config: ConfigParams): void;
}
