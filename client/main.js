class Configurations {
    static webServer = 'http://localhost:8000';
}

class getDataServer {
    static getPerson() {return fetch(Configurations.webServer + '/person').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getName() {return fetch(Configurations.webServer + '/person/name').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getData() {return fetch(Configurations.webServer + '/person?name&age&surname').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getAddress() {return fetch(Configurations.webServer + '/person/address').then(resp => resp.json()).catch(err => {console.error(err)});}
    static getPost() {return fetch(Configurations.webServer + '/person/post/recipient').then(resp => resp.json()).catch(err => {console.error(err)});}
}

let [buttonPerson, buttonName, buttonData, buttonAddress, buttonPost] = [document.querySelector('#get-person'),
                                                                         document.querySelector('#get-name'),
                                                                         document.querySelector('#get-data'),
                                                                         document.querySelector('#get-address'),
                                                                         document.querySelector('#get-post')];


buttonPerson.addEventListener('click', () => {
    getDataServer.getPerson()
    .then(person => {
            document.querySelector('.person').innerHTML = JSON.stringify(person);
        }).catch(err => {
            console.error(err)
        });
});

buttonName.addEventListener('click', () => {
    getDataServer.getName()
        .then(person => {
            document.querySelector('.name').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonData.addEventListener('click', () => {
    getDataServer.getData()
        .then(person => {
            document.querySelector('.data').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonAddress.addEventListener('click', () => {
    getDataServer.getAddress()
        .then(person => {
            document.querySelector('.address').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});

buttonPost.addEventListener('click', () => {
    getDataServer.getPost()
        .then(person => {
            document.querySelector('.post').innerHTML = JSON.stringify(person);
        })
        .catch(err => {
            console.error(err)
        });
});