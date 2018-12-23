// Modules
import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: null,
      operation: null,
      secondNum: null
    };
  }



  render() {

    let getFirstNum = (event) => {
      this.state.firstNum != null ? 
        this.setState({firstNum: this.state.firstNum + event.target.textContent}) : this.setState({firstNum: event.target.textContent})
    }
  
    let clickOperation = (event) => { 
      this.setState({operation: event.target.textContent});
    }

    let getSecondNum = (event) => {
      this.state.secondNum != null ? 
        this.setState({secondNum: this.state.secondNum + event.target.textContent}) : this.setState({secondNum: event.target.textContent})
    }

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const options = ['+', '-', '=']

    return (
      <div>

        <p>first num {this.state.firstNum}</p>
        <p>operation {this.state.operation}</p>
        <p>second num {this.state.secondNum}</p>
        <p>result</p>      
        <div>
          {numbers.map(
            number => (
              <button key={number}
                      onClick={event => (getFirstNum(event))}
              >
                {number}
              </button>
            ) 
          )}
        </div>
        <div>
          {options.map(
              option => (
                <button key={option}
                        onClick={event => (clickOperation(event))}
                >
                  {option}
                </button>
              )
          )}
        </div>
      </div>
    )
  }
}
export default Calculator;
