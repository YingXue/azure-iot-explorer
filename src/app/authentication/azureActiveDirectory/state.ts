/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { Record } from 'immutable';
import { SynchronizationStatus } from '../../api/models/synchronizationStatus';
import { IM } from '../../shared/types/types';

export interface AzureActiveDirectoryStateInterface {
    synchronizationStatus: SynchronizationStatus;
    token: string;
}

export type AzureActiveDirectoryStateType = IM<AzureActiveDirectoryStateInterface>;

export const azureActiveDirectoryStateInitial = Record<AzureActiveDirectoryStateInterface>({
    synchronizationStatus: SynchronizationStatus.initialized,
    token: undefined
});
