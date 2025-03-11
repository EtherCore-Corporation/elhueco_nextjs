-- Habilitar la extensión para generar UUIDs (si no está habilitada)
create extension if not exists "uuid-ossp";

-- Tabla: spaces
create table if not exists spaces (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    description text,
    capacity integer,
    created_at timestamptz default now()
);

-- Tabla: reservations
create table if not exists reservations (
    id uuid primary key default uuid_generate_v4(),
    space_id uuid references spaces(id) on delete cascade,
    -- Si se usa Supabase Auth, se puede relacionar con auth.users
    user_id uuid,
    name text not null,
    email text not null,
    start_time timestamptz not null,
    end_time timestamptz not null,
    created_at timestamptz default now()
);

-- Tabla: contact_messages
create table if not exists contact_messages (
    id uuid primary key default uuid_generate_v4(),
    name text not null,
    email text not null,
    message text not null,
    created_at timestamptz default now()
);

-- Tabla para proyectos del portfolio
create table if not exists projects (
    id uuid primary key default uuid_generate_v4(),
    title text not null,
    description text,
    image_url text,
    category text,
    order_index integer,
    created_at timestamptz default now(),
    tags text[],
    metadata jsonb default '{}'::jsonb
);

-- Habilitar el almacenamiento para imágenes
insert into storage.buckets (id, name, public) 
values ('project-images', 'project-images', true);

-- Políticas de seguridad para el bucket
create policy "Public Access" 
on storage.objects for select 
using ( bucket_id = 'project-images' );