import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CommandBar } from '@fluentui/react';
import { ResourceKeys } from '../../../../localization/resourceKeys';
import { useConnectionStringContext } from '../context/connectionStringStateContext';
import { CONNECTION_STRING_LIST_MAX_LENGTH } from '../../../constants/browserStorage';

interface ConnectionStringCommandBarProps {
    onAddConnectionStringClick: () => void;
}

export const ConnectionStringCommandBar: React.FC<ConnectionStringCommandBarProps> = props => {
    const { t } = useTranslation();
    const [ state,  ] = useConnectionStringContext();

    return (
        <CommandBar
            items={[{
                ariaLabel: t(ResourceKeys.connectionStrings.addConnectionCommand.ariaLabel),
                disabled: state.payload.length >= CONNECTION_STRING_LIST_MAX_LENGTH,
                iconProps: { iconName: 'Add' },
                key: 'add',
                onClick: props.onAddConnectionStringClick,
                text: t(ResourceKeys.connectionStrings.addConnectionCommand.label)
        }]}
        />
    );
};
