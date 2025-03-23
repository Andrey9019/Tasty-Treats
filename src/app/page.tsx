import Hero from "./components/main/Hero";
import PopularRecipes from "./components/main/PopularRecipes/PopularRecipes";
import AllrRecipes from "./components/main/Recipes/AllRecipes";
// import Filters from "./components/main/Filters/Filters";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col ">
        {/* <Hero /> */}
        <PopularRecipes />
        {/* <Filters /> */}
        <AllrRecipes />
      </main>
    </div>
  );
}
