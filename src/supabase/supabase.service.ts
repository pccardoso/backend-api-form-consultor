import { createClient, SupabaseClient } from "@supabase/supabase-js";

export class SupabaseService {

    private supabaseService: SupabaseClient;

    constructor() {
        this.supabaseService = createClient(
            process.env.SUPABASE_URL!,
            process.env.SUPABASE_KEY!
        );
    }

    getSupabaseService() {
        return this.supabaseService;
    }
}