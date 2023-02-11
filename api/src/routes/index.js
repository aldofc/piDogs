const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const temperRouter = require("./Temper")
//const breedRouter = require("./Dog")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//router.use("/dogs" , breedRouter)
//router.use("temperaments", temperRouter)






module.exports = router;
