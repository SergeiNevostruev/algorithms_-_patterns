interface dataType<T> {
  store: T;
  counter: number;
}

class Singleton {
  private static instance: Singleton;
  protected constructor() {}
  static getInstance = () => {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  };
}

class Config extends Singleton {
  private hashmap = new Map();

  getValue = (key: number | string) => {
    return this.hashmap.get(key);
  };
  setValue = (key: number | string, value: any) => {
    this.hashmap.set(key, value);
  };
}

const config1 = Config.getInstance();
const config2 = Config.getInstance();

config1.setValue();
