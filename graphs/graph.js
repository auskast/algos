/*global module, require*/
(function () {
    'use strict';
    var _ = require('underscore');
    var Edge = require('./edge');

    var Graph = function (directed) {
        this.edges = {};
        this.degree = {};
        this.directed = directed || false;
    };

    Graph.prototype.insertEdge = function (x, y, weight, directed) {
        this.edges[x] = new Edge(y, this.edges[x], weight);
        if (!this.degree[x]) this.degree[x] = 0;
        this.degree[x]++;

        if (!(directed || this.directed)) {
            this.insertEdge(y, x, weight, true);
        }
    };

    Graph.prototype.print = function () {
        var adj;
        var p;
        _.each(this.edges, function (edge, label) {
            adj = [];
            p = edge;
            while (p) {
                adj.push(p.label);
                p = p.next;
            }
            console.log(label + ': ' + adj.join(', '));
        });
    };

    module.exports = Graph;
}());
