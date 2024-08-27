import type { RocketchatI18nKeys, RocketchatI18n, TranslationKey } from '@rocket.chat/i18n';
import type { TOptions } from 'i18next';
import i18next from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor';

import { isObject } from '../../../lib/utils/isObject';

declare module 'i18next' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface CustomTypeOptions {
		returnNull: false;
		returnObjects: false;
		fallbackLng: 'en';
		defaultNS: 'core';
		nsSeparator: '.';
		resources: {
			core: Pick<
				RocketchatI18n,
				| 'meteor_status_connected'
				| 'meteor_status_connecting'
				| 'meteor_status_failed'
				| 'meteor_status_offline'
				| 'meteor_status_reconnect_in_one'
				| 'meteor_status_reconnect_in_other'
				| 'meteor_status_try_again_later'
				| 'meteor_status_try_now_offline'
				| 'meteor_status_try_now_waiting'
				| 'meteor_status_waiting'
				| 'Editing_message_hint'
				| 'Here_is_your_authentication_code'
				| 'Do_not_provide_this_code_to_anyone'
				| 'If_you_didnt_try_to_login_in_your_account_please_ignore_this_email'
				| 'Larger_amounts_of_active_connections'
				| 'Download'
				| 'Service_status'
				| 'Active_connections'
				| 'Premium_cap_description'
				| 'Community_cap_description'
				| 'Service_disabled'
				| 'Service_disabled_description'
				| 'More_about_Premium_plans'
				| 'Unable_to_load_active_connections'
				| 'Retry'
				| 'You_have_not_verified_your_email'
				| 'Call_unavailable_for_federation'
				| 'Video_Call_unavailable_for_this_type_of_room'
				| 'Pinned_messages_unavailable_for_federation'
				| 'OTR_unavailable_for_federation'
				| 'E2E_unavailable_for_federation'
				| 'AutoTranslate_Disabled_for_room'
				| 'E2E_Encryption_disabled_for_room'
				| 'E2E_Encryption_enabled_for_room'
				| 'E2EE_not_available_OTR'
				| 'Discussions_unavailable_for_federation'
				| 'Clean_History_unavailable_for_federation'
				| 'Video_Call_unavailable_for_this_type_of_room'
				| 'User_status_disabled'
				| 'Learn_more'
				| 'Custom_Status'
				| 'Rocket_Chat_Alert'
				| 'User_doesnt_exist'
				| 'Username_is_already_in_here'
				| 'Cannot_invite_users_to_direct_rooms'
				| 'This_attachment_is_not_supported'
				| 'You'
				| 'Agent'
				| 'Transcript_of_your_livechat_conversation'
				| 'Unlock_premium_capabilities'
				| 'Includes'
				| 'Compare_plans'
				| 'UpgradeToGetMore_Headline'
				| 'UpgradeToGetMore_Subtitle'
				| `UpgradeToGetMore_${
						| 'scalability'
						| 'accessibility-certification'
						| 'engagement-dashboard'
						| 'oauth-enterprise'
						| 'custom-roles'
						| 'auditing'}_Title`
				| `UpgradeToGetMore_${
						| 'scalability'
						| 'accessibility-certification'
						| 'engagement-dashboard'
						| 'oauth-enterprise'
						| 'custom-roles'
						| 'auditing'}_Body`
				| `subscription.callout.${
						| 'activeUsers'
						| 'guestUsers'
						| 'roomsPerGuest'
						| 'privateApps'
						| 'marketplaceApps'
						| 'monthlyActiveContacts'}`
				| 'subscription.callout.servicesDisruptionsMayOccur'
				| `subscription.callout.description.limitsReached_${'one' | 'other'}`
				| 'subscription.callout.servicesDisruptionsOccurring'
				| `subscription.callout.description.limitsExceeded_${'one' | 'other'}`
				| 'subscription.callout.capabilitiesDisabled'
				| 'subscription.callout.allPremiumCapabilitiesDisabled'
				| 'Plan_limits_reached'
				| 'Operating_withing_plan_limits'
				| 'Check_support_availability'
				| 'Version_supported_until'
				| 'Version_not_supported'
				| 'Workspace_registered'
				| 'Workspace_not_registered'
				| 'Version_version'
				| 'Manage_subscription'
				| 'Update_version'
				| 'RegisterWorkspace_Button'
				| 'Unlimited_seats'
				| 'Renews_DATE'
				| 'Contact_sales_renew_date'
				| 'Self_managed_hosting'
				| 'Cloud_hosting'
				| 'Trial_active'
				| 'n_days_left'
				| 'Finish_your_purchase_trial'
				| 'Why_has_a_trial_been_applied_to_this_workspace'
				| 'Finish_purchase'
				| 'Contact_sales'
				| 'Contact_sales_trial'
				| 'Visitor_does_not_exist'
				| 'Invalid_OAuth_client'
				| 'Redirect_URL_does_not_match'
				| 'Error_something_went_wrong'
				| 'Authorize_access_to_your_account'
				| 'The_application_will_be_able_to'
				| 'access_your_basic_information'
				| 'Authorize'
				| 'Cancel'
				| 'Logout'
				| 'You_are_logged_in_as'
				| 'Error'
				| 'Your_TOTP_has_been_reset'
				| 'TOTP_Reset_Other_Key_Warning'
				| 'TOTP_reset_email'
				| 'Closed_by_visitor'
				| 'cloud.RegisterWorkspace_Setup_Email_Confirmation'
				| 'cloud.RegisterWorkspace_Setup_Terms_Privacy'
				| 'From'
				| 'Subject'
				| 'Reply_via_Email'
				| 'To'
				| 'Send_via_Email_as_attachment'
				| 'video_livechat_started'
				| 'Your_e2e_key_has_been_reset'
				| 'E2E_Reset_Email_Content'
				| 'E2E_key_reset_email'
				| 'FileUpload_Disabled'
				| 'File_exceeds_allowed_size_of_bytes'
				| 'File_type_is_not_accepted'
				| 'FileUpload_NotAllowed'
				| 'FileUpload_ProtectFilesEnabled_JWTNotSet'
				| 'Location'
				| 'Accounts_Default_User_Preferences_not_available'
				| 'Online'
				| 'Join_Chat'
				| 'AutoTranslate_DeepL'
				| 'Language_Bulgarian'
				| 'Language_Czech'
				| 'Language_Danish'
				| 'Language_German'
				| 'Language_Greek'
				| 'Language_English'
				| 'Language_Spanish'
				| 'Language_Estonian'
				| 'Language_Finnish'
				| 'Language_French'
				| 'Language_Hungarian'
				| 'Language_Italian'
				| 'Language_Japanese'
				| 'Language_Lithuanian'
				| 'Language_Latvian'
				| 'Language_Dutch'
				| 'Language_Polish'
				| 'Language_Portuguese'
				| 'Language_Romanian'
				| 'Language_Russian'
				| 'Language_Slovak'
				| 'Language_Slovenian'
				| 'Language_Swedish'
				| 'Language_Chinese'
				| 'AutoTranslate_Google'
				| 'AutoTranslate_Microsoft'
				| 'public'
				| 'private'
				| 'Encrypted_message'
				| 'Sync_success'
				| 'Video_Conference_Url'
				| 'video_livechat_missed'
				| 'Join_call'
				| 'Video_Conference'
				| 'File_not_allowed_direct_messages'
				| 'Encrypted_file_not_allowed'
				| 'File_removed_by_prune'
				| 'Agent_deactivated'
				| 'User_uploaded_image'
				| 'User_uploaded_file'
				| 'Removed_User'
				| 'Username_is_already_in_here'
				| 'Add_them'
				| 'Do_nothing'
				| 'Let_them_know'
				| 'End_call'
				| 'Livechat_offline_message_sent'
				| 'Error_sending_livechat_offline_message'
				| 'Error_sending_livechat_transcript'
				| 'Livechat_transcript_sent'
				| 'Join_my_room_to_start_the_video_call'
				| 'New_Livechat_offline_message_has_been_sent'
				| 'Sent_from'
				| 'Visitor_Name'
				| 'Visitor_Email'
				| 'Department'
				| 'Message'
				| 'error-invalid-custom-field-value'
				| 'User_started_a_new_conversation'
				| 'New_chat_in_queue'
				| 'User_started_a_new_conversation'
				| 'New_chat_in_queue'
				| 'You_cant_leave_a_livechat_room_Please_use_the_close_button'
				| 'You_have_been_muted'
				| 'Channel_already_exist'
				| 'Channel_doesnt_exist'
				| 'Duplicate_archived_channel_name'
				| 'Channel_Archived'
				| 'error-logged-user-not-in-room'
				| 'Room_not_exist_or_not_permission'
				| 'Channel_created'
				| 'Users_added'
				| 'Username_doesnt_exist'
				| 'Username_and_message_must_not_be_empty'
				| 'StatusMessage_Changed_Successfully'
				| 'StatusMessage_Change_Disabled'
				| 'Channel_already_Unarchived'
				| 'Channel_Unarchived'
				| 'UIKit_Interaction_Timeout'
				| 'Update_your_RocketChat'
				| 'New_version_available_(s)'
				| 'Connect'
				| 'Default'
				| 'User'
				| 'Room'
				| 'Moderation_Report_date'
				| 'Moderation_Reports'
				| 'Created_at'
				| 'Email'
				| 'Something_went_wrong'
				| 'Reload_page'
				| 'Moderation_User_deactivated'
				| 'Moderation_Messages_deleted'
				| 'Moderation_Reports_dismissed'
				| 'Moderation_Deactivate_User'
				| 'Moderation_Are_you_sure_you_want_to_deactivate_this_user'
				| 'Moderation_Reports_all_dismissed'
				| 'Moderation_Dismiss_all_reports'
				| 'Moderation_Dismiss_all_reports_confirm'
				| 'Moderation_Dismiss_reports'
				| 'Subscription'
				| 'Sync_license_update'
				| 'Manage_subscription'
				| 'Upgrade'
				| 'Sync_license_update_Callout_Title'
				| 'Sync_license_update_Callout'
				| 'License'
				| 'Cancel_subscription'
				| 'Click_here_for_more_info'
				| 'used_limit_infinite'
				| 'used_limit'
				| 'ActiveSessions'
				| 'ActiveSessions_InfoText'
				| 'ActiveSessions_available'
				| 'ActiveSessionsPeak'
				| 'ActiveSessionsPeak_InfoText'
				| 'Monthly_active_contacts'
				| 'CountMAC_InfoText'
				| 'Seats'
				| 'CountSeats_InfoText'
				| 'MAC_InfoText'
				| 'Buy_more'
				| 'MAC_Available'
				| 'Community'
				| 'free_per_month_user'
				| 'Seats_InfoText'
				| 'Seats_Available'
				| 'You_have_created_user'
				| 'Add_more_users'
				| 'Done'
				| 'Outdated'
				| 'Latest'
				| 'New_version_available'
				| 'RegisterWorkspace_Features_MobileNotifications_Title'
				| 'RegisterWorkspace_Features_MobileNotifications_Description'
				| 'RegisterWorkspace_Features_MobileNotifications_Disconnect'
				| 'RegisterWorkspace_Features_Marketplace_Title'
				| 'RegisterWorkspace_Features_Marketplace_Description'
				| 'RegisterWorkspace_Features_Marketplace_Disconnect'
				| 'RegisterWorkspace_Features_Omnichannel_Title'
				| 'RegisterWorkspace_Features_Omnichannel_Description'
				| 'RegisterWorkspace_Features_Omnichannel_Disconnect'
				| 'cloud.RegisterWorkspace_Token_Step_One'
				| 'Add_Server'
				| 'AutoTranslate_language_set_to'
				| 'AutoTranslate_Enabled_for_room'
				| 'Report_User'
				| 'Report'
				| 'Why_do_you_want_to_report_question_mark'
				| 'Please_fill_out_reason_for_report'
				| 'Report_has_been_sent'
				| 'Team_Auto-join_exceeded_user_limit'
				| 'Team_Auto-join_updated'
				| 'error-license-user-limit-reached'
				| 'Omnichannel_On_Hold_manually'
				| 'Omnichannel_on_hold_chat_resumed_manually'
				| 'Closed_automatically_because_chat_was_onhold_for_seconds'
				| 'Omnichannel_on_hold_chat_automatically'
				| 'Closed_automatically_chat_queued_too_long'
				| 'Omnichannel_On_Hold_due_to_inactivity'
				| 'Omnichannel_chat_closed_due_to_inactivity'
				| 'App_Request_Admin_Message'
				| 'Warning'
				| 'There is one or more apps in an invalid state. Go to Administration > Apps to review.'
				| 'There is one or more disabled apps with valid licenses. Go to Administration > Apps to review.'
				| 'App_request_enduser_message'
				| 'Omnichannel'
				| 'error-max-rooms-per-guest-reached'
				| 'User_joined_the_channel'
				| 'User_left_this_channel'
				| 'User_left_this_team'
				| 'added__roomName__to_this_team'
				| 'Converted__roomName__to_a_team'
				| 'Converted__roomName__to_a_channel'
				| 'Deleted__roomName__room'
				| 'Removed__roomName__from_the_team'
				| 'User_joined_the_team'
				| 'User_added_to'
				| 'Added__username__to_this_team'
				| 'Room_name_changed_to'
				| 'User_has_been_removed'
				| 'Removed__username__from_the_team'
				| 'Welcome'
				| 'Conversation_finished'
				| 'Chat_started'
				| 'Message_Attachments'
				| 'UserDataDownload_EmailSubject'
				| 'UserDataDownload_EmailBody'
				| 'Channel_Export'
				| 'This_is_a_push_test_messsage'
				| 'You_mentioned___mentions__but_theyre_not_in_this_room'
				| 'You_mentioned___mentions__but_theyre_not_in_this_room'
				| 'Youre_not_a_part_of__channel__and_I_mentioned_you_there'
				| 'You_mentioned___mentions__but_theyre_not_in_this_room_You_let_them_know_via_dm'
				| 'We_appreciate_your_feedback'
				| 'Send'
				| 'Not_likely'
				| 'Extremely_likely'
				| 'Score'
				| 'Why_did_you_chose__score__'
				| 'Group_mentions_disabled_x_members'
				| 'Notify_all_in_this_room'
				| 'NPS_survey_is_scheduled_to-run-at__date__for_all_users'
				| 'SMS_Twilio_NotConfigured'
				| 'SMS_Twilio_InvalidCredentials'
				| 'Video_Conference_Info'
				| 'Close'
				| 'Search_Users'
				| 'Apps'
				| 'Apps_InfoText'
				| 'Marketplace_apps'
				| 'Private_apps'
				| 'You_mentioned___mentions__but_theyre_not_in_this_room'
				| 'You_mentioned___mentions__but_theyre_not_in_this_room_You_can_ask_a_room_admin_to_add_them'
				| 'Conference Call Chat History'
				| 'Federation_Matrix_error_applying_room_roles'
				| 'Open_channel_user_search'
				| 'Mark_all_as_read'
				| 'Edit_previous_message'
				| 'Move_beginning_message'
				| 'Move_beginning_message'
				| 'Move_end_message'
				| 'Move_end_message'
				| 'New_line_message_compose_input'
				| 'Threads'
				| 'WebRTC_Call'
				| 'Premium_and_unlimited_apps'
				| 'Premium_omnichannel_capabilities'
				| 'Unlimited_push_notifications'
				| 'Video_call_manager'
				| 'Remove_RocketChat_Watermark'
				| 'High_scalabaility'
				| 'Custom_roles'
				| 'Message_audit'
				| 'Remove_RocketChat_Watermark_InfoText'
				| 'User_joined_the_conversation'
				| 'Message_is_removed'
				| 'User_has_been_muted'
				| 'User_has_been_unmuted'
				| 'set__username__as__role_'
				| 'removed__username__as__role_'
				| 'This_room_has_been_archived'
				| 'This_room_has_been_unarchived'
				| 'room_removed_read_only_permission'
				| 'room_set_read_only_permission'
				| 'room_allowed_reactions'
				| 'room_disallowed_reactions'
				| 'Enabled_E2E_Encryption_for_this_room'
				| 'Disabled_E2E_Encryption_for_this_room'
				| 'New_chat_transfer_fallback'
				| 'omnichannel_priority_change_history'
				| 'omnichannel_sla_change_history'
				| 'Conversation_closed'
				| 'Voip_call_started'
				| 'Voip_call_duration'
				| 'Voip_call_declined'
				| 'Voip_call_on_hold'
				| 'Voip_call_unhold'
				| 'Voip_call_ended'
				| 'Voip_call_ended_unexpectedly'
				| 'Voip_call_wrapup'
				| 'New_visitor_navigation'
				| 'New_chat_transfer'
				| 'Livechat_chat_transcript_sent'
				| 'New_videocall_request'
				| 'room_changed_type'
				| 'Omnichannel_placed_chat_on_hold'
				| 'Omnichannel_on_hold_chat_resumed'
				| 'user_joined_otr'
				| 'user_requested_otr_key_refresh'
				| 'user_key_refreshed_successfully'
				| 'system_message'
				| 'User_added_by'
				| 'Options'
				| 'Message_Ignored'
				| 'Translated'
				| 'Auto_Translate'
				| 'room_changed_topic_to'
				| 'room_avatar_changed'
				| 'changed_room_announcement_to__room_announcement_'
				| 'changed_room_description_to__room_description_'
				| 'Pinned_a_message'
				| 'Call_Information'
				| 'Call'
				| 'Team_Channels'
				| 'Teams_Info'
				| 'Files'
				| 'Members'
				| 'User_Info'
				| 'Canned_Responses'
				| 'Room_Info'
				| 'Prune_Messages'
				| 'Contact_Chat_History'
				| 'Contact_Info'
				| 'Discussions'
				| 'E2E_disable'
				| 'E2E_enable'
				| 'Export_Messages'
				| 'Apps_Game_Center'
				| 'Keyboard_Shortcuts_Title'
				| 'Teams_members'
				| 'Members'
				| 'Mentions'
				| 'OTR'
				| 'Omnichannel_External_Frame'
				| 'Outlook_calendar'
				| 'Pinned_Messages'
				| 'Notifications_Preferences'
				| 'Search_Messages'
				| 'Starred_Messages'
				| 'Quote'
				| 'Calls'
				| 'E2E_message_encrypted_placeholder'
				| 'Password_Policy_Aria_Description'
				| 'Password_must_have'
				| 'get-password-policy-minLength-label'
				| 'get-password-policy-maxLength-label'
				| 'get-password-policy-forbidRepeatingCharactersCount-label'
				| 'get-password-policy-mustContainAtLeastOneLowercase-label'
				| 'get-password-policy-mustContainAtLeastOneUppercase-label'
				| 'get-password-policy-mustContainAtLeastOneNumber-label'
				| 'get-password-policy-mustContainAtLeastOneSpecialCharacter-label'
				| 'registration.component.welcome'
				| 'Layout_Login_Terms_Content'
				| 'registration.component.switchLanguage'
				| 'registration.page.poweredBy'
				| 'registration.component.resetPassword'
				| 'registration.component.form.createAnAccount'
			>;
			[x: `app-${string}`]: Record<string, string>;
		};
	}
}

