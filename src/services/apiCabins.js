import supabase from "./superbase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}
