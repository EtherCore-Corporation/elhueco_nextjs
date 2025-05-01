import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'
import ProjectCard from './ProjectCard'

const ProjectGrid = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  async function fetchProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
    >
      {loading ? (
        <div className="col-span-full flex justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </motion.div>
  )
}

export default ProjectGrid 