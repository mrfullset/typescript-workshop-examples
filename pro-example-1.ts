namespace ButtonXORProps_1 {
  type CommonProps = {
    label: string;
  };

  type LinkButtonProps = {
    href?: string;
  };

  type CallbackButtonProps = {
    onClick?: () => void;
  };

  type Props = CommonProps & LinkButtonProps & CallbackButtonProps;

  const props: Props = {
    label: "Hello",
    href: "/home",
    onClick: () => {},
  };
}

namespace ButtonXORProps_2 {
  type CommonProps = {
    label: string;
  };

  type LinkButtonProps = {
    href?: string;
    onClick?: never;
  };

  type CallbackButtonProps = {
    onClick?: () => void;
    href?: never;
  };

  type Props = CommonProps & (LinkButtonProps | CallbackButtonProps);

  const props: Props = {
    label: "Hello",
    onClick: () => {},
    href: "",
  };
}

namespace ButtonXORProps_3 {
  type CommonProps = {
    label: string;
  };

  type LinkButtonProps = {
    href?: string;
    onClick?: never;
  };

  type CallbackButtonProps = {
    onClick?: () => void;
    href?: never;
  };

  type Props = CommonProps & (LinkButtonProps | CallbackButtonProps);

  const props: Props = {
    label: "Hello",
    onClick: () => {},
    href: "",
  };
}

namespace ButtonXORProps_4 {
  type CommonProps = {
    label: string;
  };

  type LinkButtonProps = {
    href: string;
  };

  type CallbackButtonProps = {
    onClick: () => void;
  };

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never } & U;
  type XOR<T, U> = Without<T, U> | Without<U, T>;

  type Props = CommonProps & XOR<LinkButtonProps, CallbackButtonProps>;

  const props: Props = {
    label: "Hello",
    href: "/",
    onClick: () => {},
  };


  // rare usecase
  type GeneralXOR<T, U> = T | U extends object
    ? Without<T, U> | Without<U, T>
    : T | U;
}
