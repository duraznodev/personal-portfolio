export const Section = ({
  children,
  title,
  id,
  subtitle,
  vh = "min-h-screen",
}) => {
  return (
    <div
      id={id}
      className={`mt-10 flex ${vh} flex-col items-center justify-center gap-10 text-neutral-800`}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-xl text-neutral-600">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};
