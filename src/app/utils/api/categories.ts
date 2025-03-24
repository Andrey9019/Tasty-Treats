export const fetchCategories = async () => {
  try {
    const res = await fetch(
      "https://tasty-treats-backend.p.goit.global/api/categories"
    );
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};
