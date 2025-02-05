import React from "react";

const links: { name: string; href: string }[] = [
  { name: "home", href: "/" },
  { name: "blogs", href: "/blogs" },
  { name: "projects", href: "/projects" },
  { name: "team", href: "/team" },
];
export default function Header() {
  return (
    <div className="fixed top-0 flex flex-row items-center justify-between w-full font-[400px] text-white font-alata px-10">
      <p className="text-[32px] ">
        Robotics <b className="text-[#6157C9]">PEC</b>
      </p>
      <div className="flex flex-row items-center justify-between  md:w-[600px] ">
        {links.map((link: { name: string; href: string }, index) => {
          return (
            <a href={link.href} key={index} className="text-lg">
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
