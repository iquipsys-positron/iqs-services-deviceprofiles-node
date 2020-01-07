"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class SensorEventV1Schema extends pip_services3_commons_node_1.ObjectSchema {
    constructor() {
        super();
        this.withRequiredProperty('id', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('name', pip_services3_commons_node_2.TypeCode.String);
        this.withOptionalProperty('type', pip_services3_commons_node_2.TypeCode.Integer);
        this.withOptionalProperty('offset', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('scale', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('min_value', pip_services3_commons_node_2.TypeCode.Float);
        this.withOptionalProperty('max_value', pip_services3_commons_node_2.TypeCode.Float);
    }
}
exports.SensorEventV1Schema = SensorEventV1Schema;
//# sourceMappingURL=SensorEventV1Schema.js.map