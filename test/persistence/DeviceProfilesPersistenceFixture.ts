let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../../src/data/version1/DeviceProfileV1';

import { IDeviceProfilesPersistence } from '../../src/persistence/IDeviceProfilesPersistence';

let PROFILE1: DeviceProfileV1 = {
    id: '1',
    org_id: '1',
    base_profile_id: 'custom',
    name: 'Test profile 1',
    params: [],
    events: []
};
let PROFILE2: DeviceProfileV1 = {
    id: '2',
    org_id: '1',
    base_profile_id: 'custom',
    name: 'Test profile 2',
    params: [],
    events: []
};
let PROFILE3: DeviceProfileV1 = {
    id: '3',
    org_id: '2',
    base_profile_id: 'custom',
    name: 'Test profile 3',
    params: [],
    events: []
};

export class DeviceProfilesPersistenceFixture {
    private _persistence: IDeviceProfilesPersistence;
    
    constructor(persistence) {
        assert.isNotNull(persistence);
        this._persistence = persistence;
    }

    private testCreateDeviceProfiles(done) {
        async.series([
        // Create one profile
            (callback) => {
                this._persistence.create(
                    null,
                    PROFILE1,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE1.org_id);
                        assert.equal(profile.name, PROFILE1.name);

                        callback();
                    }
                );
            },
        // Create another profile
            (callback) => {
                this._persistence.create(
                    null,
                    PROFILE2,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE2.org_id);
                        assert.equal(profile.name, PROFILE2.name);

                        callback();
                    }
                );
            },
        // Create yet another profile
            (callback) => {
                this._persistence.create(
                    null,
                    PROFILE3,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE3.org_id);
                        assert.equal(profile.name, PROFILE3.name);

                        callback();
                    }
                );
            }
        ], done);
    }
                
    public testCrudOperations(done) {
        let profile1: DeviceProfileV1;

        async.series([
        // Create items
            (callback) => {
                this.testCreateDeviceProfiles(callback);
            },
        // Get all profiles
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        profile1 = page.data[0];

                        callback();
                    }
                );
            },
        // Update the profile
            (callback) => {
                profile1.name = 'Updated profile 1';

                this._persistence.update(
                    null,
                    profile1,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.name, 'Updated profile 1');
                        assert.equal(profile.id, profile1.id);

                        callback();
                    }
                );
            },
        // Delete profile
            (callback) => {
                this._persistence.deleteById(
                    null,
                    profile1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete profile
            (callback) => {
                this._persistence.getOneById(
                    null,
                    profile1.id,
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isNull(profile || null);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testGetWithFilter(done) {
        async.series([
        // Create profiles
            (callback) => {
                this.testCreateDeviceProfiles(callback);
            },
        // Get profiles filtered by org_id
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                        org_id: '1'
                    }),
                    new PagingParams(),
                    (err, profiles) => {
                        assert.isNull(err);

                        assert.isObject(profiles);
                        assert.lengthOf(profiles.data, 2);

                        callback();
                    }
                );
            },
        // Get profiles filtered by search
            (callback) => {
                this._persistence.getPageByFilter(
                    null,
                    FilterParams.fromValue({
                         search: 'test'
                    }),
                    new PagingParams(),
                    (err, profiles) => {
                        assert.isNull(err);

                        assert.isObject(profiles);
                        assert.lengthOf(profiles.data, 3);

                        callback();
                    }
                );
            },
        ], done);
    }

}
