import * as React from 'react';
import { connectionStringsStateInitial, ConnectionStringsStateType } from '../state';
import { AuthenticationInterface } from './connectionStringStateProvider';

export const ConnectionStringStateContext = React.createContext<[ConnectionStringsStateType, AuthenticationInterface]>
    ([
        connectionStringsStateInitial(),
        {
            deleteConnectionString: () => undefined,
            getConnectionStrings: () => undefined,
            setConnectionStrings: () => undefined,
            upsertConnectionString: () => undefined,
        }
    ]);
export const useConnectionStringContext = () => React.useContext(ConnectionStringStateContext);
