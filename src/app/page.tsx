import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <Hero />
      <h2 className="text-3xl font-bold my-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard title="Project 1" description="Description of project 1" imgSrc="/images/project1.png" />
        <ProjectCard title="Project 2" description="Description of project 2" imgSrc="/images/project1.png" />
        <ProjectCard title="Project 3" description="Description of project 3" imgSrc="/images/project1.png" />
      </div>
    </div>
  )
}
