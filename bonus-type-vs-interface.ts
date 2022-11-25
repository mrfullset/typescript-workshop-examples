namespace Types {
  type A = {
    a: number;
    b: string;
    c: () => void;
  };

  type B = A & {
    d: string;
    e: number;
  };
}

namespace Interfaces {
  interface A {
    a: number;
    b: string;
    c: () => void;
  }

  interface B extends A {
    d: string;
    e: number;
  }
}
