import HandPicked from "./Components/RootPage/HandPicked";
import HeroArea from "./Components/RootPage/HeroArea";
import LatestRecipes from "./Components/RootPage/LatestRecipes";
import PopularCategories from "./Components/RootPage/PopularCategories";
import Subscribe from "./Components/RootPage/Subscribe";
import SuperDelicious from "./Components/RootPage/SuperDelicious";

export default function Home() {
  return (
    <main className="container mx-auto px-4 mt-[100px]">
      <HeroArea />

      <SuperDelicious />

      <PopularCategories />

      <Subscribe />

      <HandPicked />

      <LatestRecipes />
    </main>
  );
}
