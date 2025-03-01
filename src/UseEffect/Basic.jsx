import { useState, useEffect } from 'react';
import { StateChangingEffect } from './StateChangingEffect';
import { PropsChangeEffect } from './PropsChangeEffect';
import { CleanUpEffect } from './CleanUpEffect';

export const Basic = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side Effect Logic
    setTimeout(
      () =>
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => response.json())
          .then((json) => setData(json)),
      1000,
    );
  }, []);
  return (
    <div>
      <h2 className="text-3xl">Fetch data</h2>
      <p>{data ? data.title : 'Loading...'}</p>
      <StateChangingEffect />
      <PropsChangeEffect userId={3} />
      <hr />
      <CleanUpEffect />
    </div>
  );
};
