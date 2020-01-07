import { CommGatewayV1 } from './CommGatewayV1';
import { BaseDeviceProfileV1 } from './BaseDeviceProfileV1';
import { SensorParameterTypeV1 } from './SensorParameterTypeV1';
import { SensorEventTypeV1 } from './SensorEventTypeV1';
import { ActuatorCommandTypeV1 } from './ActuatorCommandTypeV1';

export const BaseDeviceProfilesV1: BaseDeviceProfileV1[] = [
    {
        id: 'custom',
        name: 'Custom Profile',
        modify_gateways: true,
        multi_gateways: true,
        gateways: [ CommGatewayV1.Mqtt ],
        modify_params: true,
        config_params: true,
        rename_params: true,
        modify_events: true,
        config_events: true,
        rename_events: true,
        modify_commands: true,
        config_commands: true,
        rename_commands: true,
        modify_config: true,
        config_config: true,
        rename_config: true
    },

    {
        id: 'smartphone',
        name: 'Smartphone',
        modify_gateways: false,
        multi_gateways: false,
        gateways: [ CommGatewayV1.Mqtt ],
        modify_params: false,
        config_params: false,
        rename_params: false,
        params: [
            {
                id: 1,
                name: 'Powered',
                type: SensorParameterTypeV1.Powered,
                min_value: 0,
                max_value: 1
            },
            {
                id: 2,
                name: 'Freezed',
                type: SensorParameterTypeV1.Freezed,
                min_value: 0,
                max_value: 1
            }
        ],
        modify_events: false,
        config_events: false,
        rename_events: false,
        events: [
            {
                id: 1,
                name: 'ButtonPressed',
                type: SensorEventTypeV1.Button1ShortPressed,
                min_value: 0,
                max_value: 1
            },
            {
                id: 2,
                name: 'ButtonLongPressed',
                type: SensorEventTypeV1.Button1LongPressed,
                min_value: 0,
                max_value: 1
            }
        ],
        modify_commands: false,
        config_commands: false,
        rename_commands: false,
        commands: [
            {
                id: 1,
                name: 'Signal',
                type: ActuatorCommandTypeV1.SoundSignal,
                min_value: 0,
                max_value: 3
            } 
        ],
        modify_config: false,
        config_config: false,
        rename_config: false
    },

    {
        id: 'iqx',
        name: 'iQx',
        modify_gateways: false,
        multi_gateways: false,
        gateways: [ CommGatewayV1.LoRa ],
        modify_params: false,
        config_params: true,
        rename_params: true,
        params: [
            {
                id: 1,
                name: 'Powered',
                type: SensorParameterTypeV1.Powered,
                min_value: 0,
                max_value: 1
            },
            {
                id: 2,
                name: 'Freezed',
                type: SensorParameterTypeV1.Freezed,
                min_value: 0,
                max_value: 1
            },
            {
                id: 3,
                name: 'Analog In',
                type: null
            }
        ],
        modify_events: false,
        config_events: false,
        rename_events: false,
        events: [
            {
                id: 1,
                name: 'ButtonPressed',
                type: SensorEventTypeV1.Button1ShortPressed,
                min_value: 0,
                max_value: 1
            },
            {
                id: 2,
                name: 'ButtonLongPressed',
                type: SensorEventTypeV1.Button2LongPressed,
                min_value: 0,
                max_value: 1
            }
        ],
        modify_commands: false,
        config_commands: false,
        rename_commands: false,
        commands: [
            {
                id: 1,
                name: 'Signal',
                type: ActuatorCommandTypeV1.SoundSignal,
                min_value: 0,
                max_value: 3
            }
        ],
        modify_config: false,
        config_config: false,
        rename_config: false
    },

    {
        id: 'teltonika_fmbx',
        name: 'Teltonika FMBx',
        modify_gateways: false,
        multi_gateways: false,
        gateways: [ CommGatewayV1.Teltonika ],
        modify_params: true,
        config_params: true,
        rename_params: true,
        params: [
            // Todo: Add standard params
        ],
        modify_events: true,
        config_events: true,
        rename_events: true,
        events: [
            // Todo: Add standard events
        ],
        modify_commands: true,
        config_commands: true,
        rename_commands: true,
        commands: [
            // Todo: Add standard commands
        ],
        modify_config: false,
        config_config: false,
        rename_config: false
    },

];
