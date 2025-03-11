import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [4, 0, 4])

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        filter: blur.toString().startsWith("4") ? "blur(4px)" : "blur(0px)"
      }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="relative group cursor-pointer"
    >
      <div className="relative h-[400px] rounded-xl overflow-hidden">
        {/* Capa de fondo con parallax */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30"
          style={{
            scale: 1.2,
          }}
          whileHover={{ scale: 1.3 }}
        />

        {/* Imagen principal */}
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover"
        />

        {/* Máscara SVG */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id={`clip-${project.id}`}>
              <path d="M0,0 L100,0 L100,100 L0,100 Z" />
            </clipPath>
          </defs>
        </svg>

        {/* Contenido superpuesto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end"
        >
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-200">{project.description}</p>
          <div className="flex gap-2 mt-4">
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 rounded-full text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProjectCard 