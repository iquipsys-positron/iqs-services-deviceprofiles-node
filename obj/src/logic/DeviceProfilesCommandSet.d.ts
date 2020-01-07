import { CommandSet } from 'pip-services3-commons-node';
import { IDeviceProfilesController } from './IDeviceProfilesController';
export declare class DeviceProfilesCommandSet extends CommandSet {
    private _logic;
    constructor(logic: IDeviceProfilesController);
    private makeGetBaseDeviceProfilesCommand;
    private makeGetDeviceProfilesCommand;
    private makeGetDeviceProfileByIdCommand;
    private makeCreateDeviceProfileCommand;
    private makeUpdateDeviceProfileCommand;
    private makeDeleteDeviceProfileByIdCommand;
}
