import moment from 'moment';

export function hasValidToken() {
    let token = JSON.parse(localStorage.getItem('currentToken'));
    return !!(token && tokenDidNotExpire(token));
}

function tokenDidNotExpire(token) {
    return moment(token.expires_at).isAfter(moment());
}

export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentToken'));
}
export function getCurrentUserName() {
    return JSON.parse(localStorage.getItem('currentToken')).name;
}

export function isManager() {
    return getCurrentUser().role === 'manager';
}

export function isBiker() {
    return getCurrentUser().role === 'biker';
}
