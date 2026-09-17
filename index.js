const express = require("express");
const port = 3030;
const app = express();

const {getHello, getKonyvek,
    getKonyvbyId

} = require("./services/konyv_service")

//req.body miatt
app.use(express.json());

app.get("/hello", getHello);
app.get("/konyvek", getKonyvek);

//paraméterezés - ugyanaz a végpont, különböző válaszokat tud adni a paramétertől függően.
//egy végpontnak van egy request, és egy response objektuma. a paramétereket a requestben lehet találni.
// req.params.parameternev vagy--> req.params["parameternev"]
//paraméter megadása express js-ben: "/konyvek/:id" //teszt: /konyvek/2
//a paraméterben szereplő adatok azok szövegek.


//így kell definiálni: app.get("/konyvek/:id");

app.get("/konyvek/:id", getKonyvbyId);


// adatfelvétel: 

app.listen(port, () => {
    console.log(`AAAAAAAAAAAAA SZERVER FUT A ${port} on.`);
})