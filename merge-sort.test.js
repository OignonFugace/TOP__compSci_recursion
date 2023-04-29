const { mergeSort } = require("./assignement02_merge-sort.js");


describe('mergeSort', () => {
    test('should sort an empty array', () => {
        const arr = [];
        expect(mergeSort(arr)).toEqual([]);
    });

    test('should sort an array with a single element', () => {
        const arr = [42];
        expect(mergeSort(arr)).toEqual([42]);
    });

    test('should sort an already sorted array', () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort a reverse sorted array', () => {
        const arr = [6, 5, 4, 3, 2, 1];
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort an array with repeated elements', () => {
        const arr = [4, 2, 4, 1, 3, 2, 5, 1];
        expect(mergeSort(arr)).toEqual([1, 1, 2, 2, 3, 4, 4, 5]);
    });

    test('should sort an array with negative and positive numbers', () => {
        const arr = [3, -1, 5, 0, -6, 2, 4];
        expect(mergeSort(arr)).toEqual([-6, -1, 0, 2, 3, 4, 5]);
    });

    test('should sort an array with decimal numbers', () => {
        const arr = [3.5, 1.2, 6.8, 2.1, 9.5, 0.7];
        expect(mergeSort(arr)).toEqual([0.7, 1.2, 2.1, 3.5, 6.8, 9.5]);
    });
});
