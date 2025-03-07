import { useFormStatus } from 'react-dom';

const Submit = () => {
  const { pending, data } = useFormStatus();
  return (
    <div>
      <input
        disabled={pending}
        className="border border-green-400 text-xl"
        name="MovieName"
        type="text"
      />
      <button
        disabled={pending}
        className="bg-green-400 text-xl px-2"
        type="submit"
      >
        {pending ? 'Loading...' : 'Submit'}
      </button>

      <br />
      <p className="text-2xl m-2">
        {data && `Searching for ${data?.get('MovieName')}...`}
      </p>
    </div>
  );
};
const handleSubmit = async () => {
  await new Promise((res) => setTimeout(res, 1000));
};

export const DataUsage = () => {
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  );
};
