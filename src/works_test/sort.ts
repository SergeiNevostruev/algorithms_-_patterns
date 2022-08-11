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

console.time("merge_sort");
const mergeArray = sort.merge(array);
console.timeEnd("merge_sort");
console.log("Сортировка слиянием ====>", mergeArray);

console.time("gnome_sort");
const gnomeArray = sort.gnome(array);
console.timeEnd("gnome_sort");
console.log("Сортировка гномья ====>", gnomeArray);

console.time("shell_sort");
const shellArray = sort.shell(array);
console.timeEnd("shell_sort");
console.log("Сортировка Шелла ====>", shellArray);

console.time("quick_sort");
const quickArray = sort.quickSort(array);
console.timeEnd("quick_sort");
console.log("Сортировка быстрая ====>", quickArray);

console.time("counting_sort");
const countingArray = sort.counting(array);
console.timeEnd("counting_sort");
console.log("Сортировка подсчетом ====>", countingArray);
