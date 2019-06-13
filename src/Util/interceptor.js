import siteConfig from './config';

export function requestInterceptor(config) {
    config.baseURL = siteConfig.api_base;
    const token = JSON.parse(localStorage.getItem('currentToken'));
    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: 'Bearer ' + token.access_token,
        };
    }
    return config;
}
