import { IStringIdentifiable } from 'pip-services3-commons-node';
import { SensorParameterV1 } from './SensorParameterV1';
import { SensorEventV1 } from './SensorEventV1';
import { ActuatorCommandV1 } from './ActuatorCommandV1';
import { ConfigParameterV1 } from './ConfigParameterV1';
export declare class DeviceProfileV1 implements IStringIdentifiable {
    id: string;
    org_id: string;
    base_profile_id: string;
    name: string;
    gateways?: string[];
    params?: SensorParameterV1[];
    events?: SensorEventV1[];
    commands?: ActuatorCommandV1[];
    config?: ConfigParameterV1[];
}
