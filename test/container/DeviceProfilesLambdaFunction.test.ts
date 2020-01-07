let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { DeviceProfileV1 } from '../../src/data/version1/DeviceProfileV1';
import { DeviceProfilesMemoryPersistence } from '../../src/persistence/DeviceProfilesMemoryPersistence';
import { DeviceProfilesController } from '../../src/logic/DeviceProfilesController';
import { DeviceProfilesLambdaFunction } from '../../src/container/DeviceProfilesLambdaFunction';

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

suite('DeviceProfilesLambdaFunction', ()=> {
    let lambda: DeviceProfilesLambdaFunction;

    suiteSetup((done) => {
        let config = ConfigParams.fromTuples(
            'logger.descriptor', 'pip-services:logger:console:default:1.0',
            'persistence.descriptor', 'iqs-services-deviceprofiles:persistence:memory:default:1.0',
            'controller.descriptor', 'iqs-services-deviceprofiles:controller:default:default:1.0'
        );

        lambda = new DeviceProfilesLambdaFunction();
        lambda.configure(config);
        lambda.open(null, done);
    });
    
    suiteTeardown((done) => {
        lambda.close(null, done);
    });

    test('Get Base Profiles', (done) => {
        lambda.act(
            {
                role: 'device_profiles',
                cmd: 'get_base_profiles'
            },
            (err, profiles) => {
                assert.isNull(err);

                assert.isArray(profiles);
                assert.isTrue(profiles.length > 0);

                done();
            }
        );
    });

    test('CRUD Operations', (done) => {
        var profile1, profile2: DeviceProfileV1;

        async.series([
        // Create one profile
            (callback) => {
                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'create_profile',
                        profile: PROFILE1
                    },
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE1.org_id);
                        assert.equal(profile.name, PROFILE1.name);

                        profile1 = profile;

                        callback();
                    }
                );
            },
        // Create another profile
            (callback) => {
                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'create_profile',
                        profile: PROFILE2
                    },
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.org_id, PROFILE2.org_id);
                        assert.equal(profile.name, PROFILE2.name);

                        profile2 = profile;

                        callback();
                    }
                );
            },
        // Get all profiles
            (callback) => {
                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'get_profiles' 
                    },
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                );
            },
        // Update the profile
            (callback) => {
                profile1.name = 'Updated profile 1';

                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'update_profile',
                        profile: profile1
                    },
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isObject(profile);
                        assert.equal(profile.name, 'Updated profile 1');
                        assert.equal(profile.id, PROFILE1.id);

                        profile1 = profile;

                        callback();
                    }
                );
            },
        // Delete profile
            (callback) => {
                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'delete_profile_by_id',
                        profile_id: profile1.id
                    },
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete profile
            (callback) => {
                lambda.act(
                    {
                        role: 'device_profiles',
                        cmd: 'get_profile_by_id',
                        profile_id: profile1.id
                    },
                    (err, profile) => {
                        assert.isNull(err);

                        assert.isNull(profile || null);

                        callback();
                    }
                );
            }
        ], done);
    });
});