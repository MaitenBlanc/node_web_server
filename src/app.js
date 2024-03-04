import { envs } from './config/env.js';
import { startServer } from './server/server.js';

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica (no tiene nombre) autoconvocada (se ejecuta con los paréntesis al final)
(async () => {
    main()
})()