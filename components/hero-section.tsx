import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center lg:text-left lg:max-w-xl">
        <h1 className="text-4xl font-bold sm:text-6xl mb-6">
          Hi, I'm <span className="text-primary">Arijit Ghosal</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Full Stack Developer specializing in building AI applications.
          </p>
          <p className="text-xl text-muted-foreground mb-8">
          Currently a Final Year B.Tech student exploring oppurtunities in the field of Information Technology.
        </p>
        <div className="flex justify-center lg:justify-start gap-4 mb-8">
          <Button asChild>
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex justify-center lg:justify-start gap-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/arijitghosal03" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/arijit-ghosal-b80257214/" target="_blank">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:arijitghosal0309@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative w-72 h-72 lg:w-96 lg:h-96">
        {/* Yellow gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,215,0,0.3)_0%,rgba(255,215,0,0)_70%)] rounded-full blur-3xl -z-10 scale-150 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,165,0,0.2)_0%,rgba(255,165,0,0)_60%)] rounded-full blur-2xl -z-10 scale-125" />
        
        {/* Profile picture container */}
        <div className="relative w-full h-full rounded-full border-2 border-grey-400/20 overflow-hidden backdrop-blur-sm">
          <Image
            src="/profile.png"
            alt="Profile Picture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}