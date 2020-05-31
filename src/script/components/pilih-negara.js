class pilihNegara extends HTMLElement {

    connectedCallback(){
        this.render();
    }

    render(value="IDN"){

        fetch('https://covid19.mathdro.id/api/countries/')
            .then(response => response.json())
            .then(countries => {

                countries = countries.countries;
                
                let html = `
                    <div class="row">
                        <div class="col text-center">
                            <select id = 'inputFieldsOptions' class = 'text-center' onChange = 'document.querySelector("pilih-negara").render(this.value)');">
                    `
                countries.forEach(country => {
                    html += `<option value = "${country.iso3}" ${(country.iso3==value)?"selected":""}> ${country.name} </option>`
                });

                html += `
                            </select>
                        </div>
                    </div>
                `;

                this.innerHTML = html;

                console.log(document.querySelector("select#inputFieldsOptions").value);

                const cardsCovidPilih = document.querySelector('cards-covid.pilih');
                cardsCovidPilih.country = value;
                


            })
        



    }
}

customElements.define("pilih-negara", pilihNegara);