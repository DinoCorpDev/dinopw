import Image from "next/image";

export default function ntfItem({
  imgSource,
  text,
  altText,
  className,
  active,
}) {
  return (
    <div
      className={`nftItem text-center m-5 md:m-0 ${
        className ? className : ""
      } ${active ? "active" : ""}`}
    >
      <div className="nftItemImg p-5 md:p-0 w-full">
        <Image src={imgSource} alt={altText} layout="responsive" />
      </div>
      <h4 className="nftItemText font-black">{text}</h4>
    </div>
  );
}
