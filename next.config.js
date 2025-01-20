/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "",
    output: "export",
    reactStrictMode: true,
    env: {
        KINDE_CLIENT_ID: '21272361681748b2aa5996c6ca943bad',
        KINDE_DOMAIN: 'https://confidentify-development.eu.kinde.com',
        KINDE_REDIRECT_URL: 'http://localhost:3000',
        KINDE_LOGOUT_URL: 'http://localhost:3000'
    }
};

module.exports = nextConfig;
