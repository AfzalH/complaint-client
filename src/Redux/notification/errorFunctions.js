import { get } from 'lodash';
import { NotificationManager } from 'react-notifications';

function getErrorTitle(error) {
    let title = get(error, 'response.data.message', 'Unknown error occurred');

    if (title === '') {
        if (get(error, 'response.status') === 404) {
            title = 'Error: requested resource not found';
        } else {
            title = 'Unknown error occurred';
        }
    }
    return title;
}

function getErrorMessage(error) {
    let message = '';
    let error_messages = get(error, 'response.data.errors', []);
    let i = 1;
    for (let key in error_messages) {
        message = message + i++ + '. ' + error_messages[key] + '\n';
    }
    // if (!message) {
    //   message = "Unknown error";
    // }
    return message;
}

export function* showErrorNotification({ payload }) {
    const error = payload;
    let title = getErrorTitle(error);
    let message = getErrorMessage(error);
    yield NotificationManager.error(message, title, 5000);
}
