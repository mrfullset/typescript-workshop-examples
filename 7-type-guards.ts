//@ts-nocheck

namespace TypeGuards {
  type NumericButtonEvent = {
    value: number;
  };

  type OperationButtonEvent = {
    action: string;
  };

  type Event = NumericButtonEvent | OperationButtonEvent;

  declare function onNumericButtonClick(e: NumericButtonEvent);
  declare function onOperationButtonClick(e: OperationButtonEvent);

  const onClick_1 = (e: Event) => {
    onNumericButtonClick(e);
    onOperationButtonClick(e);
  };

  const onClick_2 = (e: Event) => {
    switch (typeof e) {
      case "OperationButtonEvent":
        onOperationButtonClick(e);
        return;
      case "NumericButtonEvent":
        onNumericButtonClick(e);
        return;
    }
  };

  
  const isNumericEvent = (e: Event): e is NumericButtonEvent => {
    return "value" in e;
  };

  const onClick = (e: Event) => {
    if (isNumericEvent(e)) {
      onNumericButtonClick(e);
    } else {
      onOperationButtonClick(e);
    }
  };
}
