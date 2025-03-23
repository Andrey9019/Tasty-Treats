"use client";

import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import {
  fetchIngredients,
  fetchAreas,
  cookingTimeOptions,
} from "@/app/utils/api/filters";
import { fetchRecipes } from "@/app/utils/api/fetchRecipes";

export default function Filter({
  setRecipes,
}: {
  setRecipes: (recipes: any) => void;
}) {
  const { register, watch } = useForm({
    defaultValues: {
      search: "",
      time: "",
      area: "",
      ingredient: "",
    },
  });

  const [ingredients, setIngredients] = useState<
    { name: string; _id: string }[]
  >([]);
  const [areas, setAreas] = useState<{ name: string }[]>([]);

  const prevFilter = useRef<string>("");

  useEffect(() => {
    const loadData = async () => {
      const [ingredientsData, areasData] = await Promise.all([
        fetchIngredients(),
        fetchAreas(),
      ]);
      setIngredients(ingredientsData);
      setAreas(areasData);
    };
    loadData();
  }, []);

  const filters = watch();
  console.log(filters);
  const filteresSrting = JSON.stringify(filters);

  if (prevFilter.current !== filteresSrting) {
    prevFilter.current = filteresSrting;
  }
  useEffect(() => {
    const applyFilters = async () => {
      const activeFilters = Object.entries(filters).reduce(
        (acc: Record<string, string>, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        },
        {}
      );
      const data = await fetchRecipes(activeFilters);
      setRecipes(data.results);

      console.log("data", data.results);
    };
    applyFilters();
  }, [filteresSrting, setRecipes]);

  return (
    <form className="space-y-4 p-4  rounded-lg">
      <input
        {...register("search")}
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
    </form>
  );
}
