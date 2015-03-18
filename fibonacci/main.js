/*global process*/
(function () {
    'use strict';
    var calculations = 0;

    function fibonacci (n) {
        if (n == 0) return 0;

        var i;
        var back2 = 0;
        var back1 = 1;
        var next;

        for (i = 2; i < n; i++) {
            next = back1 + back2;
            back2 = back1;
            back1 = next;
            calculations++;
        }

        return back1 + back2;
    }

    var n = process.argv[2];

    if (!n) {
        console.error('Usage:', process.argv[0], process.argv[1], '[nth term]');
        return;
    }

    console.log(n + ': ' + fibonacci(n));
    console.log(calculations + ' calculations');
}());
