/*global module*/
(function () {
    'use strict';

    var City = function (x, y) {
        this.x = x || Math.floor(Math.random() * 200);
        this.y = y || Math.floor(Math.random() * 200);
    };

    City.prototype.distanceTo = function (city) {
        if (!city || !city.x || !city.y) throw Error('invalid city', city);
        var xDist = Math.abs(this.x - city.x);
        var yDist = Math.abs(this.y - city.y);
        return Math.sqrt(xDist * xDist + yDist * yDist);
    };

    City.prototype.toString = function () {
        return '(' + this.x + ', ' + this.y + ')';
    };

    module.exports = City;
})();
