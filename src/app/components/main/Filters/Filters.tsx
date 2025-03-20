"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchIngredients, fetchAreas } from "../../../utils/api/filters";

const Filters = () => {
  const { register, watch, setValue } = useForm({
    defaultValues: {
      search: "",
      time: "",
      area: "",
      ingredients: "",
    },
  });

  const [ingredients, setIngredients] = useState<{ name: string }[]>([]);
  const [areas, setAreas] = useState<{ name: string }[]>([]);

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

  // Отримуємо поточні значення фільтрів
  const filters = watch();

  // Відправляємо запит при зміні фільтрів
  useEffect(() => {
    const queryParams = new URLSearchParams(
      Object.entries(filters).reduce(
        (acc: Record<string, string>, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        },
        {}
      )
    ).toString();

    console.log("Fetching recipes with filters:", queryParams);

    // TODO: Додати API-запит для отримання рецептів
  }, [filters]);

  return (
    <form className="space-y-4 p-4 border rounded-lg shadow-md">
      {/* Search */}
      <div>
        <label className="block font-medium">Search</label>
        <input
          {...register("search")}
          placeholder="Enter text"
          className="input"
        />
      </div>

      {/* Time */}
      <div>
        <label className="block font-medium">Time</label>
        <select {...register("time")} className="input">
          <option value="">Any</option>
          <option value="10">10 min</option>
          <option value="20">20 min</option>
          <option value="30">30 min</option>
        </select>
      </div>

      {/* Area */}
      <div>
        <label className="block font-medium">Area</label>
        <select {...register("area")} className="input">
          <option value="">Any</option>
          {areas.map((area) => (
            <option key={area.name} value={area.name}>
              {area.name}
            </option>
          ))}
        </select>
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium">Ingredients</label>
        <select {...register("ingredients")} className="input">
          <option value="">Any</option>
          {ingredients.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Filters;
