import RecipeItem from "./RecipeItem";

export default function RecipeList() {
  const recipes = [
    {
      imageUrl: "/assets/thumbs/thumb-8.jpg",
      title: "Decadent Raspberry and Cream Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-7.jpg",
      title: "Tripple Chocolate Mousse Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-6.jpg",
      title: "Cranberry Curd Layered Sponge Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-5.jpg",
      title: "Orange and Lemon Curd Tartlets",
    },
    {
      imageUrl: "/assets/thumbs/thumb-4.jpg",
      title: "Creamt Chocolate Nutella Fudge Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-3.jpg",
      title: "Homemade Mixed Berries Wedding Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-2.jpg",
      title: "Black Forest Birthday Cake",
    },
    {
      imageUrl: "/assets/thumbs/thumb-1.jpg",
      title: "Double Thick Layered Sponge Cake",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {recipes.map((recipe, index) => (
        <RecipeItem
          key={index}
          imageUrl={recipe.imageUrl}
          title={recipe.title}
        />
      ))}
    </div>
  );
}
