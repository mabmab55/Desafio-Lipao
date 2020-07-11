function teste() {fetch('https://reqres.in/api/users')
                .then(response => {
                    return response.json();
                })
                .then(info => {
                    //console.log(info);
                    //console.log(info.data[0].first_name);
                    //Criando head da tabela
                    function generateTableHead(table, dados) {
                        let thead = table.createTHead();
                        let row = thead.insertRow();
                        dados = Object.keys(dados[0]);
                        for (let key of dados) {
                            let th = document.createElement("th");
                            let text = document.createTextNode(key);
                            th.appendChild(text);
                            row.appendChild(th);
                        }
                    }
                    //Criando body da tabela
                    function generateTable(table, dados) {
                        for (let element of dados) {
                            let row = table.insertRow();
                            const nomes = info.data[0];
                            //console.log(nomes);
                            var nsize = element.first_name.length;
                            for (key in element) {
                                let cell = row.insertCell();
                                if(key=="avatar") {
                                    avatar_url = element[key];
                                    //console.log(avatar_url)
                                    var a = document.createElement('a');
                                    var i3 = document.createElement('i');
                                    i3.setAttribute('class', 'fab fa-buromobelexperte');
                                    a.appendChild(i3);
                                    cell.appendChild(a);
                                    if (nsize<5) {
                                        var i2 = document.createElement('i');
                                        i2.setAttribute('class', 'fab fa-apple');
                                        cell.appendChild(i2);
                                        
                                    }else{
                                        var i1 = document.createElement('i');
                                        i1.setAttribute('class', 'fas fa-apple-alt');
                                        cell.appendChild(i1)
                                        a.setAttribute('href', avatar_url);
                                    }
                                } else {
                                    let text = document.createTextNode(element[key]);
                                    cell.appendChild(text);

                                }
                            }
                        }
                    }
                    let table = document.querySelector("table");
                    generateTable(table,info.data);
                    generateTableHead(table,info.data);
                })
                .catch(error => {
                    console.log('Errou');
                    console.error(error);
                })
                }
teste();
