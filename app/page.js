import recipes from "@/data/recipes.json";
import HandPicked from "./Components/RootPage/HandPicked";
import HeroArea from "./Components/RootPage/HeroArea";
import LatestRecipes from "./Components/RootPage/LatestRecipes";
import PopularCategories from "./Components/RootPage/PopularCategories";
import Subscribe from "./Components/RootPage/Subscribe";
import SuperDelicious from "./Components/RootPage/SuperDelicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <HeroArea recipes={recipes} />

      <SuperDelicious recipes={recipes} />

      <PopularCategories recipes={recipes} />

      <Subscribe />

      <HandPicked recipes={recipes} />

      <LatestRecipes recipes={recipes} />
    </main>
  );
}
