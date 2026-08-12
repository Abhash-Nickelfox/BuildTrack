import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase environment variables are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env file. Falling back to a placeholder client — requests will fail until real credentials are set.'
  )
}

// createClient throws synchronously on an empty/invalid URL, which would
// otherwise crash the whole app before .env is configured. Fall back to a
// syntactically valid placeholder so the app still renders; real requests
// will just fail gracefully (caught by callers) until credentials are set.
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
)
