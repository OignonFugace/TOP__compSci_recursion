
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


const arr1 = []; // Tableau vide
const arr2 = [42]; // Tableau avec un seul élément
const arr3 = [1, 2, 3, 4, 5, 6]; // Tableau déjà trié
const arr4 = [6, 5, 4, 3, 2, 1]; // Tableau trié en ordre décroissant
const arr5 = [4, 2, 4, 1, 3, 2, 5, 1]; // Tableau avec des éléments répétés
const arr6 = [3, -1, 5, 0, -6, 2, 4]; // Tableau avec des nombres négatifs et positifs
const arr7 = [3.5, 1.2, 6.8, 2.1, 9.5, 0.7]; // Tableau avec des nombres décimaux

console.log(mergeSort(arr1)); // []
console.log(mergeSort(arr2)); // [42]
console.log(mergeSort(arr3)); // [1, 2, 3, 4, 5, 6]
console.log(mergeSort(arr4)); // [1, 2, 3, 4, 5, 6]
console.log(mergeSort(arr5)); // [1, 1, 2, 2, 3, 4, 4, 5]
console.log(mergeSort(arr6)); // [-6, -1, 0, 2, 3, 4, 5]
console.log(mergeSort(arr7)); // [0.7, 1.2, 2.1, 3.5, 6.8, 9.5]

