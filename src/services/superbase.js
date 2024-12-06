import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qgexwapmvcpabtvoredv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZXh3YXBtdmNwYWJ0dm9yZWR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MTg1MDgsImV4cCI6MjA0ODk5NDUwOH0.mAAI1SZL0eUOZaS2x5Efcmc9MtFNMgAKZQQJ4tpac1U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
