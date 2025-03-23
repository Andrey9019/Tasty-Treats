"use client";

import { useEffect, useState } from "react";
import { fetchAllPecipes } from "../../../utils/api/all-recipes";
import CardRecipe from "./CardPecipe";
import Filter from "../../main/Filters/Filters";

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
  const [filteredRecipes, setFilteredRecipes] = useState<RecipesProp[] | null>(
    null
  );

  useEffect(() => {
    fetchAllPecipes()
      .then((data) => setRecipes(data.results))
      .catch(() => setError("Failed to load recipes"));
  }, []);

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <Filter setRecipes={setFilteredRecipes} />
        <ul className="flex flex-col gap-6">
          {(filteredRecipes ?? recipes).map((recipe) => (
            <CardRecipe key={recipe._id} {...recipe} />
          ))}
        </ul>
      </div>
    </section>
  );
}
