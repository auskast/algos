/*global require*/
(function () {
    'use strict';
    var Graph = require('./graph');
    var BFS = require('./bfs');
    var DFS = require('./dfs');

    var early = function (vertex) {
        console.log('Early: ' + vertex);
    };
    var late = function (vertex) {
        console.log('Late: ' + vertex);
    };
    var edge = function (x, y, weight) {
        console.log('Edge: ' + x + '-' + y + ' (' + weight + ')');
    };

    var g = new Graph();

    g.insertEdge(1, 2);
    g.insertEdge(1, 5);
    g.insertEdge(1, 6);
    g.insertEdge(2, 3);
    g.insertEdge(2, 5);
    g.insertEdge(3, 4);
    g.insertEdge(4, 5);

    g.print();

    console.log();
    console.log('bfs:');
    new BFS(g).process(1, early, late, edge);

    console.log();
    console.log('dfs:');
    new DFS(g).process(1, early, late, edge);
}());
