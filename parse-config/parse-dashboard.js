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
            user: 'eshop_operator',
            pass: '$2y$12$1cqD3WI7RtDdvGrDWxogEOOROTK3yB/AnWbDPDKaeJCaNw6u4w6EO' // eshoppanda
        }
    ],
    useEncryptedPasswords: true // @link: https://bcrypt-generator.com
}

module.exports = parseDashboardOption;
