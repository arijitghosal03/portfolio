import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A full-stack web application built with Next.js and Supabase",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with real-time updates",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c",
      tags: ["React", "Node.js", "PostgreSQL", "Redux"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    // Add more projects as needed
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="object-cover h-48 w-full rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4 mt-auto">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}