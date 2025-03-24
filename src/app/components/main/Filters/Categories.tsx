"use client";

import { useFilters } from "@/app/hooks/useFilters";

export default function CategoriesFilter({
  setRecipes,
}: {
  setRecipes: (recipes: any) => void;
}) {
  const { categories, selectedCategory, setSelectedCategory, resetCategory } =
    useFilters(setRecipes);

  return (
    <div className="flex gap-3 p-4 overflow-x-auto">
      <button
        className={`px-4 py-2 rounded-lg ${
          !selectedCategory ? "bg-blue-500 text-primary" : "bg-gray-200"
        }`}
        onClick={resetCategory}
      >
        All Recipes
      </button>

      {categories.map((category) => (
        <button
          key={category._id}
          className={`px-4 py-2 rounded-lg ${
            selectedCategory === category.name
              ? "bg-blue-500 text-primary"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedCategory(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
