import "./components/cards-covid.js";
import "./components/tabel-provinsi.js";
import "./components/pilih-negara.js";



const main = () => {
    const cardsCovidGlobal = document.querySelector('cards-covid.global');
    const provinsiTable = document.querySelector('tabel-provinsi');


    cardsCovidGlobal.country = 'global';
    provinsiTable.render();


};

export default main;