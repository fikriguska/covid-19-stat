import moment from "moment";

class cardsCovid extends HTMLElement {

    set country(country){
        this._country = country;
        this.render();
    }

    render(){
        const baseUrl = "https://covid19.mathdro.id/api";
        let url = "";

        if(this._country != 'global'){
            url = `${baseUrl}/countries/${this._country}`;
        }
        else{
            url = baseUrl;
        }

        const getDate = (data) => moment(data).format('D MMM YYYY');
        const getTime = (data) => moment(data).format('HH:mm:ss');
        const getTimezone = (data) => moment(data).format("ZZ");
        const getDatetime = (data) => {
            const timezone = getTimezone(data) === '+0700' ? 'WIB' : getTimezone(data);
            return getDate(data) + ' | ' + getTime(data) + ' ' + timezone;
        };
        function separator(num){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        fetch(url)
        .then(response => response.json())
        .then(country => {
            let update = getDatetime(country.lastUpdate);
            if(country.error != undefined){
                this.innerHTML = `
                    <div class="row mt-3">
                        <div class="col text-center">
                        Data negara tidak ditemukan
                        </div>
                    </div>
                `
            }
            else{
                this.innerHTML = `
                    <div class="row mt-3 table-country text-white font-weight-bold">
                        <div class="col-md-4 my-1">
                            <div class="card border-0 bg-warning">
                                <div class="card-body">
                                  <h5 class="card-title text-center">Terinfeksi</h5>
                                  <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                                  <p class="card-text text-center display-number">${separator(country.confirmed.value)}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 my-1">
                            <div class="card border-0 bg-danger">
                                <div class="card-body">
                                  <h5 class="card-title text-center">Meninggal</h5>
                                  <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                                  <p class="card-text text-center display-number">${separator(country.deaths.value)}</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 my-1">
                            <div class="card border-0 bg-success">
                                <div class="card-body">
                                  <h5 class="card-title text-center">Sembuh</h5>
                                  <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
                                  <p class="card-text text-center display-number">${separator(country.recovered.value)}</p>

                                </div>
                            </div>
                        </div>
                        <div class="col text-center text-dark mt-2">
                            pembaharuan terakhir: ${update}
                        </div>
                    </div>

                `;
            }
        });

    }
}

customElements.define("cards-covid", cardsCovid);