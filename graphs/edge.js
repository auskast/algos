/*global module*/
(function () {
    'use strict';

    var Edge = function (label, next, weight) {
        this.label = label;
        this.next = next;
        this.weight = weight || 0;
    };

    module.exports = Edge;
}());
