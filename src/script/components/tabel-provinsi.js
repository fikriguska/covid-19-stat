class tabelProvinsi extends HTMLElement{

    render(){
        function separator(num){
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
            .then(response => response.json())
            .then(provinsi => {

                let html = `
                  <div class="row">
                    <div class="col overflow-auto p-0">
                      <table class="table text-center mt-3">
                        <thead>
                          <tr>
                            <th scope="col" class="bg-dark text-white">Provinsi</th>
                            <th scope="col" class="bg-warning text-white">Terinfeksi</th>
                            <th scope="col" class="bg-danger text-white">Meninggal</th>
                            <th scope="col" class="bg-success text-white">Sembuh</th>
                          </tr>
                        </thead>`;

                provinsi.data.forEach(prov => {

                    if(prov.provinsi == "Indonesia"){
                        prov.provinsi = "Tidak Diketahui";
                    }

                    html += `
                              <tbody>
                              <tr>
                                <th scope="row" class="text-left">${prov.provinsi}</th>
                                <td>${separator(prov.kasusPosi)}</td>
                                <td>${separator(prov.kasusMeni)}</td>
                                <td>${separator(prov.kasusSemb)}</td>
                              </tr>`;
                });

                html += `
                          </tbody>
                        </table>
                      </div>
                    </div>
                `;
                this.innerHTML = html;

                    
            });
    }
}

customElements.define("tabel-provinsi", tabelProvinsi);