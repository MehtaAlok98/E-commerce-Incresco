export default function FilterHeader({
  title,
  children,
  className = "",
  ...props
}) {
  return (
    <>
      <div
        className={`flex items-center justify-between my-4 ${className}`}
        {...props}
      >
        {/* Dynamic Title */}
        <h2 className="text-xl font-medium">{title}</h2>

        {/* Dynamic children (like icons) */}
        <div>{children}</div>
      </div>
    </>
  );
}
