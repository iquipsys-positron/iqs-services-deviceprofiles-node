let DeviceProfilesProcess = require('../obj/src/container/DeviceProfilesProcess').DeviceProfilesProcess;

try {
    new DeviceProfilesProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}
