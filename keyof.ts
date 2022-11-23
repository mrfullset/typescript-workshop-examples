//@ts-nocheck

namespace FromType {
  type Menu = {
    starter: string;
    main: string;
    drink: string;
  };

  const menu: Menu = {
    drink: "Beer",
    main: "Gulas",
    starter: "Koleno",
  };

  declare function adjustMenu(
    menu: Menu,
    entry: keyof Menu,
    change: string
  ): void;

  adjustMenu(menu, "drink", "Water");
  adjustMenu(menu, "desert", "Pie");
}

namespace FromObject {
  declare function transition(list: string[]): string;

  const transitions = {
    "box-shadow": transition(["box-shadow"]),
    wobble: transition(["wobble"]),
  };

  type Transition = keyof typeof transitions;

  const boxTransition: Transition = "box-shadow";
  const textTransition: Transition = "text-wobble";
}
