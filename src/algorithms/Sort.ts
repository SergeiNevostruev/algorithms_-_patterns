interface ISortArray {
  bubble(ar: number[]): number[]; // пузырьком (возрастание), O(n2)
  selection(ar: number[]): number[]; // выбором O(n2)
  inserts(ar: number[]): number[]; // вставками O(n2)
  //   merge(arr: number[]): number[]; // слиянием
  //   gnome(arr: number[]): number[]; // гномья
  //   shell(arr: number[]): number[]; // Шелла
  //   counting(arr: number[]): number[]; // подсчетом
}

export class SortArray implements ISortArray {
  constructor() {}
  bubble(ar: number[]): number[] {
    const arr = [...ar]; // антимутаген =)
    if (arr.length <= 1) return arr;
    let tmp: number;
    let last = arr.length - 1;
    while (last !== 1) {
      for (let i = 0; i < last; i++) {
        if (arr[i] > arr[i + 1]) {
          tmp = arr[i + 1];
          arr[i + 1] = arr[i];
          arr[i] = tmp;
        }
      }
      last--;
    }
    return arr;
  }
  selection(ar: number[]): number[] {
    const arr = [...ar]; // антимутаген =)
    if (arr.length <= 1) return arr;
    let min: number;
    let index = 0;
    let last = arr.length - 1;
    while (index !== last) {
      min = index;
      for (let i = index; i <= last; i++) {
        if (arr[min] > arr[i]) min = i;
      }
      [arr[index], arr[min]] = [arr[min], arr[index]];
      index++;
    }
    return arr;
  }
  inserts(ar: number[]): number[] {
    const arr = [...ar]; // антимутаген =)
    let copy: number;
    if (arr.length <= 1) return arr;
    let index = 1;
    while (index < arr.length) {
      copy = arr[index];
      for (let i = index; i > 0; i--) {
        if (arr[i - 1] <= copy) {
          arr[i] = copy;
          break;
        } else {
          arr[i] = arr[i - 1];
        }
      }
      index++;
    }
    return arr;
  }
}
