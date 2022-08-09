/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { SynchronizationStatus } from '../api/models/synchronizationStatus';

export enum AuthenticationMethodPreference {
    AzureAD = 'AzureAD',
    ConnectionString = 'ConnectionString'
}

export interface AuthenticationStateInterface {
    preference: string;
    synchronizationStatus: SynchronizationStatus;
}

export const getInitialAuthenticateState = (): AuthenticationStateInterface => ({
    preference: undefined,
    synchronizationStatus: SynchronizationStatus.initialized
});
