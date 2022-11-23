namespace Button_1 {
  type SizeVariant = "sm" | "md" | "lg";

  type ColorVariant = "primary" | "secondary";

  type Variant = `${ColorVariant}-${SizeVariant}`;

  type VariantDefinition = {
    [T in Variant]: {
      color: string;
      height: number;
    };
  };

  const variants: VariantDefinition = {
    "primary-sm": {
      color: "primary-color",
      height: 10,
    },
    "primary-md": {
      color: "primary-color",
      height: 20,
    },
    "primary-lg": {
      color: "primary-color",
      height: 30,
    },
    "secondary-sm": {
      color: "secondary-color",
      height: 10,
    },
    "secondary-md": {
      color: "secondary-color",
      height: 20,
    },
    "secondary-lg": {
      color: "secondary-color",
      height: 30,
    },
  };
}

namespace Button_2 {
  type SizeVariant = "sm" | "md" | "lg";

  type ColorVariant = "primary" | "secondary";

  type Variant = `${ColorVariant}-${SizeVariant}`;

  type SizeVariantDefinition = {
    [T in SizeVariant]: {
      height: number;
    };
  };

  type ColorVariantDefinition = {
    [T in ColorVariant]: {
      color: string;
    };
  };

  const sizeVariants: SizeVariantDefinition = {
    lg: {
      height: 40,
    },
    md: {
      height: 30,
    },
    sm: {
      height: 20,
    },
  };

  const colorVariants: ColorVariantDefinition = {
    primary: {
      color: "primary-color",
    },
    secondary: {
      color: "secondary-color",
    },
  };

  //
  //
  //
  //
  //

  declare function parseButtonVariant(
    variant: Variant
  ): [ColorVariant, SizeVariant];

  const [color, size] = parseButtonVariant("primary-lg");

  const styles = {
    ...colorVariants[color],
    ...sizeVariants[size],
  };
}
