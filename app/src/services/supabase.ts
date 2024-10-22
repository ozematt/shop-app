import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ehrxzlrcsgalpspmityp.supabase.co" as string;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocnh6bHJjc2dhbHBzcG1pdHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNTAzMjQsImV4cCI6MjA0NDcyNjMyNH0.kMFwxhzj4TdciXJDiaeWw81fbeEv16LfRv7IWFQulPU" as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
