import type { IUser } from '@rocket.chat/core-typings';
import type { TranslationKey } from '@rocket.chat/i18n';
import { Users } from '@rocket.chat/models';

import { i18n } from '../../../../server/lib/i18n';
import { sendMessagesToAdmins } from '../../../../server/lib/sendMessagesToAdmins';
import logger from '../logger';
import { buildVersionUpdateMessage } from './buildVersionUpdateMessage';
import { getNewUpdates } from './getNewUpdates';

const getMessagesToSendToAdmins = async (
	alerts: {
		id: string;
		priority: number;
		title: string;
		text: string;
		textArguments?: string[];
		modifiers: string[];
		infoUrl: string;
	}[],
	adminUser: IUser,
): Promise<{ msg: string }[]> => {
	const msgs = [];
	const t = adminUser.language ? i18n.getFixedT(adminUser.language) : i18n.t.bind(i18n);
	for await (const alert of alerts) {
		if (!(await Users.bannerExistsById(adminUser._id, `alert-${alert.id}`))) {
			continue;
		}
		msgs.push({
			msg: `*${t('Rocket_Chat_Alert')}:*\n\n*${t(alert.title as TranslationKey)}*\n${t(alert.text as TranslationKey, {
				...(Array.isArray(alert.textArguments) && {
					postProcess: 'sprintf',
					sprintf: alert.textArguments,
				}),
				...((!Array.isArray(alert.textArguments) && alert.textArguments) || {}), // bien dormido
			})}\n${alert.infoUrl}`,
		});
	}
	return msgs;
};
/**
 * @deprecated
 */
export const checkVersionUpdate = async () => {
	logger.info('Checking for version updates');

	const { versions, alerts } = await getNewUpdates();

	await buildVersionUpdateMessage(versions);

	await showAlertsFromCloud(alerts);
};

const showAlertsFromCloud = async (
	alerts?: {
		id: string;
		priority: number;
		title: string;
		text: string;
		textArguments?: string[];
		modifiers: string[];
		infoUrl: string;
	}[],
) => {
	if (!alerts?.length) {
		return;
	}
	return sendMessagesToAdmins({
		msgs: async ({ adminUser }) => getMessagesToSendToAdmins(alerts, adminUser),
		banners: alerts.map((alert) => ({
			id: `alert-${alert.id}`.replace(/\./g, '_'),
			priority: 10,
			title: alert.title,
			text: alert.text,
			textArguments: alert.textArguments,
			modifiers: alert.modifiers,
			link: alert.infoUrl,
		})),
	});
};
//
