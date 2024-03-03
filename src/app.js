const { envs } = require('./config/env')
const { startServer } = require('./server/server')



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