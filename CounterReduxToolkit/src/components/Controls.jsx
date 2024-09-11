import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

function Controls() {
  const inputElement = useRef();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    dispatch(counterActions.add({ num: inputElement.current.value }));
  };
  const handleSubtract = () => {
    dispatch(counterActions.subtract({ num: inputElement.current.value }));
  };
  const handleToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary mx-2 my-2"
        onClick={handleIncrement}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-info mx-2 my-2"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-warning mx-2 my-2"
        onClick={handleToggle}
      >
        Privacy Toggle
      </button>
      <div>
        <input type="text" placeholder="Enter Num Here" ref={inputElement} />
        <button
          type="button"
          className="btn btn-success mx-2 my-2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger mx-2 my-2"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default Controls;
