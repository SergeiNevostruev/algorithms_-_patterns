import { SortArray } from "../algorithms/Sort";

const sort = new SortArray();

let array = [20, 8, 9, 0, 1, 2, 3, 5, 2, 17, 40, 6];

console.log("Исходный массив =====>", array);

console.time("buble_sort");
const bubleArray = sort.bubble(array);
console.timeEnd("buble_sort");
console.log("Сортировка пузырьком ====>", bubleArray);

console.time("selection_sort");
const selectionArray = sort.selection(array);
console.timeEnd("selection_sort");
console.log("Сортировка выбором ====>", selectionArray);

console.time("inserts_sort");
const insertsArray = sort.inserts(array);
console.timeEnd("inserts_sort");
console.log("Сортировка вставками ====>", insertsArray);
