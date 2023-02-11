const axios = require('axios');
require('dotenv').config();
const {YOUR_API_KEY} = process.env
const { Breed , Temper} = require('../db');

let link=  `https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`

const apiInfo = async () => {
    const respuesta = await axios.get(link)
    return await respuesta.data.map((b) => {
        let breedInfo = {
            id: b.id,
            name: b.name,
            heightMin: parseInt(b.height.metric.split(" - ")[0]),
            heightMax: parseInt(b.height.metric.split(" - ")[1]),
            weightMin: parseInt(b.weight.metric.split(" - ")[2]),
            weightMax: parseInt(b.weight.metric.split(" - ")[3]),
            lifeMin:parseInt(b.life_span.split(" -  ")[0]),
            lifeMax:parseInt(b.life_span.split(" - ")[1]),
            img: b.image.url,
            tempers: b.temperament ? b.temperament.split(", ") : [],
            createDB: false
        };
        return breedInfo;
    })
}

const dbInfo = async () => {
    const respuesta = await Breed.findAll({
        include : {
            model: Temper,
            attributes : ["id", "name"],
        }
    })

    let tempDB = respuesta.map((t) => {
        return {
            ...t.dataValues,
            tempers: t.tempers.map((t) => t.name)
        }
    })
    return tempDB
}


const allInfo = async () => {
    const dataApi = await apiInfo()
    const dataDb = await dbInfo()

    let allData = await dataApi.concat(dataDb)
    return allData
}


allInfo()


const allTemps = async () => {
    let temps = new Set()  //este es un objeto vacio
    const respuesta = await axios.get(link)

    respuesta.data.forEach((t) => {
    let resultTemp = t.temperament ? t.temperament.split(", ") : [];
    resultTemp.forEach((t) => temps.add(t)) //aqui lo que hacemos es cargar el temp con los temperamentos

    });

    const tempArray = Array.from(temps);  //hacemos un array en este casi temapArray
    tempArray.map(async (t) => {          //cargamos a la DB
        await Temper.findOrCreate({
            where: {name: t},
            defaults: {
                name: t
            }
        })

    })

    const allTemperaments = await Temper.findAll()  //esto lo busca en la db y lo devuelve
    return allTemperaments

}

const createBreed = async (name,heightMin, heightMax, weightMin, weightMax, lifeMin, lifeMax, img, tempers) => {
    if(!name || !heightMin || !heightMax || !weightMin || !weightMax || !lifeMin || !lifeMax ){
        return "Mising Data"
    }

    let newBreed = await Breed.create({
        name,
        heightMin,
        heightMax,
        weightMin,
        weightMax,
        lifeMin,
        lifeMax,
        img
    })

    let temperamentos = await Temper.findAll({
        where: {name :  tempers}
    })

    newBreed.addTemper(temperamentos)
    return newBreed
}

module.exports={
    apiInfo,
    dbInfo,
    allInfo,
    allTemps,
    createBreed
}



