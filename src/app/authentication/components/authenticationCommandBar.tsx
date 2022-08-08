import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CommandBar } from '@fluentui/react';
import { useConnectionStringContext } from '../connectionStrings/context/connectionStringStateContext';

export const AuthenticationCommandBar: React.FC = () => {
    const { t } = useTranslation();
    // const [ {token}, {login, logout, getToken}] =  useAuthenticationStateContext();
    const [ state,  ] = useConnectionStringContext();

    // const getCommandBarItems = () => {
    //     const items = [{
    //             ariaLabel: t(ResourceKeys.connectionStrings.addConnectionCommand.ariaLabel),
    //             disabled: state.payload.length >= CONNECTION_STRING_LIST_MAX_LENGTH,
    //             iconProps: { iconName: 'Add' },
    //             key: 'add',
    //             onClick: onAddConnectionStringClick,
    //             text: t(ResourceKeys.connectionStrings.addConnectionCommand.label)
    //     }];
    //     return !token ? [...items, {
    //             ariaLabel: t(ResourceKeys.authentication.command.login),
    //             iconProps: { iconName: 'Signin' },
    //             key: 'signin',
    //             onClick: login,
    //             text: t(ResourceKeys.authentication.command.login)
    //         }] :
    //         [...items, {
    //             ariaLabel: t(ResourceKeys.authentication.command.logout),
    //             iconProps: { iconName: 'Signout' },
    //             key: 'signout',
    //             onClick: logout,
    //             text: t(ResourceKeys.authentication.command.logout)
    //         }];
    // };


    return (
        <CommandBar
            items={[]}
        />
    );
};
