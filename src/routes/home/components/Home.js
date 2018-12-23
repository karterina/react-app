// Modules
import React from "react";
import Calculator from "./Calculator.js";


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {

    const {visible} = this.state;

    return (
      <div>
        <p>Hello world</p>
        <div onClick={() => this.setState({visible: !visible})}>click me to change visibility!</div>
        {visible && <div>Do you see me?</div>}
        <h1>The Calculator</h1>
        <Calculator />
      </div>
    )
  }
}

export default Home;
