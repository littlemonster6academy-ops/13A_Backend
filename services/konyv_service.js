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

module.exports = {
    getHello,
    getKonyvek,
    getKonyvbyId
}