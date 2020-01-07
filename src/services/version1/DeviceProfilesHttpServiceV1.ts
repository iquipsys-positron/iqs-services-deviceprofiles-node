import { Descriptor } from 'pip-services3-commons-node';
import { CommandableHttpService } from 'pip-services3-rpc-node';

export class DeviceProfilesHttpServiceV1 extends CommandableHttpService {
    public constructor() {
        super('v1/device_profiles');
        this._dependencyResolver.put('controller', new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', '*', '1.0'));
    }
}