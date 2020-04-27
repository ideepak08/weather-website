const request = require('request')
//const chalk = require('chalk')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherbit.io/v2.0/forecast/daily?&lat=' + latitude + '&lon=' + longitude + '&key=6d0dc0b1396f476a9d29108792ca602d'
    
    //const url = 'https://api.weatherbit.io/v2.0/current?&lat=' + latitude + '&lon=' + longitude + '&key=6d0dc0b1396f476a9d29108792ca602d'

    request({ url: url, json: true }, (error, response) => {
        const array = response.body.data
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, (array[0].weather.description + '. It is currently ' + array[0].temp + '°C degress out. There is a ' + array[0].pop + ' % chance of rain.'))
        }
    })
}

module.exports = forecast