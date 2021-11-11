import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = (props) => {
  const counter = useCounter(!props.direction);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
