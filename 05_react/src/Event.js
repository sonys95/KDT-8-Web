function Event() {
  const handleClick = () => {
    alert("클릭했습니다");
  };
  const handleClick2 = (str) => {
    alert(str);
  };

  return (
    <>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => handleClick2("222")}>클릭2</button>
    </>
  );
}
export default Event;
