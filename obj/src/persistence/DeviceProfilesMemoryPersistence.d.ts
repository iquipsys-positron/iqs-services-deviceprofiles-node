import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdentifiableMemoryPersistence } from 'pip-services3-data-node';
import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { IDeviceProfilesPersistence } from './IDeviceProfilesPersistence';
export declare class DeviceProfilesMemoryPersistence extends IdentifiableMemoryPersistence<DeviceProfileV1, string> implements IDeviceProfilesPersistence {
    constructor();
    private matchString;
    private matchSearch;
    private contains;
    private composeFilter;
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;
}
