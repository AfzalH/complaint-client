const config_dev = {
    api_base: 'http://127.0.0.1:3333/',
    debug: true
};

const config_prod = {
    api_base: 'https://biker.reacticket.com/api/',
    debug: false
};

let config = config_dev;

if (process.env.REACT_APP_ENV === 'prod') {
    config = config_prod;
}

export default config;
