import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

import { SensorParameterV1Schema } from './SensorParameterV1Schema';
import { SensorEventV1Schema } from './SensorEventV1Schema';
import { ActuatorCommandV1Schema } from './ActuatorCommandV1Schema';
import { ConfigParameterV1Schema } from './ConfigParameterV1Schema';

export class DeviceProfileV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withOptionalProperty('id', TypeCode.String);
        this.withRequiredProperty('org_id', TypeCode.String);
        this.withRequiredProperty('base_profile_id', TypeCode.String);
        this.withRequiredProperty('name', TypeCode.String);
        
        this.withOptionalProperty('gateways', new ArraySchema(TypeCode.String));
        this.withOptionalProperty('params', new ArraySchema(new SensorParameterV1Schema()));
        this.withOptionalProperty('events', new ArraySchema(new SensorEventV1Schema()));
        this.withOptionalProperty('commands', new ArraySchema(new ActuatorCommandV1Schema()));
        this.withOptionalProperty('config', new ArraySchema(new ConfigParameterV1Schema()));
    }
}
