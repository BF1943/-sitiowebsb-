import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pxlmgbjzzfwjjfpfywmg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4bG1nYmp6emZ3ampmcGZ5d21nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxODU4MDAsImV4cCI6MjA2NTc2MTgwMH0.j18ywvlqxiaCK7NAh-LfQIcqJdpLrFof6Rvx76ULpXY';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
