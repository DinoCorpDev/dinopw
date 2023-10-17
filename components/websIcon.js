export default function websIcon({
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
        } ${timeline ? "mb-2 md:mb-5" : ""} mb-6`}
      >
        {children}
      </div>
      <div className={`${timeline ? "contentWrapper" : ""}`}>
        {desc ? (
          <a href="https://webs.dinolabs.dev/" target="_blank" rel="noreferrer" className={`${timeline ? "text-[20px] md:text-base" : ""}`}>
            {desc}
          </a>
        ) : null}
      </div>
    </div>
  );
}
