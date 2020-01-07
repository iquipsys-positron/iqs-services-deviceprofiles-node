import { IStringIdentifiable } from 'pip-services3-commons-node';

import { SensorParameterV1 } from './SensorParameterV1';
import { SensorEventV1 } from './SensorEventV1';
import { ActuatorCommandV1 } from './ActuatorCommandV1';
import { ConfigParameterV1 } from './ConfigParameterV1';

export class BaseDeviceProfileV1 implements IStringIdentifiable {
    public id: string;
    public name: string;

    public modify_gateways: boolean;
    public multi_gateways: boolean;
    public gateways?: string[];

    public modify_params: boolean;
    public config_params: boolean;
    public rename_params: boolean;
    public params?: SensorParameterV1[];

    public modify_events: boolean;
    public config_events: boolean;
    public rename_events: boolean;
    public events?: SensorEventV1[];

    public modify_commands: boolean;
    public config_commands: boolean;
    public rename_commands: boolean;
    public commands?: ActuatorCommandV1[];

    public modify_config: boolean;
    public config_config: boolean;
    public rename_config: boolean;
    public config?: ConfigParameterV1[];
}