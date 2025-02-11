import React from 'react';
import {projectsCardData} from "@/raw data/projectsData";
import ProjectCard from "@/components/ProjectCard";
import Link from 'next/link';

const ProjectsPage = () => {
    return (
        <div>
            {projectsCardData.map((projectData,index) => (
                <Link href={`/projects/${projectData.id}`} className="flex py-10" key={index}>
                    <ProjectCard data={projectData} />
                </Link>
            ))}
        </div>
    );
};

export default ProjectsPage;