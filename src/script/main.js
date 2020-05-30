import "./components/cards-covid.js";
import "./components/provinsiTable.js";


const main = () => {
    const cardsCovidIndonesia = document.querySelector('cards-covid.ID');
    const cardsCovidGlobal = document.querySelector('cards-covid.global');
    const provinsiTable = document.querySelector('provinsi-table');


    cardsCovidIndonesia.country = 'ID';
    cardsCovidGlobal.country = 'global';
    provinsiTable.render();


};

export default main;