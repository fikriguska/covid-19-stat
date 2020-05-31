import "./components/cards-covid.js";
import "./components/provinsiTable.js";
import "./components/pilih-negara.js";



const main = () => {
    const cardsCovidGlobal = document.querySelector('cards-covid.global');
    const provinsiTable = document.querySelector('provinsi-table');


    cardsCovidGlobal.country = 'global';
    provinsiTable.render();


};

export default main;