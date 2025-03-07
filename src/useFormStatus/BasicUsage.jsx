import { useFormStatus } from 'react-dom';

const handleSubmit = async () => {
  await new Promise((res) => setTimeout(res, 1000));
};

const Submit = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <button
      className="bg-black text-white px-2 py-1 rounded-md text-3xl"
      type="submit"
      disabled={pending}
    >
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

export const BasicUsage = () => {
  return (
    <form action={handleSubmit}>
      <Submit />
    </form>
  );
};
