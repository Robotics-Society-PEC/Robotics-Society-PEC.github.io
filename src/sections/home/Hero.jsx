import React from "react";
import Image from "next/image";
import backgroundRobotImage from "@/assets/images/background-robot-hero.png";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex flex-row">
      <div className="flex items-center flex-col justify-center">
        <h1 className="main-heading">
          Welcome to <span className="text-accent-blue">Robotics</span> <br />
          Society
        </h1>
        <p className="description m-4">
          One of the <span className="accent-description">leading</span> Indian
          On-Campus Robotics Society Representing India and Punjab Engineering
          College at an international scale{" "}
        </p>
        <div className="flex gap-4">
          <Button variant="outline">Register</Button>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="float-right ">
        <Image
          src={backgroundRobotImage}
          width={927}
          height={1272}
          alt="background robot image"
          draggable={false}
        />
      </div>
    </div>
  );
}

export default Hero;
