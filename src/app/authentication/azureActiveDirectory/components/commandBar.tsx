import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CommandBar } from '@fluentui/react';
import { ResourceKeys } from '../../../../localization/resourceKeys';
import { useAuthenticationStateContext } from '../../context/authenticationStateContext';
import { NAVIGATE_BACK } from '../../../constants/iconNames';
import { useAzureActiveDirectoryStateContext } from '../context/azureActiveDirectoryStateContext';

export const AzureActiveDirectoryCommandBar: React.FC = () => {
    const { t } = useTranslation();
    const [ , { setLoginPreference } ] = useAuthenticationStateContext();
    const [ { token }, { logout, login }] =  useAzureActiveDirectoryStateContext();

    const switchAuth = () => {
        setLoginPreference('');
    };

    const getCommandBarItems = () => {
        const items = [{
            ariaLabel: 'Switch authentication method',
            iconProps: { iconName: NAVIGATE_BACK },
            key: 'switch',
            onClick: switchAuth,
            text: 'Switch authentication method'
        }];

        return !token ? [{
                ariaLabel: t(ResourceKeys.authentication.command.login),
                iconProps: { iconName: 'Signin' },
                key: 'signin',
                onClick: login,
                text: t(ResourceKeys.authentication.command.login)
            }, ...items] :
            [{
                ariaLabel: t(ResourceKeys.authentication.command.logout),
                iconProps: { iconName: 'Signout' },
                key: 'signout',
                onClick: logout,
                text: t(ResourceKeys.authentication.command.logout)
            }, ...items];
    };

    return (
        <CommandBar
            items={getCommandBarItems()}
        />
    );
};
