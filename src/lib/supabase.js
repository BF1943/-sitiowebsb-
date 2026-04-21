
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL =
  import.meta.env?.VITE_SUPABASE_URL ||
  'https://pxlmgbjzzfwjjfpfywmg.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env?.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bG1nYmp6emZ3ampmcGZ5d21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODU4MDAsImV4cCI6MjA2NTc2MTgwMH0.j18ywvlqxiaCK7NAh-LfQIcqJdpLrFof6Rvx76ULpXY';

const isBrowser = typeof window !== 'undefined';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: isBrowser,
    autoRefreshToken: isBrowser,
    detectSessionInUrl: isBrowser,
  },
});

export default supabase;
export { SUPABASE_URL, SUPABASE_ANON_KEY };
