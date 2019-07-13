module.exports.groupAdultsByAgeRange = (arrayOfPeople) => {
    return arrayOfPeople.filter(person => person.age >= 18).reduce((result, person) => {
        if (person.age <= 20) {
            if (!Object.keys(result).includes('20 and younger')) {
                result['20 and younger'] = []
            }
            result['20 and younger'].push(person)
        } else if (person.age <= 30) {
            if (!Object.keys(result).includes('21-30')) {
                result['21-30'] = []
            }
            result['21-30'].push(person)
        } else if (person.age <= 40) {
            if (!Object.keys(result).includes('31-40')) {
                result['31-40'] = []
            }
            result['31-40'].push(person)
        } else if (person.age <= 50) {
            if (!Object.keys(result).includes('41-50')) {
                result['41-50'] = []
            }
            result['41-50'].push(person)
        } else if (person.age > 50) {
            if (!Object.keys(result).includes('51 and older')) {
                result['51 and older'] = []
            }
            result['51 and older'].push(person)
        }
        return result
    }, {})
}