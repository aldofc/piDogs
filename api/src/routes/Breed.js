const axios = require("axios");
const { Router } = require("express");
const { apiInfo , dbInfo , allInfo , createBreed , allTemps} = require("./Controllers");
const { Dog } = require("../db")

const router = Router();

//aqui comienzo a configurar los routers

router.get("/" , async (req,res) => { 
    try{
        const respuesta = await allInfo()
        const {name} = req.query
        if(name){
            let breedName = respuesta.filter((d) =>
            d.name.toLowerCase().includes(name.toLowerCase()))
            if(breedName.length === 0 ) {
                return res.status(200).send("El perro no existe")
            }else{
                return res.status(200).send(breedName)
            }
        }
        res.status(200).send(respuesta)
    }catch(e){
        res.status(400).send(e.message)
    }
})
 
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------


router.get("/:idRaza" , async (req,res) => {
    const {idRaza} = req.params
    const all = await allInfo()
    let founded = all.find((b) => b.id == idRaza)
    if(!founded){
        res.status(400).send("Raza no encontrada en los Datos")
    }else{
        let foundedArray= []
        foundedArray.push(founded)
        res.status(200).json(foundedArray)
       }   
    }) 

 //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

 router.post("/" ,  async (req,res) => {
    try{
        let{ name, heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers} = req.body
        await allTemps()
        const newDog = await createBreed(name, heightMin,  heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers)
        res.status(200).send(newDog)
    }catch(e){
        res.status(200).send(e.message)
    }
 })

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.delete("/:id" , async (req,res) => {
    try{
        let [id] = req.params
        const resp = await Dog.destroy({
            where: {id}
        });
        res.status(200).send(`${resp} Perro eliminado`)
    }catch(e){
        res.status(404).send(e.message)
    }
})

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.put("/id:" ,  async (req,res) => {
    try{
        const {id} = req.params
        const{ name, heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers} = req.body
        const resp = await Dog.update({
            name: name,
            heightMin: heightMin,
            heightMax: heightMax,
            weightMin: weightMin,
            weightMax: weightMax,
            lifeMin: lifeMin,
            lifeMax: lifeMax,
            img: img,
            tempers: tempers
        },
        {
            where: {id}
        }
        )
        res.status(200).send(`${resp} perro modificado`)
    }catch(e){
        res.status(404).send(e.message)
    }
})


module.exports = router;