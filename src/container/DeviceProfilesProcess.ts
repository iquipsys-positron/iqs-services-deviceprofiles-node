import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';

import { DeviceProfilesServiceFactory } from '../build/DeviceProfilesServiceFactory';
import { DefaultRpcFactory} from 'pip-services3-rpc-node';

export class DeviceProfilesProcess extends ProcessContainer {

    public constructor() {
        super("device_profiles", "Device profiles microservice");
        this._factories.add(new DeviceProfilesServiceFactory);
        this._factories.add(new DefaultRpcFactory);
    }

}
