import React from "react";

const links: { name: string; href: string }[] = [
  { name: "home", href: "/" },
  { name: "blogs", href: "/blogs" },
  { name: "projects", href: "/projects" },
  { name: "team", href: "/team" },
  { name: "login", href: "/login" },
];
export default function Header() {
  return (
    <div className="top-0 flex flex-row items-center justify-between w-full text-white font-alata px-10 pt-5 ">
      <p className="text-[32px] ">
        Robotics <b className="text-[#6157C9]">PEC</b>
      </p>
      <div className="flex flex-row items-center gap-28  font-[600] ">
        {links.map((link: { name: string; href: string }, index) => {
          return (
            <a href={link.href} key={index} className="text-xl">
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
