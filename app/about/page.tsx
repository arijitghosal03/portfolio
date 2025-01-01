import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const skills = [
    "Java",
    "Python",
    "SQL",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Machine Learning"
    
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            I'm a final year B.Tech student passionate in building Full Stack AI applications. I love turning complex problems into simple, beautiful, and
            intuitive solutions.
          </p>
          <p className="text-lg mb-4">
            I am also serving as Google Developers Group On Campus Organizer GCELT for year 2024-25
            </p>
          <p className="text-lg mb-4">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing my knowledge through technical writing.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <Card key={skill}>
            <CardContent className="p-4 text-center">{skill}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}