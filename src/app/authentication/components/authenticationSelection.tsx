/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import * as React from 'react';
import { CompoundButton, Stack } from '@fluentui/react';
import { useAuthenticationStateContext } from '../context/authenticationStateContext';
import { AuthenticationMethodPreference } from '../state';
import './AuthenticationSelection.scss';

export const AuthenticationSelection: React.FC = () => {
    const [, api] = useAuthenticationStateContext();

    const connectViaConnectionString = () => {
        api.setLoginPreference(AuthenticationMethodPreference.ConnectionString);
    };

    const loginViaAad = () => {
        api.setLoginPreference(AuthenticationMethodPreference.AzureAD);
    };

    return (
        <div className="auth-slection-container">
            <Stack tokens={{ childrenGap: 10 }}>
                <h3 role="heading" aria-level={1}>{'Welcome to Azure IoT Explorer, a cross-platform UI for interacting with devices attached to Azure IoT Hub'}</h3>
                <span>Choose an authentication method and connect to an Azure IoT hub</span>
                <Stack tokens={{ childrenGap: 80 }} horizontal={true} >
                    <CompoundButton
                        primary={true}
                        iconProps={{ iconName: 'Permissions' }}
                        onClick={connectViaConnectionString}
                        className="auth-selection-tile"
                    >
                        Connect via IoT Hub connection string
                    </CompoundButton>
                    <CompoundButton
                        iconProps={{ iconName: 'AADLogo' }}
                        className="auth-selection-tile"
                        onClick={loginViaAad}
                        secondaryText={'Coming soon'}
                    >
                        Connect via Azure Active Directory
                    </CompoundButton>
                </Stack>
            </Stack>
        </div>
    );
};
