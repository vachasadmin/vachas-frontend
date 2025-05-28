
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yzppllqdotuyhuyaodea.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6cHBsbHFkb3R1eWh1eWFvZGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5Mjc0MzMsImV4cCI6MjA2MzUwMzQzM30.DNhFBZxZVp02Ua3821pKiwcCohG7Zs14YBlpfcuwpLI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
