"use client";

import { useFilters } from "@/app/hooks/useFilters";

export default function Filter({
  setRecipes,
}: {
  setRecipes: (recipes: any) => void;
}) {
  const {
    areas,
    cookingTimeOptions,
    ingredients,
    register,
    search,
    setSearch,
    resetFilters,
    categories,
    selectedCategory,
    setSelectedCategory,
    resetCategory,
  } = useFilters(setRecipes);

  return (
    <div className="flex flex-col gap-3 p-4 overflow-x-auto">
      <div>
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
      <form className="space-y-4 p-4  rounded-lg">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // {...register("search")}
          placeholder="Search..."
          className="w-full px-4 py-2 border rounded-lg"
        />

        <label className="font-medium">Time</label>
        <select
          {...register("time")}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Any</option>
          {cookingTimeOptions.map((time) => (
            <option key={time} value={time}>
              {time} min
            </option>
          ))}
        </select>

        <label className="font-medium">Regions</label>
        <select
          {...register("area")}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Any</option>
          {areas.map((area) => (
            <option key={area.name} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>

        <label className="font-medium">Ingredients</label>
        <select
          {...register("ingredient")}
          className="w-full px-4 py-2 border rounded-lg"
        >
          <option value="">Any</option>
          {ingredients.map((ingredient) => (
            <option key={ingredient._id} value={ingredient._id}>
              {ingredient.name}
            </option>
          ))}
        </select>
        <button
          onClick={resetFilters}
          className="w-full px-4 py-2 mt-4  rounded-lg"
        >
          Reset Filters
        </button>
      </form>
    </div>
  );
}
