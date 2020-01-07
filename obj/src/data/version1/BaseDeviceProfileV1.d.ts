import { IStringIdentifiable } from 'pip-services3-commons-node';
import { SensorParameterV1 } from './SensorParameterV1';
import { SensorEventV1 } from './SensorEventV1';
import { ActuatorCommandV1 } from './ActuatorCommandV1';
import { ConfigParameterV1 } from './ConfigParameterV1';
export declare class BaseDeviceProfileV1 implements IStringIdentifiable {
    id: string;
    name: string;
    modify_gateways: boolean;
    multi_gateways: boolean;
    gateways?: string[];
    modify_params: boolean;
    config_params: boolean;
    rename_params: boolean;
    params?: SensorParameterV1[];
    modify_events: boolean;
    config_events: boolean;
    rename_events: boolean;
    events?: SensorEventV1[];
    modify_commands: boolean;
    config_commands: boolean;
    rename_commands: boolean;
    commands?: ActuatorCommandV1[];
    modify_config: boolean;
    config_config: boolean;
    rename_config: boolean;
    config?: ConfigParameterV1[];
}
