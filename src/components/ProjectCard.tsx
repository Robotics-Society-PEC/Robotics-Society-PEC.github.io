import React from 'react';
import {ProjectCardProps} from "@/types";
import Image from "next/image";
import {timeAgo} from "@/lib/utils";

const ProjectCard = ({data}:ProjectCardProps ) => {
    return (
        <div className="px-[150px]">
            <div className="text-white bg-purple-100 rounded-[50px] px-10 grid grid-cols-2">
                <div className="py-7 px-10 font-alata w-auto">
                    <p className="text-4xl">{data.title}</p>
                    <p className="text-xl text-black text-bold">-{data.subtitle}</p>
                    <p className="text-xl text-[#2C2C2C]">{timeAgo(data.created)}</p>
                    <p className="text-xl">{data.description}</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <Image
                        src={data.imageUrl}
                        alt={data.title}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;