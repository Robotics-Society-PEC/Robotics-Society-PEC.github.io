"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const links: { name: string; href: string }[] = [
  { name: "home", href: "/" },
  { name: "blogs", href: "/blogs" },
  { name: "projects", href: "/projects" },
  { name: "team", href: "/team" },
  { name: "login", href: "/login" },
];
export default function Header() {
  const router = useRouter();
  return (
    <div className="top-0 flex flex-row items-center justify-between w-full text-white font-alata px-10 pt-5 ">
      {/* <p className="text-[32px] ">
        Robotics <b className="text-[#6157C9]">PEC</b>
      </p> */}
      <Image
        src="/logo.png"
        width={200}
        height={100}
        alt=""
        className="p-0 hover:cursor-pointer"
        onClick={() => {
          router.replace("/");
        }}
      />
      <div className="flex flex-row items-center gap-28  font-[600] ">
        {links.map((link: { name: string; href: string }, index) => {
          return (
            <a
              href={link.href}
              key={index}
              className="text-xl relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-current after:scale-x-0 after:transition hover:after:scale-x-100"
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
