import React, { ReactNode, MouseEvent, forwardRef, useRef } from "react";

namespace SimpleComponent {
  const ExampleComponent = ({ a }: ExampleComponentProps) => {
    return <div>ExampleComponent</div>;
  };

  type ExampleComponentProps = {
    a: number;
  };
  const render = <ExampleComponent a={1} />;
}

namespace SpecialProps {
  const Component1 = () => {
    return <>Hello</>;
  };

  const Component2 = ({ children, eventCallback }: Component2Props) => {
    return <div onClick={eventCallback}>{children}</div>;
  };

  type Component2Props = {
    children: ReactNode;
    simpleCallback: (value: string) => void;
    eventCallback: (e: MouseEvent) => void; // mouse event on div (generic)
  };

  const render = (
    <Component2 simpleCallback={(value) => {}} eventCallback={(e) => {}}>
      <Component1 />
    </Component2>
  );
}

namespace PassRef {
  const Component1 = forwardRef<HTMLDivElement>(({}, ref) => {
    return <div ref={ref}>Hello</div>;
  });

  const ref = useRef<HTMLDivElement>(null);

  const render = <Component1 {...{ ref }} />;
}
