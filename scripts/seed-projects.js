const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const sampleProjects = [
  {
    title: 'Proyecto Creativo 1',
    description: 'Una exploración de diseño innovador',
    image_url: 'https://ejemplo.com/imagen1.jpg',
    category: 'Diseño',
    order_index: 1,
    tags: ['diseño', 'innovación']
  },
  // Añade más proyectos aquí
]

async function seedProjects() {
  const { data, error } = await supabase
    .from('projects')
    .insert(sampleProjects)

  if (error) console.error('Error:', error)
  else console.log('Proyectos insertados:', data)
}

seedProjects() 