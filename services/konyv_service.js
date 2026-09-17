const { konyvek } = require("../database/konyvek_db")

const getHello = (req, res) => {
    res.json({message: "könyvek backend"})
}


const getKonyvek = (req, res) => {
    res.json(konyvek);
}

const getKonyvbyId = (req, res) => {
    const simaId = Number(req.params.id);
    const konyv = konyvek.filter(konyv => getKonyvbyId.id == simaId);
    /*const masikId= req.params["id"];
    const {id} = req.params;*/
}



const createKonyv = (req, res) => {
    /**{
id: 14,
title: "A Da Vinci-kód",
author: "Dan Brown",
category: "Krimi",
year: 2003,
pages: 608,
price: 4590,
views: 2900
},*/

    //const {id, title, author, catgeory, year, pages, views} = req.body;
    console.log(req.body);
}

module.exports = {
    getHello,
    getKonyvek,
    getKonyvbyId,
    createKonyv
}