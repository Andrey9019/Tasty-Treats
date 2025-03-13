import axios from "axios";

export async function fetchAllPecipes() {
  try {
    const response = await axios.get(
      "https://tasty-treats-backend.p.goit.global/api/recipes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}
