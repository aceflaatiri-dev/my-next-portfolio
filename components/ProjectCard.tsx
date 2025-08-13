import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
}

export default function ProjectCard({ title, description, imgSrc }: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image src={imgSrc} alt={title} width={500} height={300} className="object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}
    