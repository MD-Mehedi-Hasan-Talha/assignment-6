import Image from "next/image";

export default function Blog({ recipeData }) {
  return (
    <>
      <Image
        width={1000}
        height={1000}
        src={`/assets/thumbs/${recipeData.thumbnail}`}
        alt="Cooking Image"
        className="w-full h-auto mb-8 rounded-lg"
      />
      <p className="text-gray-600 mb-8">{recipeData.description}</p>

      <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
      <p className="mb-8">
        Food qualities braise chicken cuts bowl through slices butternut snack.
        Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw
        soften fruit. sweet renders bone-in marrow richness kitchen, fricassee
        basted putter.
      </p>

      <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
      <p className="mb-8">
        Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
        sauce burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>

      <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
        "One cannot think well, love well, sleep well, if one has not dined
        well."
      </blockquote>
      <p className="text-center text-gray-600 mb-12">
        — Virginia Woolf, A Room of One&apos;s Own
      </p>

      <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
      <p className="mb-8">
        Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious
        romantic undisturbed raw platter will meld. Thick Skewers skillet
        natural, smoker soy sauce wait roux. slices rosette bone-in simmer.
        Romantic fall-off-the-bone butternut chuck under romas, Skewers on
        culinary experience.
      </p>

      <Image
        width={1000}
        height={100}
        src="/assets/thumbs/thumb-15.jpg"
        alt="Cooking in kitchen"
        className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
      />

      <p className="mb-8">
        Juicy meatballs brisket slammin&apos; baked shoulder. Juicy smoker soy
        sauce burgers brisket. polenta mustard hunk greens. Wine technique snack
        skewers chuck excess. Oil heat slowly. slices natural delicious, set
        aside magic tbsp skillet, bay leaves brown centerpiece. fruit soften
        edges frond slices onion snack pork steem on wines excess technique cup;
        Cover smoker soy sauce.
      </p>
    </>
  );
}
