import { NextResponse } from "next/server";

import { projects } from "@/data/projects";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  request: Request,
  context: RouteContext
) {
  const { slug } = await context.params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    return NextResponse.json(
      {
        message: "Project not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(project);
}