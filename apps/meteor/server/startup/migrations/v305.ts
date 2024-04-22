import { Settings } from '@rocket.chat/models';
import { isValidCron } from 'cron-validator';

import { settings } from '../../../app/settings/server';
import { addMigration } from '../../lib/migrations';

addMigration({
	version: 305,
	name: 'Update packageValue from LDAP interval settings',
	async up() {
		const newAvatarSyncPackageValue = '0 0 * * *';
		const newAutoLogoutPackageValue = '*/5 * * * *';
		const isValidAvatarSyncInterval = isValidCron(settings.get<string>('LDAP_Background_Sync_Avatars_Interval'));
		const isValidAutoLogoutInterval = isValidCron(settings.get<string>('LDAP_Sync_AutoLogout_Interval'));

		await Settings.updateOne(
			{ _id: 'LDAP_Background_Sync_Avatars_Interval' },
			{ $set: { packageValue: newAvatarSyncPackageValue, ...(!isValidAvatarSyncInterval && { value: newAvatarSyncPackageValue }) } },
		);
		await Settings.updateOne(
			{ _id: 'LDAP_Sync_AutoLogout_Interval' },
			{ $set: { packageValue: newAutoLogoutPackageValue, ...(!isValidAutoLogoutInterval && { value: newAutoLogoutPackageValue }) } },
		);
	},
});
