import { Button } from '@rocket.chat/fuselage';
import type { TranslationKey } from '@rocket.chat/i18n';
import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactElement } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const resolveLegacyIcon = (legacyIcon: IconName | `icon-${IconName | 'videocam'}`): IconName => {
	if (legacyIcon === 'icon-videocam') {
		return 'video';
	}

	return legacyIcon?.replace(/^icon-/, '') as IconName;
};

type MessageActionProps = {
	icon: IconName;
	i18nLabel?: TranslationKey;
	label?: string;
	methodId: string;
	runAction: (actionId: string) => () => void;
	danger?: boolean;
};

const MessageAction = ({ icon, methodId, i18nLabel, label, runAction, danger }: MessageActionProps): ReactElement => {
	const { t } = useTranslation();
	const x = 'Accounts_Default_User_Preferences_not_available' as TranslationKey;
	t(x);

	const resolvedIcon = resolveLegacyIcon(icon);

	return (
		<Button icon={resolvedIcon} data-method-id={methodId} onClick={runAction(methodId)} marginInline={4} small danger={danger}>
			{i18nLabel ? t(i18nLabel) : label}
		</Button>
	);
};

export default MessageAction;
