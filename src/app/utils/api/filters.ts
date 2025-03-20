export const fetchIngredients = async () => {
  try {
    const res = await fetch(
      "https://tasty-treats-backend.p.goit.global/api/ingredients"
    );
    if (!res.ok) throw new Error("Failed to fetch ingredients");
    return await res.json();
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    return [];
  }
};

export const fetchAreas = async () => {
  try {
    const res = await fetch(
      "https://tasty-treats-backend.p.goit.global/api/areas"
    );
    if (!res.ok) throw new Error("Failed to fetch areas");
    return await res.json();
  } catch (error) {
    console.error("Error fetching areas:", error);
    return [];
  }
};
