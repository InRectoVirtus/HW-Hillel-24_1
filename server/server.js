let http = require('http');
const fs = require('fs');
const url = require('url');
let static = require('node-static');
let file = new static.Server('.');
let port = 8000;

const PATH_FOR_DATA_PERSON = './data/personsData.json';

class DataServicesPerson {
    loadPerson() {
        return new Promise((resolve, reject) => {
            fs.readFile(PATH_FOR_DATA_PERSON, 'utf8', (err, personData) => {
                if (err) {
                    console.error(err);
                    reject(err);
                    return;
                }
                resolve(JSON.parse(personData));
            });
        });
    }
}

const dataServicesPerson = new DataServicesPerson();
let giveRequestPerson = (request, result) => {
    return dataServicesPerson.loadPerson();
};

http.createServer((request, result) => {
    result.setHeader('Access-Control-Allow-Origin', '*');
    const [queryObject , pathName] = [url.parse(request.url, true).query , url.parse(request.url, true).pathname];
    if (request.url === '/person') {
        giveRequestPerson(request, result)
            .then(personData => {
                result.write(JSON.stringify(personData));
                result.end();
            })
            .catch(err => {
                result.statusCode = 400
                result.write(JSON.stringify(err));
                result.end();
            });
        return;
    }
    if (request.url === '/person/name') {
        giveRequestPerson(request, result)
            .then(personData => {
                result.write(JSON.stringify({ name: personData.name }));
                result.end();
            })
            .catch(err => {
                result.statusCode = 400
                result.write(JSON.stringify(err));
                result.end();
            });
        return;
    }
    if (pathName === '/person' && Object.keys(queryObject).length != 0) {
        giveRequestPerson(request, result)
            .then(personData => {
                const respObj = {}
                for (key in queryObject) {
                    if (key in personData) {
                        respObj[key] = personData[key]
                    }
                }
                result.write(JSON.stringify(respObj))
                result.end();
            })
            .catch(err => {
                result.statusCode = 400
                result.write(JSON.stringify(err));
                result.end();
            });
        return;
    }
    if (request.url === '/person/address') {
        giveRequestPerson(request, result)
            .then(personData => {
                const { city, street, postCode } = personData;
                result.write(JSON.stringify({ city, street, postCode }));
                result.end();
            })
            .catch(err => {
                result.statusCode = 400
                result.write(JSON.stringify(err));
                result.end();
            });
        return;
    }
    if (request.url === '/person/post/recipient') {
        giveRequestPerson(request, result)
            .then(personData => {
                const { name, surname, city, street, postCode } = personData;
                result.write(JSON.stringify({ name, surname, city, street, postCode }));
                result.end();
            })
            .catch(err => {
                result.statusCode = 400
                result.write(JSON.stringify(err));
                result.end();
            });
        return;
    }
    result.write('gj');
    result.end();
}).listen(port);
console.log(`Server running on port ${port}`);