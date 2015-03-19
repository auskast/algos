/*global module, require*/
(function () {
    'use strict';
    var _ = require('underscore');

    var DFS = function (graph) {
        this.graph = graph;
    };

    DFS.prototype.process = function (start, early, late, edge) {
        var processed = {};
        var discovered = {};
        var parent = {};
        var stack = [], vertex, next, weight, p;

        stack.push(start);
        discovered[start] = true;

        while (stack.length) {
            vertex = stack.pop();
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
                    parent[next] = vertex;
                }
                if (!(next in discovered)) {
                    stack.push(next);
                    discovered[next] = true;
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

    module.exports = DFS;
}());
