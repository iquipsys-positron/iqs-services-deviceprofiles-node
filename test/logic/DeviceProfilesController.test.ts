let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../../src/data/version1/DeviceProfileV1';
import { DeviceProfilesMemoryPersistence } from '../../src/persistence/DeviceProfilesMemoryPersistence';
import { DeviceProfilesController } from '../../src/logic/DeviceProfilesController';

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

suite('DeviceProfilesController', ()=> {    
    let persistence: DeviceProfilesMemoryPersistence;
    let controller: DeviceProfilesController;

    suiteSetup(() => {
        persistence = new DeviceProfilesMemoryPersistence();
        controller = new DeviceProfilesController();

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-deviceprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', 'default', '1.0'), controller
        );
        controller.setReferences(references);
    });
    
    setup((done) => {
        persistence.clear(null, done);
    });
    
    test('Get Base Profiles', (done) => {
        controller.getBaseProfiles(
            null,
            (err, profiles) => {
                assert.isNull(err);

                assert.isArray(profiles);
                assert.isTrue(profiles.length > 0);

                done();
            }
        );
    });

    
    test('CRUD Operations', (done) => {
        let profile1, profile2: DeviceProfileV1;

        async.series([
        // Create one profile
            (callback) => {
                controller.createProfile(
                    null, PROFILE1,
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
                controller.createProfile(
                    null, PROFILE2,
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
                controller.getProfiles(
                    null, null, null,
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

                controller.updateProfile(
                    null, profile1,
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
                controller.deleteProfileById(
                    null, profile1.id,
                    (err, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
        // Try to get delete profile
            (callback) => {
                controller.getProfileById(
                    null, profile1.id,
                    (err, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    });
});