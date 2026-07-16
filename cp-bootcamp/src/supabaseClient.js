import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cliraleegygzhfyuvyzw.supabase.co";
const supabaseAnonKey = "sb_publishable_C_9eeHNq7LORr1PdGu1Aow_dO_DqFSV";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
