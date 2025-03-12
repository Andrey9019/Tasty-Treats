import axios from "axios";

export async function fetchPopular() {
  try {
    const response = await axios.get(
      "https://tasty-treats-backend.p.goit.global/api/recipes/popular"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching popular recipes:", error);
    throw error;
  }
}
