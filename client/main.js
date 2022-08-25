class Default {
    static webServer = 'http://localhost:8000';
}

class getDataServer {
    static getPerson() {return fetch(Default.webServer + '/person').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getName() {return fetch(Default.webServer + '/person/name').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getData() {return fetch(Default.webServer + '/person?name&age&surname').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getAddress() {return fetch(Default.webServer + '/person/address').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getPost() {return fetch(Default.webServer + '/person/post/recipient').then(resp => resp.json()).catch(err => {console.error(err)});}
}

let [buttonPerson, buttonName, buttonData, buttonAddress, buttonPost] = [document.getElementById('btn_person'),
                                                                         document.getElementById('btn_name'),
                                                                         document.getElementById('btn_data'),
                                                                         document.getElementById('btn_address'),
                                                                         document.getElementById('btn_post')];


buttonPerson.addEventListener('click', () => {
    getDataServer.getPerson()
    .then(person => {
            document.getElementById('person').innerHTML = JSON.stringify(person);
        }).catch(err => {
            console.error(err)
        });
});

buttonName.addEventListener('click', () => {
    getDataServer.getName()
        .then(person => {
            document.getElementById('name').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonData.addEventListener('click', () => {
    getDataServer.getData()
        .then(person => {
            document.getElementById('data').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonAddress.addEventListener('click', () => {
    getDataServer.getAddress()
        .then(person => {
            document.getElementById('address').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonPost.addEventListener('click', () => {
    getDataServer.getPost()
        .then(person => {
            document.getElementById('post').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});