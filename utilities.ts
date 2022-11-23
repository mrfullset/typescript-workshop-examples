namespace Omit {
  type A = {
    a: string;
    b: number;
    c: boolean;
  };

  type B = Omit<A, "a">;

  const b: B = {
    b: 1,
    c: true,
  };
}

namespace Partial {
  type A = {
    a: string;
    b: number;
    c: boolean;
  };

  type B = Partial<A>;

  const b: B = {
    c: true,
  };

  type C = {
    a?: string;
    b?: number;
    c?: boolean;
  };
}

namespace Required {
  type A = {
    a?: string;
    b?: number;
    c?: boolean;
  };

  type B = Required<A>;

  const b: B = {
    a: "",
    b: 0,
    c: false,
  };
}

namespace Union {
  type A = {
    a: string;
    b: number;
    c: boolean;
  };

  type B = {
    d: string;
    e: number;
    f: boolean;
  };

  type C = A | B;

  const c: C = { a: "", b: 1, c: true, d: "" };
}

namespace Intersection {
  type A = {
    a: string;
    b: number;
    c: boolean;
  };

  type B = {
    d: string;
    e: number;
    f: boolean;
  };

  type C = A & B;

  const c: C = { a: "", b: 1, c: true, d: "", e: 1, f: false };
}
