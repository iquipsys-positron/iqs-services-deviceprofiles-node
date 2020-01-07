import { CommandSet } from 'pip-services3-commons-node';
import { ICommand } from 'pip-services3-commons-node';
import { Command } from 'pip-services3-commons-node';
import { Schema } from 'pip-services3-commons-node';
import { Parameters } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { ObjectSchema } from 'pip-services3-commons-node';
import { TypeCode } from 'pip-services3-commons-node';
import { FilterParamsSchema } from 'pip-services3-commons-node';
import { PagingParamsSchema } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../data/version1/DeviceProfileV1';
import { DeviceProfileV1Schema } from '../data/version1/DeviceProfileV1Schema';
import { IDeviceProfilesController } from './IDeviceProfilesController';

export class DeviceProfilesCommandSet extends CommandSet {
    private _logic: IDeviceProfilesController;

    constructor(logic: IDeviceProfilesController) {
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

	private makeGetBaseDeviceProfilesCommand(): ICommand {
		return new Command(
			"get_base_profiles",
			new ObjectSchema(true),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                this._logic.getBaseProfiles(correlationId, callback);
            }
		);
	}

	private makeGetDeviceProfilesCommand(): ICommand {
		return new Command(
			"get_profiles",
			new ObjectSchema(true)
				.withOptionalProperty('filter', new FilterParamsSchema())
				.withOptionalProperty('paging', new PagingParamsSchema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let filter = FilterParams.fromValue(args.get("filter"));
                let paging = PagingParams.fromValue(args.get("paging"));
                this._logic.getProfiles(correlationId, filter, paging, callback);
            }
		);
	}

	private makeGetDeviceProfileByIdCommand(): ICommand {
		return new Command(
			"get_profile_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('profile_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profile_id = args.getAsString("profile_id");
                this._logic.getProfileById(correlationId, profile_id, callback);
            }
		);
	}

	private makeCreateDeviceProfileCommand(): ICommand {
		return new Command(
			"create_profile",
			new ObjectSchema(true)
				.withRequiredProperty('profile', new DeviceProfileV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profile = args.get("profile");
                this._logic.createProfile(correlationId, profile, callback);
            }
		);
	}

	private makeUpdateDeviceProfileCommand(): ICommand {
		return new Command(
			"update_profile",
			new ObjectSchema(true)
				.withRequiredProperty('profile', new DeviceProfileV1Schema()),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profile = args.get("profile");
                this._logic.updateProfile(correlationId, profile, callback);
            }
		);
	}
	
	private makeDeleteDeviceProfileByIdCommand(): ICommand {
		return new Command(
			"delete_profile_by_id",
			new ObjectSchema(true)
				.withRequiredProperty('profile_id', TypeCode.String),
            (correlationId: string, args: Parameters, callback: (err: any, result: any) => void) => {
                let profileId = args.getAsNullableString("profile_id");
                this._logic.deleteProfileById(correlationId, profileId, callback);
			}
		);
	}

}