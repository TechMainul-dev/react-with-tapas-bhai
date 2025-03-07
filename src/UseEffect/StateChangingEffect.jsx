import { useState, useEffect } from 'react';

export const StateChangingEffect = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Count: ${count}`;
  // }, [count]);

  return (
    <div>
      <h2 className="text-2xl border-b mt-3">{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="border border-amber-400 px-2 rounded cursor-pointer text-3xl my-2"
      >
        ++
      </button>
    </div>
  );
};
