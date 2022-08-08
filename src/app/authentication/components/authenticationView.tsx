/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import * as React from 'react';
import { AzureActiveDirectoryStateContextProvider } from '../azureActiveDirectory/context/azureActiveDirectoryStateProvider';
import { ConnectionStringsView } from '../connectionStrings/components/connectionStringsView';
import { ConnectionStringStateContextProvider } from '../connectionStrings/context/connectionStringStateProvider';

export const AuthenticationView: React.FC = () => {
    return (
        <ConnectionStringStateContextProvider>
            <AzureActiveDirectoryStateContextProvider>
                <ConnectionStringsView/>
            </AzureActiveDirectoryStateContextProvider>
        </ConnectionStringStateContextProvider>
    );
};
