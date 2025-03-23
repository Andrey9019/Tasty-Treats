export const fetchRecipes = async (filters: Record<string, string>) => {
  try {
    const queryParams = new URLSearchParams(filters).toString();
    const res = await fetch(
      `https://tasty-treats-backend.p.goit.global/api/recipes?${queryParams}`
    );
    console.log(res);
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
