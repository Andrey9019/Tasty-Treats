"use client";

import { useEffect, useState } from "react";
import { fetchPopular } from "../../utils/api/popular";
import CardPopularRecipe from "./CardPopularRecipe";

type Recipe = {
  _id: string;
  title: string;
  description: string;
  preview: string;
};

export default function PopularRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPopular()
      .then((data) => setRecipes(data))
      .catch(() => setError("Failed to load popular recipes"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h3 className="text-lg uppercase font-semibold mb-5">
          Popular Recipes
        </h3>
        <ul className="flex flex-col gap-6">
          {recipes.map((recipe) => (
            <CardPopularRecipe key={recipe._id} {...recipe} />
          ))}
        </ul>
      </div>
    </section>
  );
}
