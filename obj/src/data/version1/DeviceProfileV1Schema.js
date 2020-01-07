"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const SensorParameterV1Schema_1 = require("./SensorParameterV1Schema");
const SensorEventV1Schema_1 = require("./SensorEventV1Schema");
const ActuatorCommandV1Schema_1 = require("./ActuatorCommandV1Schema");
const ConfigParameterV1Schema_1 = require("./ConfigParameterV1Schema");
class DeviceProfileV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withOptionalProperty('id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('org_id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('base_profile_id', pip_services3_commons_node_3.TypeCode.String);
        this.withRequiredProperty('name', pip_services3_commons_node_3.TypeCode.String);
        this.withOptionalProperty('gateways', new pip_services3_commons_node_2.ArraySchema(pip_services3_commons_node_3.TypeCode.String));
        this.withOptionalProperty('params', new pip_services3_commons_node_2.ArraySchema(new SensorParameterV1Schema_1.SensorParameterV1Schema()));
        this.withOptionalProperty('events', new pip_services3_commons_node_2.ArraySchema(new SensorEventV1Schema_1.SensorEventV1Schema()));
        this.withOptionalProperty('commands', new pip_services3_commons_node_2.ArraySchema(new ActuatorCommandV1Schema_1.ActuatorCommandV1Schema()));
        this.withOptionalProperty('config', new pip_services3_commons_node_2.ArraySchema(new ConfigParameterV1Schema_1.ConfigParameterV1Schema()));
    }
}
exports.DeviceProfileV1Schema = DeviceProfileV1Schema;
//# sourceMappingURL=DeviceProfileV1Schema.js.map