interface ISearchArray {
  linear(arr: Array<number>, searchNum: number): number; // O(n), для любого массива
  binary(arr: Array<number>, searchNum: number): number; // O(log n) для сортированного массива по возрастанию
  jumping(arr: Array<number>, searchNum: number): number; // O(sqrt(n)) для сортированного массива по возрастанию
  //   interpolation(arr: Array<number>, searchNum: number): number;
  //   exponential(arr: Array<number>, searchNum: number): number;
}

export class SearchArray implements ISearchArray {
  constructor() {}
  linear(arr: number[], searchNum: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchNum) return i;
    }
    return -1;
  }
  binary(arr: number[], searchNum: number): number {
    let left = 0;
    let right = arr.length - 1;
    let index = -1;
    let mid: number;
    while (index === -1 && left <= right) {
      mid = Math.ceil((left + right) / 2);
      if (arr[mid] === searchNum) {
        index = mid;
      } else if (searchNum < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return index;
  }
  jumping(arr: number[], searchNum: number): number {
    let length = arr.length;
    let jump = Math.ceil(Math.sqrt(length));
    let [left, right] = [0, 0];
    while (left < length && arr[left] <= searchNum) {
      right = Math.min(length - 1, left + jump);
      if (arr[left] <= searchNum && arr[right] >= searchNum) break;
      left += jump;
    }
    if (left >= length || arr[left] > searchNum) return -1;
    let i = left;
    while (i <= right && arr[i] <= searchNum) {
      if (arr[i] === searchNum) return i;
      i++;
    }
    return -1;
  }
}
