import React from "react";
import Image from "next/image";

export default function TraitCard({
  imgSvg,
  heading,
  subHeading1,
  subHeading2,
}: {
  imgSvg: string;
  heading: string;
  subHeading1: string;
  subHeading2: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-w-[400px] text-white bg-[#6157C9] p-10 rounded-3xl">
      <div className="flex flex-row items-center justify-center gap-3">
        <Image src={imgSvg} width={120} height={100} alt="" />
        <p className="text-[40px]">{heading}</p>
      </div>
      <p className="text-[24px] w-[250px] text-center">
        {subHeading1}
        <br />
        <b className="text-black">{subHeading2}</b>
      </p>
    </div>
  );
}