export const i18n = i18next.use(sprintf);

export const addSprinfToI18n = function (t: (typeof i18n)['t']) {
	return function (key: string, ...replaces: any): string {
		if (replaces[0] === undefined) {
			return t(key as TranslationKey);
		}

		if (isObject(replaces[0]) && !Array.isArray(replaces[0])) {
			return t(key as TranslationKey, replaces[0] as TOptions) as any;
		}

		return t(key as TranslationKey, {
			postProcess: 'sprintf',
			sprintf: replaces,
		});
	};
};

export const t = addSprinfToI18n(i18n.t.bind(i18n));

/**
 * Extract the translation keys from a flat object and group them by namespace
 *
 * Example:
 *
 * ```js
 * const source = {
 *   'core.key1': 'value1',
 *   'core.key2': 'value2',
 *   'onboarding.key1': 'value1',
 *   'onboarding.key2': 'value2',
 *   'registration.key1': 'value1',
 *   'registration.key2': 'value2',
 *   'cloud.key1': 'value1',
 *   'cloud.key2': 'value2',
 *   'subscription.key1': 'value1',
 *   'subscription.key2': 'value2',
 * };
 *
 * const result = extractTranslationNamespaces(source);
 *
 * console.log(result);
 *
 * // {
 * //   core: {
 * //     key1: 'value1',
 * //     key2: 'value2'
 * //   },
 * //   onboarding: {
 * //     key1: 'value1',
 * //     key2: 'value2'
 * //   },
 * //   registration: {
 * //     key1: 'value1',
 * //     key2: 'value2'
 * //   },
 * //   cloud: {
 * //     key1: 'value1',
 * //     key2: 'value2'
 * //   },
 * //   subscription: {
 * //     key1: 'value1',
 * //     key2: 'value2'
 * //   }
 * // }
 * ```
 *
 * @param source the flat object with the translation keys
 */
