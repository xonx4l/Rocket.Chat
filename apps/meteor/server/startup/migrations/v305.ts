import { Settings } from '@rocket.chat/models';

import { addMigration } from '../../lib/migrations';


addMigration({
	version: 305,
	up() {
		return Settings.deleteOne({ _id: 'API_Use_REST_For_DDP_Calls' });
	},
});
