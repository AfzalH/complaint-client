import { get } from 'lodash';
import {NotificationManager} from 'react-notifications';

function getSuccessMessage(success) {
    return get(success, 'data.message', null);
}

export function* showSuccessNotification({ payload }) {
    let title = getSuccessMessage(payload);
    if (title) {
        yield NotificationManager.success('', title, 3000);
    }
}
