let _ = require('lodash');
let async = require('async');

import { ConfigParams } from 'pip-services3-commons-node';
import { IConfigurable } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { IReferenceable } from 'pip-services3-commons-node';
import { DependencyResolver } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ICommandable } from 'pip-services3-commons-node';
import { CommandSet } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { BaseDeviceProfileV1 } from '../data/version1/BaseDeviceProfileV1';
import { BaseDeviceProfilesV1 } from '../data/version1/BaseDeviceProfilesV1';
import { IDeviceProfilesPersistence } from '../persistence/IDeviceProfilesPersistence';
import { IDeviceProfilesController } from './IDeviceProfilesController';
import { DeviceProfilesCommandSet } from './DeviceProfilesCommandSet';

export class DeviceProfilesController implements  IConfigurable, IReferenceable, ICommandable, IDeviceProfilesController {
    private static _defaultConfig: ConfigParams = ConfigParams.fromTuples(
        'dependencies.persistence', 'iqs-services-deviceprofiles:persistence:*:*:1.0'
    );

    private _dependencyResolver: DependencyResolver = new DependencyResolver(DeviceProfilesController._defaultConfig);
    private _persistence: IDeviceProfilesPersistence;
    private _commandSet: DeviceProfilesCommandSet;

    public configure(config: ConfigParams): void {
        this._dependencyResolver.configure(config);
    }

    public setReferences(references: IReferences): void {
        this._dependencyResolver.setReferences(references);
        this._persistence = this._dependencyResolver.getOneRequired<IDeviceProfilesPersistence>('persistence');
    }

    public getCommandSet(): CommandSet {
        if (this._commandSet == null)
            this._commandSet = new DeviceProfilesCommandSet(this);
        return this._commandSet;
    }

    public getBaseProfiles(correlationId: string,
        callback: (err: any, list: BaseDeviceProfileV1[]) => void): void {
        callback(null, BaseDeviceProfilesV1);
    }
    
    public getProfiles(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<DeviceProfileV1>) => void): void {
        this._persistence.getPageByFilter(correlationId, filter, paging, callback);
    }

    public getProfileById(correlationId: string, id: string, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this._persistence.getOneById(correlationId, id, callback);
    }

    public createProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this._persistence.create(correlationId, profile, callback);
    }

    public updateProfile(correlationId: string, profile: DeviceProfileV1, 
        callback: (err: any, profile: DeviceProfileV1) => void): void {
        this._persistence.update(correlationId, profile, callback);
    }

    public deleteProfileById(correlationId: string, id: string,
        callback: (err: any, profile: DeviceProfileV1) => void): void {  
        this._persistence.deleteById(correlationId, id, callback);
    }

}
