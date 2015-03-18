/*global module, require*/
(function () {
    'use strict';
    var TourManager = require('./tour-manager');

    function shuffle (array) {
        var i;
        var pos;
        var temp;

        for (i = 0; i < array.length; i++) {
            pos = Math.floor(Math.random() * (array.length - i)) + i;
            temp = array[pos];
            array[pos] = array[i];
            array[i] = temp;
        }
    }

    var Tour = function (tour) {
        this.tour = tour && tour.slice() || [];
        this.distance = 0;
    };

    Tour.prototype.getTour = function () {
        return this.tour;
    };

    Tour.prototype.generateIndividual = function () {
        this.tour = TourManager.cities.slice();
        shuffle(this.tour);
    };

    Tour.prototype.getCity = function (pos) {
        if (pos >= this.tour.length) throw Error('invalid position', pos);
        return this.tour[pos];
    };

    Tour.prototype.swapCities = function (pos1, pos2) {
        if (pos1 >= this.tour.length) throw Error('invalid position', pos1);
        if (pos2 >= this.tour.length) throw Error('invalid position', pos2);
        var temp = this.tour[pos1];
        this.tour[pos1] = this.tour[pos2];
        this.tour[pos2] = temp;
    };

    Tour.prototype.getDistance = function () {
        if (!this.distance) {
            var tourDistance = 0;
            var cityIndex;
            var fromCity;
            var toCity;

            for (cityIndex = 0; cityIndex < this.tourSize(); cityIndex++) {
                fromCity = this.getCity(cityIndex);
                toCity = (cityIndex + 1) < this.tourSize() ? this.getCity(cityIndex + 1) : this.getCity(0);
                tourDistance += fromCity.distanceTo(toCity);
            }

            this.distance = tourDistance;
        }

        return this.distance;
    };

    Tour.prototype.tourSize = function () {
        return this.tour.length;
    };

    Tour.prototype.toString = function () {
        return this.tour.map(function (city) {
            return city.toString();
        }).join('->');
    };

    module.exports = Tour;
}());
