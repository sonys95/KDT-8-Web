import PropTypes from "prop-types";
import book from "./best.png";

function FunctionComponent({ title, author, price, type }) {
  const myClass = "kdt8";

  return (
    <>
      <div className="top">
        <h1 className="title">이번주 베스트 셀러</h1>
        <img src={book} alt=""></img>
        <h1>{title}</h1>
      </div>
      <div>저자 : {author}</div>
      <div>판매가 : {price}</div>
      <div>구분 : {type}</div>
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
