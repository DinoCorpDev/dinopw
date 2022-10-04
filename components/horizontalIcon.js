export default function horizontalIcon({ children, text, className }) {
  return (
    <div className={`tokenItem flex-col md:flex-row ${className}`}>
      <div className="iconWrapper md:mr-4">{children}</div>
      <p className="font-black">{text}</p>
    </div>
  );
}
