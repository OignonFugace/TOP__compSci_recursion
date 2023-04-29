
/**
 * Merge two sorted arrays into a single sorted array.
 * @param {number[]} arr1 - The first sorted array.
 * @param {number[]} arr2 - The second sorted array.
 * @returns {number[]} The merged sorted array.
 */
function merge(arr1, arr2) {
    const sortedArr = [];
    while (arr1.length || arr2.length) {
        if (!arr1.length) {
            sortedArr.push(arr2.shift());
        } else if (!arr2.length) {
            sortedArr.push(arr1.shift());
        } else {
            arr1[0] < arr2[0] ? sortedArr.push(arr1.shift()) : sortedArr.push(arr2.shift());
        }
    }
    return sortedArr;
}


/**
 * Sort an array using the merge sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} The sorted array.
 */
function mergeSort(arr) {
    if (arr.length < 2) return arr;

    let arr1 = arr.slice(0, arr.length/2);
    let arr2 = arr.slice(arr.length/2);
    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);

    return merge(arr1, arr2);
}


module.exports = { mergeSort };

