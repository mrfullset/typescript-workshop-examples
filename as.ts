//@ts-nocheck

namespace AsBasic {
  const element = document.getElementById("some-id") as HTMLDivElement;
}

namespace AsTypeConversion {
  const a = 5;
  const b = a as string;
}

namespace AsCasting {
  type Base = {
    a: number;
    b: number;
  };

  type Extended = Base & {
    c: string;
    d: string;
  };
  const base: Base = {
    a: 0,
    b: 0,
  };

  const extended: Extended = {
    a: 0,
    b: 0,
    c: "",
    d: "",
  };

  const upcast = extended as Base;
  const downcast = base as Extended;
}

namespace AsConst_Object {
  declare function setFlexDirectionStyles(styles: {
    flexDirection: "row" | "column";
  }): void;

  const styles = {
    flexDirection: "row",
  } as const;

  setFlexDirectionStyles(styles);
}

namespace AsConst_Array {
  const items = ["🍎", "🍌"] as const;

  items.push('📦');
  items.includes('😀');
}
