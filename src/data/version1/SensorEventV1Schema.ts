import { ObjectSchema } from 'pip-services3-commons-node';
import { ArraySchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';

export class SensorEventV1Schema extends ObjectSchema {
    public constructor() {
        super();
        this.withRequiredProperty('id', TypeCode.Integer);
        this.withOptionalProperty('name', TypeCode.String);
        this.withOptionalProperty('type', TypeCode.Integer);
        this.withOptionalProperty('offset', TypeCode.Float);
        this.withOptionalProperty('scale', TypeCode.Float);
        this.withOptionalProperty('min_value', TypeCode.Float);
        this.withOptionalProperty('max_value', TypeCode.Float);
    }
}
