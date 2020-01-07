import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { BaseDeviceProfileV1 } from '../data/version1/BaseDeviceProfileV1';

export interface IDeviceProfilesController {
    getBaseProfiles(correlationId: string,
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void;

    getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;

    getProfileById(correlationId: string, profile_id: string, 
        callback: (err: any, profile: DeviceProfileV1) => void): void;

    createProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void;

    updateProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void;

    deleteProfileById(correlationId: string, profile_id: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void;
}
