import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getData } from "@/lib/serverUtils";

const ProjectsPage = async () => {
  const data = await getData();

  return (
    <div className="container max-w-7xl mx-auto py-12 px-4 mt-4 sm:py-24">
      <div className="flex flex-wrap items-center justify-center mb-8 sm:mb-16 text-2xl sm:text-4xl font-bold text-center">
        <span className="hidden sm:block h-px w-12 bg-blue-500 mr-4"></span>
        <span className="mr-2">🚀</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-500">
          My
        </span>
        <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Projects
        </span>
        <span className="ml-2">🚀</span>
        <span className="hidden sm:block h-px w-12 bg-blue-500 ml-4"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.projects.map((project, index) => (
          <Card
            key={project.title}
            className={`flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${
              index === data.projects.length - 1 &&
              data.projects.length % 2 !== 0
                ? "md:col-span-2 md:max-w-[calc(50%-1rem)] md:mx-auto"
                : ""
            }`}
          >
            <div className="w-full p-4">
              <Image
                src={project.cover}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <div className="flex flex-col flex-grow p-4 text-center">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm">
                      <GlobeIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </Link>
                  <Link
                    href={project.code_repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline">
                      <GitHubLogoIcon className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
