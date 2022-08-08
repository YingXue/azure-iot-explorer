/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getUserProfileTokenAction } from './actions';
import { azureActiveDirectoryStateInitial, AzureActiveDirectoryStateType } from './state';
import { SynchronizationStatus } from '../../api/models/synchronizationStatus';

export const azureActiveDirectoryReducer = reducerWithInitialState<AzureActiveDirectoryStateType>(azureActiveDirectoryStateInitial())
    .case(getUserProfileTokenAction.started, (state: AzureActiveDirectoryStateType) => {
        return state.merge({
            synchronizationStatus: SynchronizationStatus.working
        });
    })
    .case(getUserProfileTokenAction.done, (state: AzureActiveDirectoryStateType, payload: {params: void, result: string}) => {
        return state.merge({
            synchronizationStatus: SynchronizationStatus.fetched,
            token: payload.result
        });
    });
