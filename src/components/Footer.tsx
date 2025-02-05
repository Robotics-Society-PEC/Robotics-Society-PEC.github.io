import React from "react";
import Image from "next/image";

const socialMediaHandles: { name: string; href: string; logo: string }[] = [
  { name: "instagram", href: "/", logo: "/social-media/instagram.svg" },
  { name: "youtube", href: "/", logo: "/social-media/youtube.svg" },
  { name: "github", href: "/", logo: "/social-media/github.svg" },
  { name: "linkedln", href: "/", logo: "/social-media/linkedln.svg" },
  { name: "twitter", href: "/", logo: "/social-media/twitter.svg" },
];

export default function Footer() {
  return (
    <div className="bg-[#9747FF26] bg-opacity-15 flex flex-row justify-between px-20 pb-10 mb-10 text-white font-alata text-xl ">
      <div className="flex flex-col items-start justify-start">
        <Image
          src="/logo.png"
          width={350}
          height={300}
          alt=""
          className="p-0"
        />
        <p className="-mt-5">
          Punjab Engineering College
          <br /> Sector 12 <br />
          Chandigarh, 160012
        </p>
      </div>
      <div className="flex flex-col items-start justify-end w-[400px] gap-8 font-[400%]">
        <p>Our Socials</p>
        <div className="flex flex-row items-center justify-start gap-4">
          {socialMediaHandles.map(
            (socialMediaHandle: {
              name: string;
              href: string;
              logo: string;
            }) => {
              return (
                <Image
                  src={socialMediaHandle.logo}
                  className="hover:cursor-pointer"
                  alt=""
                  width={50}
                  height={50}
                />
              );
            }
          )}
        </div>
        <p>innovate . build . experiment</p>
      </div>
    </div>
  );
}
