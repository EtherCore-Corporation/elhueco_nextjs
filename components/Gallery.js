import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import Image from 'next/image';

export default function Gallery({ layout = 'grid', className = '' }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching images from spaces table');

      // Get images from the spaces table
      const { data: spaces, error: queryError } = await supabase
        .from('spaces')
        .select('*')
        .order('id', { ascending: true });

      if (queryError) {
        console.error('Error fetching spaces:', queryError);
        setError(`Error loading images: ${queryError.message}`);
        return;
      }

      console.log('Spaces data:', spaces);

      if (!spaces || spaces.length === 0) {
        console.log('No spaces found in the database');
        setImages([]);
        return;
      }

      // Transform the data to match our image format
      const imageUrls = spaces.map(space => {
        // Ensure the URL is properly formatted
        let url = space.image_url;
        if (url && url.includes('supabase.co')) {
          // Remove any double slashes except after http(s):
          url = url.replace(/([^:])\/\//g, '$1/');
        }
        
        return {
          url,
          name: space.name || 'Space image',
          metadata: space
        };
      }).filter(image => image.url); // Only include images with valid URLs

      console.log('Processed image URLs:', imageUrls);
      setImages(imageUrls);
    } catch (error) {
      console.error('Error in fetchImages:', error);
      setError(`Error loading images: ${error.message}`);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
        <p className="mt-2 text-gray-400">Cargando imágenes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-400 mb-2">{error}</p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 mb-2">
          No se encontraron imágenes
        </p>
      </div>
    );
  }

  if (layout === 'masonry') {
    return (
      <div className={`columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 ${className}`}>
        {images.map((image, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <div className="relative rounded-lg overflow-hidden hover:opacity-90 transition-opacity bg-gray-800">
              <Image
                src={image.url}
                alt={image.name}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity bg-gray-800">
          <Image
            src={image.url}
            alt={image.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 4}
          />
        </div>
      ))}
    </div>
  );
} 