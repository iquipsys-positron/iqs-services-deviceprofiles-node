import { Descriptor } from 'pip-services3-commons-node';
import { CommandableLambdaFunction } from 'pip-services3-aws-node';
import { DeviceProfilesServiceFactory } from '../build/DeviceProfilesServiceFactory';

export class DeviceProfilesLambdaFunction extends CommandableLambdaFunction {
    public constructor() {
        super("device_profiles", "Device profiles function");
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', '*', '*'));
        this._factories.add(new DeviceProfilesServiceFactory());
    }
}

export const handler = new DeviceProfilesLambdaFunction().getHandler();