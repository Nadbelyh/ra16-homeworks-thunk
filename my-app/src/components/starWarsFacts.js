import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberOfFacts } from "../features/starWarsFacts/starWarsFactsSlice";

function StarWarsFacts() {
  const dispatch = useDispatch();
  const starWarsFacts = useSelector((state) => state.starWarsFacts.getFacts);

  const [count, setCount] = useState("");

  const hendleChange = (e) => {
    setCount(e.target.value);
  };

  useEffect(() => {
    dispatch(numberOfFacts(count));
  }, [count, dispatch]);

  return (
    <div>
      <input
        value={count}
        onChange={hendleChange}
        className="input"
        type="number"
        min="0"
        max="5"
        name="factsInput"
        placeholder="Введите число от 1 до 5"
      />
      <ul>
        {starWarsFacts &&
          starWarsFacts.map((fact) => (
            <li key={fact.id} id={fact.id}>
              {fact.factText}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default StarWarsFacts;
