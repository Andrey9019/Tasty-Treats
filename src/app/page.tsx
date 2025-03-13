import Hero from "./components/main/Hero";
import PopularRecipes from "./components/main/PopularRecipes";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col ">
        {/* <Hero /> */}
        <PopularRecipes />
      </main>
    </div>
  );
}
