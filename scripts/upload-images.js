const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')

// Configurar cliente de Supabase
const supabase = createClient(
  'https://gplghsigeueslptewoji.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbGdoc2lnZXVlc2xwdGV3b2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjc4NTksImV4cCI6MjA1NDcwMzg1OX0.aHmPV73B1TO0oP2PoLjrbXwepnj0PkpjJiroQavIKZo'
)

const sampleImages = [
  {
    name: 'film-setup.jpg',
    url: 'https://images.unsplash.com/photo-1485846234645-a62644f84728'
  },
  {
    name: 'performance.jpg',
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'
  },
  {
    name: 'video-mapping.jpg',
    url: 'https://images.unsplash.com/photo-1550184658-ff6132a71714'
  }
]

async function downloadImage(url, filename) {
  try {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const buffer = await response.buffer()
    const filePath = path.join(__dirname, 'temp', filename)
    fs.writeFileSync(filePath, buffer)
    return filePath
  } catch (error) {
    console.error('Error downloading image:', error)
    throw error
  }
}

async function uploadToSupabase(filePath, filename) {
  try {
    const fileBuffer = fs.readFileSync(filePath)
    
    const { data, error } = await supabase.storage
      .from('project-images')
      .upload(filename, fileBuffer, {
        contentType: 'image/jpeg',
        upsert: true
      })

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error uploading to Supabase:', error)
    throw error
  }
}

async function main() {
  try {
    // Crear directorio temporal si no existe
    const tempDir = path.join(__dirname, 'temp')
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir)
    }

    for (const image of sampleImages) {
      try {
        console.log(`\nProcesando ${image.name}...`)
        
        // Descargar imagen
        const filePath = await downloadImage(image.url, image.name)
        console.log('✓ Imagen descargada')

        // Subir a Supabase
        await uploadToSupabase(filePath, image.name)
        console.log('✓ Imagen subida a Supabase')

        // Limpiar archivo temporal
        fs.unlinkSync(filePath)
        console.log('✓ Archivo temporal eliminado')
      } catch (error) {
        console.error(`Error procesando ${image.name}:`, error)
      }
    }

    // Limpiar directorio temporal
    if (fs.existsSync(tempDir)) {
      fs.rmdirSync(tempDir)
      console.log('\n✓ Directorio temporal eliminado')
    }
    
    console.log('\n✓ Proceso completado')
  } catch (error) {
    console.error('Error en el proceso principal:', error)
  }
}

main() 