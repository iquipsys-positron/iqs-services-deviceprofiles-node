import { ConfigParams } from 'pip-services3-commons-node';

import { DeviceProfilesMemoryPersistence } from '../../src/persistence/DeviceProfilesMemoryPersistence';
import { DeviceProfilesPersistenceFixture } from './DeviceProfilesPersistenceFixture';

suite('DeviceProfilesMemoryPersistence', ()=> {
    let persistence: DeviceProfilesMemoryPersistence;
    let fixture: DeviceProfilesPersistenceFixture;
    
    setup((done) => {
        persistence = new DeviceProfilesMemoryPersistence();
        persistence.configure(new ConfigParams());
        
        fixture = new DeviceProfilesPersistenceFixture(persistence);
        
        persistence.open(null, done);
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