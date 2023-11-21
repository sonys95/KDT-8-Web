import PropTypes from "prop-types";

//function 컴포넌트명, const 컴포넌트명 = () => {}
// function FunctionComponent({ props }) {
//   const myClass = "kdt8";

//   return (
//     <>
//       <div>반갑습니다 {myClass}에 오신것을 환영합니다</div>
//       <div>{props.name}</div>
//         <div>{props.age}</div>
//       <div>{props.children}</div>
//      </>
//    );
//  }

//객체분해할당;
function FunctionComponent({ name, age, children }) {
  const myClass = "kdt8";

  return (
    <>
      <div>반갑습니다 {myClass}에 오신것을 환영합니다</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{children}</div>
    </>
  );
}

FunctionComponent.defaultProps = {
  name: "kdt",
  age: 155,
};

FunctionComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default FunctionComponent;
