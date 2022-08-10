interface ISortArray {
  bubble(ar: number[]): number[]; // пузырьком (возрастание), O(n2)
  selection(ar: number[]): number[]; // выбором O(n2)
  inserts(ar: number[]): number[]; // вставками O(n2)
  merge(ar: number[]): number[]; // слиянием O(n * log n)
  gnome(ar: number[]): number[]; // гномья
  //   shell(ar: number[]): number[]; // Шелла
  //   counting(ar: number[]): number[]; // подсчетом
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
    if (arr.length <= 1) return arr;
    for (let i = 0; i < arr.length; i++) {
      let copy = arr[i];
      let j = i;
      while (j > 0 && arr[j - 1] > copy) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = copy;
    }
    return arr;
  }
  merge2arr(arL: number[], arR: number[]) {
    const sortedList = [];
    while (arL.length && arR.length) {
      if (arL[0] < arR[0]) {
        sortedList.push(arL.shift());
      } else {
        sortedList.push(arR.shift());
      }
    }
    return [...sortedList, ...arL, ...arR] as number[];
  }
  merge(ar: number[]): number[] {
    const arr = [...ar]; // антимутаген =)
    if (arr.length <= 1) return arr;
    let mid = Math.ceil(arr.length / 2);
    const arL = this.merge(arr.slice(0, mid));
    const arR = this.merge(arr.slice(mid));
    return this.merge2arr(arL, arR);
  }
  gnome(ar: number[]): number[] {
    const arr = [...ar]; // антимутаген =)
    if (arr.length <= 1) return arr;
    const l = arr.length;
    let i = 1;
    while (i < l) {
      if (i > 0 && arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        i--;
      } else {
        i++;
      }
    }
    return arr;
  }
}
