import "./App.css";

function App() {
  //jsx 최상위 요소에 반드시 부모 요소가 필요!
  // const flag = true;
  // let txt = "";
  // if (flag) {
  //   txt = "true입니다";
  // } else {
  //   txt = "false입니다.";
  // }

  // const lists = ["k", "d", "t", "w", "e", "b"];
  const users = [
    { id: 1, name: "John", age: 25, vip: true },
    { id: 2, name: "Jane", age: 19, vip: false },
    { id: 3, name: "Alice", age: 30, vip: true },
    { id: 4, name: "Bob", age: 18, vip: false },
    { id: 5, name: "Charlie", age: 35, vip: true },
  ];
  console.log(users);
  let resultName = users.filter((value) => value.vip === true);

  console.log(resultName);
  return (
    <>
      {resultName.map((value) => (
        <div key={value.id}>{value.name}</div>
      ))}
    </>
  );
}

export default App;
