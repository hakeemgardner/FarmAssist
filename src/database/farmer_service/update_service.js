import { supabase } from "../../../client";

export async function UpdateCurrentUser(updatedData) {
    const currentUser = supabase.auth.getUser();
    if(currentUser === null) return alert("A problem occured while getting user!")
    
    const userEmail = (await currentUser).data.user.email;
    
    const { data, error } = await supabase
        .from("farmer_profile")
        .update({
            name: updatedData.name,
            email: updatedData.email,
            telephone: updatedData.telephone,
            parish: updatedData.parish
        })
        .eq('email', userEmail)
        .select();
    
    if (error) {
        alert("Error updating profile: " + error.message);
        return null;
    }
    
    alert("Profile updated successfully!");
    return data[0];
}

export async function UpdateCurrentUserId(updatedData) {
    const currentUser = supabase.auth.getUser();
    if(currentUser === null) return alert("A problem occured while getting user!")
    
    const userEmail = (await currentUser).data.user.email;
    
    const { data, error } = await supabase
        .from("farmer_profile")
        .update({
            user_id: updatedData
        })
        .eq('email', userEmail)
        .select();
    
    if (error) {
        alert("Error updating profile: " + error.message);
        return null;
    }
    
    alert("Profile updated successfully!");
    return data[0];
}