"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
const pip_services3_commons_node_4 = require("pip-services3-commons-node");
const pip_services3_commons_node_5 = require("pip-services3-commons-node");
const pip_services3_commons_node_6 = require("pip-services3-commons-node");
const pip_services3_commons_node_7 = require("pip-services3-commons-node");
const pip_services3_commons_node_8 = require("pip-services3-commons-node");
const DeviceProfileV1Schema_1 = require("../data/version1/DeviceProfileV1Schema");
class DeviceProfilesCommandSet extends pip_services3_commons_node_1.CommandSet {
    constructor(logic) {
        super();
        this._logic = logic;
        // Register commands to the database
        this.addCommand(this.makeGetBaseDeviceProfilesCommand());
        this.addCommand(this.makeGetDeviceProfilesCommand());
        this.addCommand(this.makeGetDeviceProfileByIdCommand());
        this.addCommand(this.makeCreateDeviceProfileCommand());
        this.addCommand(this.makeUpdateDeviceProfileCommand());
        this.addCommand(this.makeDeleteDeviceProfileByIdCommand());
    }
    makeGetBaseDeviceProfilesCommand() {
        return new pip_services3_commons_node_2.Command("get_base_profiles", new pip_services3_commons_node_5.ObjectSchema(true), (correlationId, args, callback) => {
            this._logic.getBaseProfiles(correlationId, callback);
        });
    }
    makeGetDeviceProfilesCommand() {
        return new pip_services3_commons_node_2.Command("get_profiles", new pip_services3_commons_node_5.ObjectSchema(true)
            .withOptionalProperty('filter', new pip_services3_commons_node_7.FilterParamsSchema())
            .withOptionalProperty('paging', new pip_services3_commons_node_8.PagingParamsSchema()), (correlationId, args, callback) => {
            let filter = pip_services3_commons_node_3.FilterParams.fromValue(args.get("filter"));
            let paging = pip_services3_commons_node_4.PagingParams.fromValue(args.get("paging"));
            this._logic.getProfiles(correlationId, filter, paging, callback);
        });
    }
    makeGetDeviceProfileByIdCommand() {
        return new pip_services3_commons_node_2.Command("get_profile_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('profile_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let profile_id = args.getAsString("profile_id");
            this._logic.getProfileById(correlationId, profile_id, callback);
        });
    }
    makeCreateDeviceProfileCommand() {
        return new pip_services3_commons_node_2.Command("create_profile", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('profile', new DeviceProfileV1Schema_1.DeviceProfileV1Schema()), (correlationId, args, callback) => {
            let profile = args.get("profile");
            this._logic.createProfile(correlationId, profile, callback);
        });
    }
    makeUpdateDeviceProfileCommand() {
        return new pip_services3_commons_node_2.Command("update_profile", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('profile', new DeviceProfileV1Schema_1.DeviceProfileV1Schema()), (correlationId, args, callback) => {
            let profile = args.get("profile");
            this._logic.updateProfile(correlationId, profile, callback);
        });
    }
    makeDeleteDeviceProfileByIdCommand() {
        return new pip_services3_commons_node_2.Command("delete_profile_by_id", new pip_services3_commons_node_5.ObjectSchema(true)
            .withRequiredProperty('profile_id', pip_services3_commons_node_6.TypeCode.String), (correlationId, args, callback) => {
            let profileId = args.getAsNullableString("profile_id");
            this._logic.deleteProfileById(correlationId, profileId, callback);
        });
    }
}
exports.DeviceProfilesCommandSet = DeviceProfilesCommandSet;
//# sourceMappingURL=DeviceProfilesCommandSet.js.map