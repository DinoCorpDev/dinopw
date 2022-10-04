export default function verticalIcon({
  children,
  text,
  desc,
  className,
  rounded,
  timeline,
}) {
  return (
    <div
      className={`tokenItem flex-col ${className ? className : ""} ${
        timeline ? "cursor-pointer" : ""
      }`}
    >
      <div
        className={`iconWrapper ${
          rounded ? "bg-white rounded-full mb-6" : ""
        } ${timeline ? "mb-5" : ""} mb-2`}
      >
        {children}
      </div>
      <div className={`${timeline ? "contentWrapper" : ""}`}>
        <p className="font-bold text-[15px]">{text}</p>
        {desc ? (
          <p className={`${timeline ? "text-[15px] md:text-base" : ""}`}>
            {desc}
          </p>
        ) : null}
      </div>
    </div>
  );
}
