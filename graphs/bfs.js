/*global module*/
(function () {
    'use strict';
    var _ = require('underscore');

    var BFS = function (graph) {
        this.graph = graph;
    };

    BFS.prototype.process = function (start, early, late, edge) {
        var processed = {};
        var discovered = {};
        var parent = {};
        var queue = [], vertex, next, weight, p;

        queue.push(start);
        discovered[start] = true;

        while (queue.length) {
            vertex = queue.shift();
            if (_.isFunction(early)) {
                early(vertex);
            }
            processed[vertex] = true;
            p = this.graph.edges[vertex];
            while (p) {
                next = p.label;
                weight = p.weight;
                if (!(next in processed) || this.graph.directed) {
                    if (_.isFunction(edge)) {
                        edge(vertex, next, weight);
                    }
                }
                if (!(next in discovered)) {
                    queue.push(next);
                    discovered[next] = true;
                    parent[next] = vertex;
                }
                p = p.next;
            }
            if (_.isFunction(late)) {
                late(vertex);
            }
        }

        console.log();
        console.log(parent);
    };

    module.exports = BFS;
}());
