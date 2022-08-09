/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { getLoginPreferenceAction, setLoginPreferenceAction } from './actions';
import { getInitialAuthenticateState, AuthenticationStateInterface, AuthenticationMethodPreference } from './state';
import { SynchronizationStatus } from '../api/models/synchronizationStatus';

export const authenticationReducer = reducerWithInitialState<AuthenticationStateInterface>(getInitialAuthenticateState())
    .case(getLoginPreferenceAction.started, (state: AuthenticationStateInterface) => {
        return {
            ...state,
            synchronizationStatus: SynchronizationStatus.working
        };
    })
    .case(getLoginPreferenceAction.done, (state: AuthenticationStateInterface, payload: {params: void, result: AuthenticationMethodPreference}) => {
        return {
            ...state,
            preference: payload.result,
            synchronizationStatus: SynchronizationStatus.fetched
        };
    })
    .case(getLoginPreferenceAction.failed, (state: AuthenticationStateInterface) => {
        return {
            ...state,
            synchronizationStatus: SynchronizationStatus.failed
        };
    })
    .case(setLoginPreferenceAction.started, (state: AuthenticationStateInterface) => {
        return {
            ...state,
            synchronizationStatus: SynchronizationStatus.working
        };
    })
    .case(setLoginPreferenceAction.done, (state: AuthenticationStateInterface, payload: {params: AuthenticationMethodPreference}) => {
        return {
            ...state,
            preference: payload.params,
            synchronizationStatus: SynchronizationStatus.upserted
        };
    })
    .case(setLoginPreferenceAction.failed, (state: AuthenticationStateInterface) => {
        return {
            ...state,
            synchronizationStatus: SynchronizationStatus.failed
        };
    });
