const superagent = require('superagent')

const getTatooineResidents = () => {
    return superagent
        .get('https://swapi.co/api/planets/1/')
        .then(res => res.body.residents)
        .catch(err => err.message)
}

const promiseMeAString = (string) => {
    return new Promise((resolve, reject) => {
        if (typeof string === 'string') {
            resolve("You kept the Promise!")
        } else {
            reject("You have failed me!")
        }
    })
}

module.exports = {
    getTatooineResidents,
    promiseMeAString,
}