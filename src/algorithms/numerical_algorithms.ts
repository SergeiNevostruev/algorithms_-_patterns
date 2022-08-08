export default {
  // Наибольший общий делитель
  nod: (a: number, b: number): number => {
    let tmp: number;
    while (b !== 0) {
      tmp = a % b;
      a = b;
      b = tmp;
    }
    return a;
  },
};
