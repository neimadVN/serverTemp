'use strict';

const parseServerOptions = require('./parse-server');

const parseDashboardOption = {
    mountPath: process.env.DASHBOARD_MOUNT || '/dashboard',
    apps: [
        {
            serverURL: parseServerOptions.serverURL || 'https://'+process.env.PROJECT_DOMAIN+'.glitch.me/api',
            appId: parseServerOptions.appId,
            masterKey: parseServerOptions.masterKey,
            javascriptKey: parseServerOptions.javascriptKey,
            restKey: parseServerOptions.restAPIKey,
            clientKey: parseServerOptions.clientKey,
            appName: process.env.APP_NAME || 'ESHOP',
            appNameForURL: 'eshop'
        }
    ],
    users: [
        {
            user: 'operator',
            pass: '$2y$12$powl7yKZ633PtIW.d0e.mOGV8X..BQvY8j7Fm/GE2/HrpQg.VJGj6' // Aa123456@
        }
    ],
    useEncryptedPasswords: true // @link: https://bcrypt-generator.com
}

module.exports = parseDashboardOption;