export const extractTranslationNamespaces = (source: Record<string, string>): Record<TranslationNamespace, Record<string, string>> => {
	const result: Record<TranslationNamespace, Record<string, string>> = {
		core: {},
		onboarding: {},
		registration: {},
		cloud: {},
		subscription: {},
	};

	for (const [key, value] of Object.entries(source)) {
		const prefix = availableTranslationNamespaces.find((namespace) => key.startsWith(`${namespace}.`));
		const keyWithoutNamespace = prefix ? key.slice(prefix.length + 1) : key;
		const ns = prefix ?? defaultTranslationNamespace;
		result[ns][keyWithoutNamespace] = value;
	}

	return result;
};

/**
 * Extract only the translation keys that match the given namespaces
 *
 * @param source the flat object with the translation keys
 * @param namespaces the namespaces to extract
 */
export const extractTranslationKeys = (source: Record<string, string>, namespaces: string | string[] = []): { [key: string]: any } => {
	const all = extractTranslationNamespaces(source);
	return Array.isArray(namespaces)
		? (namespaces as TranslationNamespace[]).reduce((result, namespace) => ({ ...result, ...all[namespace] }), {})
		: all[namespaces as TranslationNamespace];
};

export type TranslationNamespace =
	| (Extract<RocketchatI18nKeys, `${string}.${string}`> extends `${infer T}.${string}` ? (T extends Lowercase<T> ? T : never) : never)
	| 'core';

const namespacesMap: Record<TranslationNamespace, true> = {
	core: true,
	onboarding: true,
	registration: true,
	cloud: true,
	subscription: true,
};

export const availableTranslationNamespaces = Object.keys(namespacesMap) as TranslationNamespace[];
export const defaultTranslationNamespace: TranslationNamespace = 'core';

export const applyCustomTranslations = (
	i18n: typeof i18next,
	parsedCustomTranslations: Record<string, Record<string, string>>,
	{ namespaces, languages }: { namespaces?: string[]; languages?: string[] } = {},
) => {
	for (const [lng, translations] of Object.entries(parsedCustomTranslations)) {
		if (languages && !languages.includes(lng)) {
			continue;
		}

		for (const [key, value] of Object.entries(translations)) {
			const prefix = availableTranslationNamespaces.find((namespace) => key.startsWith(`${namespace}.`));
			const keyWithoutNamespace = prefix ? key.slice(prefix.length + 1) : key;
			const ns = prefix ?? defaultTranslationNamespace;

			if (namespaces && !namespaces.includes(ns)) {
				continue;
			}

			i18n.addResourceBundle(lng, ns, { [keyWithoutNamespace]: value }, true, true);
		}
	}
};
