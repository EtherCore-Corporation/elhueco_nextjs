DELETE FROM projects WHERE true;

INSERT INTO projects (
  title,
  description,
  image_url,
  category,
  order_index,
  tags,
  metadata
) VALUES 
(
  'Film Production Setup',
  'Capturing cinematic moments with full equipment package',
  'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/film-setup.jpg',
  'Film',
  1,
  ARRAY['4k', 'green-screen', 'lighting'],
  '{"duration": "2 days", "crew_size": 5}'::jsonb
),
(
  'Live Performance Stage',
  'Interactive theater setup with dynamic lighting system',
  'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/performance.jpg',
  'Performance',
  2,
  ARRAY['audio', 'stage-design', 'led'],
  '{"capacity": 150, "special_effects": true}'::jsonb
),
(
  'Immersive Video Mapping',
  '360° projection mapping installation for art exhibition',
  'https://gplghsigeueslptewoji.supabase.co/storage/v1/object/public/project-images/video-mapping.jpg',
  'Digital Art',
  3,
  ARRAY['3d-mapping', 'projection', 'interactive'],
  '{"resolution": "8K", "sensors_used": 12}'::jsonb
); 