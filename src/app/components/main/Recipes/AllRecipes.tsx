"use client";

import { useEffect, useState } from "react";
import { fetchAllPecipes } from "../../../utils/api/all-recipes";
import CardRecipe from "./CardPecipe";

interface RecipesProp {
  _id: string;
  title: string;
  description: string;
  preview: string;
  rating: number;
}

export default function AllrRecipes() {
  const [recipes, setRecipes] = useState<RecipesProp[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllPecipes()
      .then((data) => setRecipes(data.results))
      .catch(() => setError("Failed to load recipes"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col gap-6">
          {recipes.map((recipe) => (
            <CardRecipe key={recipe._id} {...recipe} />
          ))}
        </ul>
      </div>
    </section>
  );
}
