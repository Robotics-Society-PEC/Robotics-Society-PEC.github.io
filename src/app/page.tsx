import HelpCard from "@/components/HelpCard";
import TraitCard from "@/components/TraitCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { traitRawData, HelpRawData } from "../raw data/indexPage";
import teams from "../raw data/teams";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen font-alata text-white w-full gap-20 mb-10">
      <div className="flex flex-row items-center justify-between px-10 ">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[70%] h-[70%] bg-white opacity-5 blur-[150px] transform rotate-45"></div>
        </div>

        <div className="flex flex-col items-center text-start gap-10">
          <p className="text-[120px] tracking-wider leading-[140px] max-2xl:text-[90px]">
            Welcome to <br />
            <b className="text-[#6157C9]">Robotics</b> <br />
            Society <br />
          </p>
          <p className="text-[28px] tracking-tight font-light max-2xl:text-[22px]">
            One of the <b className="text-[#6157C9]">leading</b> Indian
            On-Campus Robotics Society <br />
            Representing India and Punjab Engineering College at an <br />
            international scale{" "}
          </p>
          <div className="flex flex-row items-center justify-center gap-4">
            <button className="border rounded-lg border-[#6157C9] w-36 py-1 text-[20px] text-[#6157C9]">
              Register
            </button>
            <button className="bg-[#6157C9] hover:bg-opacity-35 rounded-lg text-[20px] w-36 py-1">
              Learn More
            </button>
          </div>
        </div>

        <Image
          src="/hero.png"
          width={907}
          height={1272}
          alt=""
          className=" bg-none max-2xl:w-[800px] max-2xl:h-[1000px]"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#6157C966] rounded-3xl px-6 py-5">
        <div className="flex flex-row items-center justify-center gap-16">
          <Image src={"/logo.png"} width={350} height={300} alt="" />
          <p className="text-[64px]">About Us</p>
        </div>
        <p className="text-[24px]">
          Welcome to the{" "}
          <b className="text-[#FFA830]">
            Robotics Society of Punjab Engineering College
          </b>{" "}
          (PEC)! 🤖✨
          <br /> We’re the go-to place for the coolest,
          <b className="text-[#6157C9]"> most innovative projects</b> in the
          entire college!s🚀 With access <br />
          to top-notch equipment and a knowledge base like no other, we’re here
          to help you bring your ideas <br />
          to life. 🔧⚙️ <br />
          Our society is backed by{" "}
          <b className="text-[#6157C9]">awesome faculty</b> support and a bunch
          of super-talented seniors who are <br />
          always ready to lend a hand. 🙌 <br /> Whether you need help with a
          project or just want to hang out and build something cool, we’ve got
          <br />
          your back. 💪 We pride ourselves on being the most active, helpful,
          and <b className="text-[#6157C9]">supportive group</b> on <br />
          campus. If you’re looking to level up your skills and secure a bright
          future, this is the place for you.
          <br />
          🌟 <br />
          <b className="text-[#6157C9]">
            {" "}
            Come join us at the PEC Robotics Society and let's build something
            awesome together!{" "}
          </b>
          🤩
        </p>
      </div>
      <div className="flex flex-row items-stretch justify-stretch gap-10 px-6">
        {traitRawData.map((trait, index) => {
          return (
            <TraitCard
              imgSvg={trait.imgSvg}
              heading={trait.heading}
              subHeading1={trait.subHeading1}
              subHeading2={trait.subHeading2}
              key={index}
            />
          );
        })}
      </div>
      <div className="relative flex flex-col items-stretch justify-center gap-10">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[70%] h-[70%] bg-white opacity-5 blur-[80px] transform -rotate-45"></div>
        </div>
        <p className="text-[64px] text-center">
          How will joining Robotics Help you 🤔
        </p>
        {HelpRawData.map((help, index) => {
          return (
            <HelpCard
              img={help.img}
              heading={help.heading}
              subHeading={help.subheading}
              isOdd={index % 2 == 0}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center justify-center text-center gap-12">
        <p className="text-[48px]">Have a look at some of our projects👀</p>
        <p className="text-[24px]">
          At the PEC Robotics Society,{" "}
          <b className="text-[#6157C9]">innovation is key&#33;</b> 🤖💡 The best
          way to learn robotics is by <b className="text-[#6157C9]">building</b>{" "}
          <br />
          <b className="text-[#6157C9]">your own projects</b>—and that&apos;s
          exactly what we do&#33; From juniors to seniors, everyone here
          <br /> creates and shares their amazing work. 🛠️🚀
          <br /> Check out the cool projects, from{" "}
          <b className="text-[#6157C9]">AI-driven bots to robotic arms</b>, all
          made by our talented <br /> members. Each project reflects our passion
          for <b className="text-[#6157C9]">pushing boundaries</b> and solving
          real-world <br />
          problems. 🌟{" "}
          <b className="text-[#6157C9]">
            Come explore, get inspired, and start building with us&#33;
          </b>{" "}
          🎉
        </p>
        <button className="text-[20px] py-2 px-5 bg-[#6157C9CC] rounded-full flex items-center justify-center">
          Projects🔨
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-[64px]">Meet The Team</p>
        <div className="flex flex-row items-center justify-center gap-40">
          {teams
            .filter((teamMember) => {
              return (
                teamMember.name.includes("Lalit") ||
                teamMember.name.includes("Shashank")
              );
            })
            .map((teamMember, index) => {
              return (
                <TeamCard
                  img={teamMember.img}
                  name={teamMember.name}
                  designation={teamMember.designation}
                  key={index}
                />
              );
            })}
        </div>
        <div className="flex flex-row items-center justify-center gap-10">
          <p className="text-[36px]">Meet rest of the team🤝.... </p>
          <button className="py-1 px-10 rounded-full text-[20px] bg-[#6157C9CC]">
            Team
          </button>
        </div>
      </div>
    </main>
  );
}
