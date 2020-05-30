class provinsiTable extends HTMLElement{

    render(){
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
            .then(response => response.json())
            .then(provinsi => {
                console.log(provinsi);
                let html = `
                    <table class="table text-center">
                      <thead>
                        <tr>
                          <th scope="col" class="bg-dark text-white">Provinsi</th>
                          <th scope="col" class="bg-warning text-white">Positif</th>
                          <th scope="col" class="bg-danger text-white">Meninggal</th>
                          <th scope="col" class="bg-success text-white">Sembuh</th>
                        </tr>
                      </thead>`;

                provinsi.data.forEach(prov => {

                    html += `
                              <tbody>
                              <tr>
                                <th scope="row" class="text-left">${prov.provinsi}</th>
                                <td>${prov.kasusPosi}</td>
                                <td>${prov.kasusMeni}</td>
                                <td>${prov.kasusSemb}</td>
                              </tr>`;
                });

                html += `
                    </tbody>
                    </table>
                `;
                this.innerHTML = html;

                    
            });
    }
}

customElements.define("provinsi-table", provinsiTable);