import React from "react";
import Image from "next/image";

export default function HelpCard({
  img,
  heading,
  subHeading,
  isOdd,
}: {
  img: string;
  heading: string;
  subHeading: string;
  isOdd: boolean;
}) {
  return (
    <div
      className={`flex  items-center justify-between bg-[#6157C9] ${
        isOdd
          ? "flex-row-reverse pl-5  rounded-[50px]"
          : "flex-row pr-5 rounded-[50px]"
      }`}
    >
      <img src={img} alt="" />
      <div className="flex flex-col items-center justify-center gap-5 w-[500px] ">
        <p className="text-[32px] text-black font-semibold">{heading}</p>
        <p className="text-white text-[24px]">{subHeading}</p>
      </div>
    </div>
  );
}
