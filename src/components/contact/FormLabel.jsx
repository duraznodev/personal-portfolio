export const FormLabel = ({ type = "text", text, name, required }) => {
  return (
    <div className="relative z-0">
      <input
        name={name}
        type={type}
        className="peer block w-full border-0 border-b-2 border-neutral-500 bg-transparent py-3
      text-neutral-900 focus:border-neutral-900 focus:outline-none "
        placeholder=" "
        required={required}
      />
      <label
        className="peer absolute top-3 -z-10  origin-[0] -translate-y-6 transform text-neutral-500
        duration-300 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6 peer-focus:text-neutral-900"
      >
        {text}
      </label>
    </div>
  );
};
