// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://aetpyrdcltqtukjdqqsw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldHB5cmRjbHRxdHVramRxcXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0OTMwMzUsImV4cCI6MjA0NjA2OTAzNX0.29HmiD3a6GaRWGA1bYGW0JpX1KaeXFBRGr6jqvGgM2Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);