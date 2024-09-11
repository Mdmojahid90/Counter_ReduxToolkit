import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p className="card-text">Now We Can see Counter value is: {counterVal}</p>
  );
}

export default DisplayCounter;
