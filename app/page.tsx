
import { recipes } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="hero-label">GOOD FOOD, GOOD MOOD</p>

        <h1>
          Discover your next
          <br />
          <span>favourite bite.</span>
        </h1>

        <p className="hero-description">
          Explore delicious recipes from around the world.
          Find inspiration for your next meal.
        </p>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <h2>Explore Recipes</h2>
          <p>{recipes.length} delicious recipes</p>
        </div>

        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
