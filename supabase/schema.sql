-- Run this once in your Supabase project's SQL Editor to set up the table
-- that the /discuss contact form writes to.

create table if not exists discuss_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  organization text,
  interest text,
  message text
);

-- Row Level Security: the anon key used by the browser can only INSERT
-- (submit the form) — it can never read back other people's submissions.
-- You can still view all rows yourself in the Supabase Table Editor, which
-- uses your account's privileges and bypasses RLS.
alter table discuss_submissions enable row level security;

grant insert on discuss_submissions to anon, authenticated;

create policy "Anyone can submit the contact form"
  on discuss_submissions
  for insert
  to anon
  with check (true);
