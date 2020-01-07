import { ConfigParams } from 'pip-services3-commons-node';

import { DeviceProfilesFilePersistence } from '../../src/persistence/DeviceProfilesFilePersistence';
import { DeviceProfilesPersistenceFixture } from './DeviceProfilesPersistenceFixture';

suite('DeviceProfilesFilePersistence', ()=> {
    let persistence: DeviceProfilesFilePersistence;
    let fixture: DeviceProfilesPersistenceFixture;
    
    setup((done) => {
        persistence = new DeviceProfilesFilePersistence('./data/profiles.test.json');

        fixture = new DeviceProfilesPersistenceFixture(persistence);

        persistence.open(null, (err) => {
            persistence.clear(null, done);
        });
    });
    
    teardown((done) => {
        persistence.close(null, done);
    });
        
    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetWithFilter(done);
    });

});