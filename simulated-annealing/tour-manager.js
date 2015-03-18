/*global module*/
(function () {
    'use strict';

    module.exports = {
        cities: [],
        addCity: function (city) {
            this.cities.push(city);
        },
        getCity: function (index) {
            if (index >= this.cities.length) throw Error('invalid index', index);
            return this.cities[index];
        }
    };
}());
