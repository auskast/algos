(function () {
    'use strict';

    function heapsort (arr) {
        console.log('original: ' + arr);
        // create a heap
        heapify(arr);

        var end = arr.length - 1;

        while (end > 0) {
            // move biggest item to end
            swap(arr, 0, end);
            console.log('swap:     ' + arr);
            end--;
            // fix heap
            siftDown(arr, 0, end);
        }
        console.log('sorted:   ' + arr);
    }

    function heapify (arr) {
        // start at last non-leaf
        var start = Math.floor((arr.length - 2) / 2);

        while (start >= 0) {
            // sift parents down
            siftDown(arr, start, arr.length - 1);
            start--;
        }
        console.log('heap:     ' + arr);
    }

    function swap(arr, i, j) {
        // in place swap for integers
        arr[i] = arr[i] ^ arr[j];
        arr[j] = arr[i] ^ arr[j];
        arr[i] = arr[i] ^ arr[j];
    }

    function siftDown (arr, start, end) {
        var root = start;
        var child;
        var toSwap;

        // go until a leaf node
        while ((child = root * 2 + 1) <= end) {
            toSwap = root;

            // check left child
            if (arr[toSwap] < arr[child]) {
                toSwap = child;
            }
            // check right child, if exists
            if (child + 1 <= end && arr[toSwap] < arr[child + 1]) {
                toSwap = child + 1;
            }
            if (toSwap === root) {
                // nothing to do
                return;
            }
            swap(arr, root, toSwap);
            console.log('sifting:  ' + arr);
            root = toSwap;
        }
    }

    var arr = [];
    var i;
    var n = 25;

    for (i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    heapsort(arr);
}());
