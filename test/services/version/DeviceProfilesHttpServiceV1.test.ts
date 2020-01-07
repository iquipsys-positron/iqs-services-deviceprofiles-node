let _ = require('lodash');
let async = require('async');
let restify = require('restify');
let assert = require('chai').assert;

import { ConfigParams } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';

import { DeviceProfileV1 } from '../../../src/data/version1/DeviceProfileV1';
import { DeviceProfilesMemoryPersistence } from '../../../src/persistence/DeviceProfilesMemoryPersistence';
import { DeviceProfilesController } from '../../../src/logic/DeviceProfilesController';
import { DeviceProfilesHttpServiceV1 } from '../../../src/services/version1/DeviceProfilesHttpServiceV1';

let httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

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

suite('DeviceProfilesHttpServiceV1', ()=> {    
    let service: DeviceProfilesHttpServiceV1;
    let rest: any;

    suiteSetup((done) => {
        let persistence = new DeviceProfilesMemoryPersistence();
        let controller = new DeviceProfilesController();

        service = new DeviceProfilesHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-deviceprofiles', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-deviceprofiles', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-deviceprofiles', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        service.open(null, done);
    });
    
    suiteTeardown((done) => {
        service.close(null, done);
    });

    setup(() => {
        let url = 'http://localhost:3000';
        rest = restify.createJsonClient({ url: url, version: '*' });
    });
    
    test('Get Base Profiles', (done) => {
        rest.post('/v1/device_profiles/get_base_profiles',
            {
                profile: PROFILE1
            },
            (err, req, res, profiles) => {
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
                rest.post('/v1/device_profiles/create_profile',
                    {
                        profile: PROFILE1
                    },
                    (err, req, res, profile) => {
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
                rest.post('/v1/device_profiles/create_profile', 
                    {
                        profile: PROFILE2
                    },
                    (err, req, res, profile) => {
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
                rest.post('/v1/device_profiles/get_profiles',
                    {},
                    (err, req, res, page) => {
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

                rest.post('/v1/device_profiles/update_profile',
                    { 
                        profile: profile1
                    },
                    (err, req, res, profile) => {
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
                rest.post('/v1/device_profiles/delete_profile_by_id',
                    {
                        profile_id: profile1.id
                    },
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            },
        // Try to get delete profile
            (callback) => {
                rest.post('/v1/device_profiles/get_profile_by_id',
                    {
                        profile_id: profile1.id
                    },
                    (err, req, res, result) => {
                        assert.isNull(err);

                        //assert.isNull(result);

                        callback();
                    }
                );
            }
        ], done);
    });
});