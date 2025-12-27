declare namespace NodeJS{
    interface ProcessEnv{
        APP_NAME: string;
        PORT?: string;
        MONGO_URL?: string;
    }
}