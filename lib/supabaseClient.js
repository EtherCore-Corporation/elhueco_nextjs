import { createClient } from '@supabase/supabase-js'

// Asegúrate de tener las variables de entorno definidas en .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gplghsigeueslptewoji.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwbGdoc2lnZXVlc2xwdGV3b2ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMjc4NTksImV4cCI6MjA1NDcwMzg1OX0.aHmPV73B1TO0oP2PoLjrbXwepnj0PkpjJiroQavIKZo'

// Comprobar que ambos valores están disponibles
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Falta configuración de Supabase en variables de entorno')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey) 