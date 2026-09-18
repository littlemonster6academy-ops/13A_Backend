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


//Készíts egy GET /konyvek/db végpontot, 
// amely visszaadja, 
// hány könyv található a tömbben.
const getKonyvCount = (req, res) => {
    const konyv = konyvek.length;
    res.json(konyv)
}

/**
 Könyv keresése cím alapján
Készíts egy GET /konyvek/cim/:cim végpontot, 
amely megkeresi a megadott című könyvet.
 */
const getKonyvByTitle = (req, res) => {
    const cim = req.params.cim;
    const konyv = konyvek.find(k => k.title === cim);
    res.json(konyv); //ezt ai mondta meg, nem tudtam, 
                     //de eolvastam mi mit tud;😢😢
}

/**Szerző alapján keresés
Készíts egy GET 
/konyvek/szerzo/:szerzo végpontot, 
amely visszaadja az adott szerző összes könyvét.*/
const getAllAuthorBooks = (req, res) => {
    const author = String(req.params.szerzo)
    const konyv = konyvek.filter(konyv => author === konyv.author)
    res.json(konyv)
    //először ez se ment, de aztan sikerült
}
/*Kategória alapján szűrés
Készíts egy GET /konyvek/kategoria/:kategoria 
végpontot, 
amely csak a megadott kategóriájú könyveket 
adja vissza*/
const getKonyvFilterBYCategory = (req, res) => {
    const catgeory = String(req.params.kategoria)
    const konyv = konyvek.filter(konyv => catgeory === konyv.category)
    res.json(konyv)
    //ezt se tudom :(
    //aztán sikerült
}

/*Megadott ár feletti könyvek
Készíts egy GET /konyvek/ar-felett/:ar végpontot,
 amely azokat a könyveket adja vissza, 
 amelyek ára nagyobb, mint a paraméterben
  megadott ár.
*/
const getKonyvPriceHigherThan = (req, res) => {
    const ar = Number(req.params.ar)
    const konyv = konyvek.filter(konyv => konyv.price > ar)
    res.json(konyv)
}

/*Megadott oldalszám alatti könyvek
Készíts egy GET /konyvek/oldal/:oldal végpontot,
 amely azokat a könyveket adja vissza, 
 amelyek oldalszáma kisebb a megadott értéknél.*/
const getKonyvAbovePrice = (req, res) => {
    const pages = Number(req.params.oldal)
    const konyv = konyvek.filter(konyv => pages > konyv.pages)
    res.json(konyv)
}

/*Megadott év után megjelent könyvek
Készíts egy GET /konyvek/ev/:ev végpontot, 
amely az adott évnél később megjelent könyveket 
adja vissza.*/
const getBookAfterYear = (req, res) => {
    const year = Number(req.params.ev)
    const konyv = konyvek.filter(konyv => year < konyv.year)
    res.json(konyv)
}

/*Népszerű könyvek
Készíts egy GET /konyvek/nepszeru/:views 
végpontot, amely csak azokat a könyveket 
adja vissza, amelyek megtekintéseinek száma
 nagyobb a megadott értéknél.*/
const getKonyvHighterViews = (req, res) => {
    const views = Number(req.params.views)
    const konyv = konyvek.filter(konyv => views < konyv.views)
    res.json(konyv)
}

/*Legolcsóbb könyv
Készíts egy GET /konyvek/legolcsobb végpontot, 
amely csak a legolcsóbb könyvet adja vissza.
*/
const getKonvyLegolcsobb = (req, res) => {
    const price = Number(req.params.price)
    const konyv = konyvek.filter(konyv ) //ezt nem tudtam..
}





module.exports = {
    getHello,
    getKonyvek,
    getKonyvbyId,
    createKonyv,
    getKonyvCount,
    getKonyvByTitle,
    getAllAuthorBooks,
    getKonyvFilterBYCategory,
    getKonyvPriceHigherThan,
    getKonyvAbovePrice,
    getBookAfterYear,
    getKonyvHighterViews,
    getKonvyLegolcsobb
}