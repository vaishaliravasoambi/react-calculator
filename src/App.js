import React from "react";
import "./styles.css";
import { evaluate, exp } from "mathjs";

export default function App() {
  const handleClick = function (value) {
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
  };

  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (ex) {
      setExpression("");
    }
  };

  const clear = function () {
    setExpression("");
  };

  const [expression, setExpression] = React.useState("");

  return (
    <>
      <div className="box">
        <div className="screen">{expression}</div>
        <div className="row">
          {[1, 2, 3, "+"].map((el) => (
            <button className="button" key={el} onClick={() => handleClick(el)}>
              {el}
            </button>
          ))}
        </div>

        <div className="row">
          {[4, 5, 6, "-"].map((el) => (
            <button className="button" key={el} onClick={() => handleClick(el)}>
              {el}
            </button>
          ))}
        </div>

        <div className="row">
          {[7, 8, 9, "*"].map((el) => (
            <button className="button" key={el} onClick={() => handleClick(el)}>
              {el}
            </button>
          ))}
        </div>

        <div className="row">
          {[0, ".", "/", "%"].map((el) => (
            <button className="button" key={el} onClick={() => handleClick(el)}>
              {el}
            </button>
          ))}
        </div>

        <button id="btn1" onClick={calculate}>
          =
        </button>
        <button id="btn2" onClick={clear}>
          Clear
        </button>
      </div>
    </>
  );
}
