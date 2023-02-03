export const FormTextArea = ({ text, name, required }) => {
  return (
    <div className="relative z-0">
      <textarea
        name={name}
        type="text"
        className="peer -z-10 block w-full border-0 border-b-2 border-neutral-500 bg-transparent py-2.5
      text-neutral-900 focus:border-neutral-900 focus:outline-none dark:border-neutral-600"
        placeholder=" "
        required={required}
      />
      <label
        className="peer absolute top-3 -z-10 origin-[0] -translate-y-8 transform text-neutral-500
        duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-10"
      >
        {text}
      </label>
    </div>
  );
};
