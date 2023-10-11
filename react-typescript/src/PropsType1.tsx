import React, { useState, useRef } from "react";

interface Props {
  name: string | number;
  age?: number;
}

const PropsType1: React.FC<Props> = ({ name, age }) => {
  const [count, setCount] = useState<number | string>(0);
  const myInput = useRef<HTMLInputElement>();

  const handleFocus = () => {
    myInput.current?.focus();
  };
  const onClick = (e: React.MouseEvent<HTMLElement>) => {};
  return (
    <>
      <h2>Hello {name}</h2>
      <h4>{age}</h4>
      <input ref={myInput} />
      <button onClick={handleFocus}>버튼</button>
      <form action="">
        <button>제출</button>
      </form>
    </>
  );
};

export default PropsType1;

// export default function ProsTye1({name} : Props) {
//   return;
//   <>
//     <h2>Hellow {name} </h2>
//   </>;
// }
