import { useState, useEffect } from "react";

const useCounter = (increment) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (increment === true) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (increment === false) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        console.log("MAYDAY MAYDAY ERROR TIME");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [increment]);
  return counter;
};

export default useCounter;
