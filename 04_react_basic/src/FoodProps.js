import { Component } from "react"; //1번 방법
import PropTypes from "prop-types";

class ClassComponent extends Component {
  render() {
    const { food } = this.props;

    return (
      <>
        <h1>
          제가 좋아하는 음식은 <div className="food">{this.props.food} </div>
          입니다
        </h1>
      </>
    );
  }
}

ClassComponent.defaultProps = {
  food: "디폴트고기",
};

ClassComponent.prototypes = {
  food: PropTypes.string,
};

export default ClassComponent;
