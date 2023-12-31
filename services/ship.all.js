const Ship = require('./../models/ship')

/**
 * @param {Object} data
 */
module.exports = function () {
    return new Promise((resolve, reject) => {
        Ship.find({})
            .exec(function (err, ship) {
                if (err) {
                    reject(err)
                } else {
                    resolve(ship)
                }
            })
    })
}
