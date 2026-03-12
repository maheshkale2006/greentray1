import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://decvtubzmtlhmtfepjgt.supabase.co";
const supabaseAnonKey = "sb_publishable_Y8jIyuGlqU9wabCylnggfA_Ko5bNktW";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);