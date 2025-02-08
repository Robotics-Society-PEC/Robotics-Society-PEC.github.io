import React from "react";
import Image from "next/image";

export default function TeamCard({
  img,
  name,
  designation,
}: {
  img: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={img}
        width={300}
        height={280}
        className="rounded-full mb-2"
        alt=""
      />
      <p className="text-[48px] leading-[40px] text-center">
        {name}
        <br />{" "}
        <b className="text-[32px] text-[#6157C9] font-[300]">{designation}</b>
      </p>
    </div>
  );
}
