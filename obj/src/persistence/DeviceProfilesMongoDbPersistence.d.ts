import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMongoDbPersistence } from 'pip-services3-mongodb-node';
import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { IDeviceProfilesPersistence } from './IDeviceProfilesPersistence';
export declare class DeviceProfilesMongoDbPersistence extends IdentifiableMongoDbPersistence<DeviceProfileV1, string> implements IDeviceProfilesPersistence {
    constructor();
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;
}
