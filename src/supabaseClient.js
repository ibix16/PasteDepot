import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,  // Ensure session is persisted
      autoRefreshToken: true,  // Automatically refresh tokens when they expire
    },
  });
  