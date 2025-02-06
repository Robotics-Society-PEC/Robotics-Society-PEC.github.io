import HelpCard from "@/components/HelpCard";
import TraitCard from "@/components/TraitCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const traitRawData = [
  {
    imgSvg: "/innovate.svg",
    heading: "Innovate",
    subHeading1: "The very first step towards success is innovation. ",
    subHeading2: "Have any ideas, Let's give it a try?",
  },
  {
    imgSvg: "/build.svg",
    heading: "Build",
    subHeading1: "Ideas are necessary but not sufficient.",
    subHeading2: " Come forward, and start building.",
  },
  {
    imgSvg: "/experimental.svg",
    heading: "Experiment",
    subHeading1: "Finish implementing the ideas into a real-life model. ",
    subHeading2: "Why wait then? Let's go and test it.",
  },
];

const HelpRawData = [
  {
    img: "/help1.png",
    heading: "Hands-On Learning 🛠️",
    subheading:
      "Get practical experience with robotics, electronics, and programming by working on real-world projects—beyond what’s taught in the classroom.",
  },
  {
    img: "/help2.png",
    heading: "Mentorship & Guidance 👩‍🏫👨‍🏫",
    subheading:
      "Learn from experienced seniors and faculty who provide invaluable support, guidance, and mentorship to help you grow. ",
  },
  {
    img: "/help3.png",
    heading: "Access to Advanced Tools & Resources ⚙️",
    subheading:
      "Work with cutting-edge equipment and technology that will boost your skills and give you an edge in your projects.",
  },
  {
    img: "/help4.png",
    heading: "Teamwork & Leadership Skills 🤝",
    subheading:
      "Collaborate with like-minded students, sharpen your teamwork skills, and even take up leadership roles in various projects.",
  },
  {
    img: "/help5.png",
    heading: "Boost Your Career 🚀",
    subheading:
      " Gain experience that looks great on your resume, preparing you for internships, jobs, and higher studies in robotics, AI, or any tech-related field.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-alata text-white w-full gap-20">
      <div className="flex flex-row items-center justify-between px-10 ">
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[70%] h-[70%] bg-white opacity-5 blur-[150px] transform rotate-45"></div>
        </div>

        <div className="flex flex-col items-center text-start gap-10">
          <p className="text-[120px] tracking-wider leading-[140px]">
            Welcome to <br />
            <b className="text-[#6157C9]">Robotics</b> <br />
            Society <br />
          </p>
          <p className="text-[28px] tracking-tight font-light">
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
          className=" bg-none"
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
        {traitRawData.map((trait) => {
          return (
            <TraitCard
              imgSvg={trait.imgSvg}
              heading={trait.heading}
              subHeading1={trait.subHeading1}
              subHeading2={trait.subHeading2}
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
            />
          );
        })}
      </div>
    </div>
  );
}
