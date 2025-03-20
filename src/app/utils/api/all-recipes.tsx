export const fetchAllPecipes = async () => {
  try {
    const res = await fetch(
      "https://tasty-treats-backend.p.goit.global/api/recipes"
    );
    if (!res.ok) throw new Error("Failed to fetch recipes");
    return await res.json();
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
