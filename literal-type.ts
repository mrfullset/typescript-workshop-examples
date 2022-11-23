// @ts-nocheck

namespace Button {
  type SizeVariant = "sm" | "md" | "lg";

  type ColorVariant = "primary" | "secondary";

  type Variant = `${ColorVariant}-${SizeVariant}`;

  const navButtonVariant: Variant = "primary-lg";
  const footerButtonVariant: Variant = "footer-lg";
}
