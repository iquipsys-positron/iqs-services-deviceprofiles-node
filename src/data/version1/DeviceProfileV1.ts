import { IStringIdentifiable } from 'pip-services3-commons-node';

import { SensorParameterV1 } from './SensorParameterV1';
import { SensorEventV1 } from './SensorEventV1';
import { ActuatorCommandV1 } from './ActuatorCommandV1';
import { ConfigParameterV1 } from './ConfigParameterV1';

export class DeviceProfileV1 implements IStringIdentifiable {
    public id: string;
    public org_id: string;
    public base_profile_id: string;    
    public name: string;
    public gateways?: string[];
    public params?: SensorParameterV1[];
    public events?: SensorEventV1[];
    public commands?: ActuatorCommandV1[];
    public config?: ConfigParameterV1[];
}