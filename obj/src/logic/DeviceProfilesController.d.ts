import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';
import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { BaseDeviceProfileV1 } from '../data/version1/BaseDeviceProfileV1';
import { IDeviceProfilesController } from './IDeviceProfilesController';
export declare class DeviceProfilesController implements IConfigurable, IReferenceable, ICommandable, IDeviceProfilesController {
    private static _defaultConfig;
    private _dependencyResolver;
    private _persistence;
    private _commandSet;
    configure(config: ConfigParams): void;
    setReferences(references: IReferences): void;
    getCommandSet(): CommandSet;
    getBaseProfiles(correlationId: string, callback: (err: any, list: BaseDeviceProfileV1[]) => void): void;
    getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void;
    getProfileById(correlationId: string, id: string, callback: (err: any, profile: DeviceProfileV1) => void): void;
    createProfile(correlationId: string, profile: DeviceProfileV1, callback: (err: any, profile: DeviceProfileV1) => void): void;
    updateProfile(correlationId: string, profile: DeviceProfileV1, callback: (err: any, profile: DeviceProfileV1) => void): void;
    deleteProfileById(correlationId: string, id: string, callback: (err: any, profile: DeviceProfileV1) => void): void;
}
