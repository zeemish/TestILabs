export interface ConfigType {
    port: number;
    stripe?: {
        secretKey: string;
        currency: string;
        webhookSecret: string;
    };
    mongodb?: {
        uri: string;
    };
    google?: {
        apiKey: string;
    };
    db?: {
        user: string;
        pass: string;
        host: string | 'localhost';
        port: number;
        database: string;
        authSource?: string;
    };
    host?: {
        url?: string;
        port?: string;
    };
    jwt: {
        secretOrKey: string;
        expiresIn: number;
    };
    mail?: {
        host?: string;
        port?: string;
        secure?: boolean;
        user?: string;
        pass?: string;
        mailFromName?: string;
        mailFromAddress?: string;
        encryption?: string;
    }
}

export const configs = (): ConfigType => (
    {
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
