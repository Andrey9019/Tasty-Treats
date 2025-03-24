import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { fetchRecipes } from "@/app/utils/api/fetchRecipes";
import {
  fetchIngredients,
  fetchAreas,
  cookingTimeOptions,
} from "@/app/utils/api/filters";
import { fetchCategories } from "@/app/utils/api/categories";

export const useFilters = (setRecipes: (recipes: any) => void) => {
  const { register, watch, setValue, reset } = useForm({
    defaultValues: {
      time: "",
      area: "",
      ingredient: "",
    },
  });

  const [search, setSearch] = useState("");
  const [areas, setAreas] = useState<{ name: string }[]>([]);
  const [ingredients, setIngredients] = useState<
    { name: string; _id: string }[]
  >([]);
  const [categories, setCategories] = useState<{ name: string; _id: string }[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>(
    {}
  );

  useEffect(() => {
    const loadData = async () => {
      const [ingredientsData, areasData, categoriesData] = await Promise.all([
        fetchIngredients(),
        fetchAreas(),
        fetchCategories(),
      ]);
      setIngredients(ingredientsData);
      setAreas(areasData);
      setCategories(categoriesData);
    };
    loadData();
  }, []);

  const filters = watch();

  const updateFilters = useCallback(() => {
    const newFilters = {
      ...filters,
      category: selectedCategory || "",
      title: search || "",
    };

    const filteredActiveFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([_, value]) => value)
    );
    setActiveFilters((prevFilters) =>
      JSON.stringify(prevFilters) === JSON.stringify(filteredActiveFilters)
        ? prevFilters
        : filteredActiveFilters
    );

    // if (
    //   JSON.stringify(activeFilters) !== JSON.stringify(filteredActiveFilters)
    // ) {
    //   setActiveFilters(filteredActiveFilters);
    // }
  }, [filters, selectedCategory, search]);

  useEffect(() => {
    updateFilters();
  }, [filters, selectedCategory, search]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipes(activeFilters);
      setRecipes(data.results);
    };

    if (Object.keys(activeFilters).length > 0) {
      fetchData();
    }
  }, [activeFilters, setRecipes]);

  const resetCategory = () => {
    setSelectedCategory(null);
  };

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearch("");
    reset();
    setActiveFilters({});
  };

  return {
    register,
    watch,
    setValue,
    search,
    setSearch,
    areas,
    ingredients,
    categories,
    selectedCategory,
    setSelectedCategory,
    cookingTimeOptions,
    activeFilters,
    resetCategory,
    resetFilters,
    updateFilters,
  };
};
