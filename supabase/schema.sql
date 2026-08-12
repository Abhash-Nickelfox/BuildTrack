-- BuildTrack showcase site — Supabase schema
-- This site is a marketing/showcase site only; it does not implement the
-- BuildTrack product. The only backend need so far is capturing demo
-- requests from the contact section on the homepage.

create table if not exists public.demo_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  organization text,
  interest_area text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.demo_requests enable row level security;

-- Allow anonymous visitors to submit a demo request, but not read/list them.
create policy "Anyone can submit a demo request"
  on public.demo_requests
  for insert
  to anon
  with check (true);
