/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import * as React from 'react';
import { SynchronizationStatus } from '../../api/models/synchronizationStatus';
import { MultiLineShimmer } from '../../shared/components/multiLineShimmer';
import { HubSelection } from '../azureActiveDirectory/components/hubSelection';
import { AzureActiveDirectoryStateContextProvider } from '../azureActiveDirectory/context/azureActiveDirectoryStateProvider';
import { ConnectionStringsView } from '../../connectionStrings/components/connectionStringsView';
import { ConnectionStringStateContextProvider } from '../../connectionStrings/context/connectionStringStateProvider';
import { useAuthenticationStateContext } from '../context/authenticationStateContext';
import { AuthenticationMethodPreference } from '../state';
import { AuthenticationSelection } from './authenticationSelection';

export const AuthenticationView: React.FC = () => {
    const [state, api] = useAuthenticationStateContext();
    React.useEffect(() => {
        api.getLoginPreference();
    }, []); // tslint:disable-line: align

    return (
        <>
            {state.synchronizationStatus === SynchronizationStatus.working && <MultiLineShimmer/>}
            {!state.preference && <AuthenticationSelection/>}
            {state.preference === AuthenticationMethodPreference.AzureAD &&
                <AzureActiveDirectoryStateContextProvider>
                    <HubSelection/>
                </AzureActiveDirectoryStateContextProvider>
            }
            {state.preference === AuthenticationMethodPreference.ConnectionString &&
                <ConnectionStringStateContextProvider>
                    <ConnectionStringsView/>
                </ConnectionStringStateContextProvider>
            }
        </>
    );
};
