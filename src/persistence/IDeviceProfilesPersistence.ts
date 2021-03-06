import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IGetter } from 'pip-services3-data-node';
import { IWriter } from 'pip-services3-data-node';

import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';

export interface IDeviceProfilesPersistence extends IGetter<DeviceProfileV1, string>, IWriter<DeviceProfileV1, string> {
    getPageByFilter(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;

    getOneById(correlationId: string, id: string, 
        callback: (err: any, item: DeviceProfileV1) => void): void;

    create(correlationId: string, item: DeviceProfileV1, 
        callback: (err: any, item: DeviceProfileV1) => void): void;

    update(correlationId: string, item: DeviceProfileV1, 
        callback: (err: any, item: DeviceProfileV1) => void): void;

    deleteById(correlationId: string, id: string,
        callback: (err: any, item: DeviceProfileV1) => void): void;
}
