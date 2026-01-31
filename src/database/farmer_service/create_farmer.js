import { supabase } from "../../../client";

export async function createFarmer({email, telephone, parish, name, user_id}) {
    const { error } = await supabase.from("farmer_profile").insert({ "email": email, "telephone": telephone, "parish": parish, "isFarmer": true, "name": name, "user_id": user_id });
    if (error) {
        alert(error.message);
        return;
    }
}