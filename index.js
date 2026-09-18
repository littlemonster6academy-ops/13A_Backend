const express = require("express");
const port = 3030;
const app = express();

const {getHello, getKonyvek,
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

} = require("./services/konyv_service")

//req.body miatt
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);
app.get("/konyvek/db", getKonyvCount);
app.get("/konyvek/cim/:cim", getKonyvByTitle);
app.get("/konyvek/szerzo/:szerzo", getAllAuthorBooks);
app.get("/konyvek/kategoria/:kategoria", getKonyvFilterBYCategory);
app.get("/konyvek/ar-felett/:ar", getKonyvPriceHigherThan);
app.get("/konyvek/oldal/:oldal", getKonyvAbovePrice);
app.get("/konyvek/ev/:ev", getBookAfterYear);
app.get("/konyvek/nepszeru/:views", getKonyvHighterViews);
app.get(" /konyvek/legolcsobb", getKonvyLegolcsobb);

//paraméterezés - ugyanaz a végpont, különböző válaszokat tud adni a paramétertől függően.
//egy végpontnak van egy request, és egy response objektuma. a paramétereket a requestben lehet találni.
// req.params.parameternev vagy--> req.params["parameternev"]
//paraméter megadása express js-ben: "/konyvek/:id" //teszt: /konyvek/2
//a paraméterben szereplő adatok azok szövegek.


//így kell definiálni: app.get("/konyvek/:id");

app.get("/konyvek/:id", getKonyvbyId);


// adatfelvétel
// POST kérés
// request.body --> önmagában a végpont nem tudja mi ez. Ezért kell express.json())
// app.use(express.json()) --> megmondja, hogy json fogadjuk az adatokat

app.post("/ujkonyv", createKonyv);


app.listen(port, () => {
    console.log(`AAAAAAAAAAAAA SZERVER FUT A ${port} on.`);
})