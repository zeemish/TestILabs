"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configs = void 0;
const configs = () => ({
    port: Number(process.env.PORT) || 3000,
    host: {
        url: '<server-url>',
        port: '3000',
    },
    jwt: {
        secretOrKey: process.env.JWT_SECRET || "infrolabs_site123",
        expiresIn: Number(process.env.JWT_EXPIRE_IN_SECONDS) || 36000000,
    },
    mail: {
        host: process.env.MAIL_HOST,
        port: process.env.SMTP_MAIL_PORT,
        secure: !!process.env.SECURE,
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        mailFromName: process.env.MAIL_FROM_NAME,
        mailFromAddress: process.env.MAIL_FROM_ADDRESS,
        encryption: process.env.MAIL_ENCRYPTION,
    },
});
exports.configs = configs;
