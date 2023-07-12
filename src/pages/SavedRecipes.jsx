// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import './Home.css'

// export const SavedRecipes= () => {
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchSavedRecipe = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/recipes/savedRecipes/${userID}`
//         );
//         setSavedRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchSavedRecipe();
//   }, []);

//   const toggleIngredients = (recipeID) => {
//     setRecipes((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe._id === recipeID
//           ? { ...recipe, showIngredients: !recipe.showIngredients }
//           : recipe
//       )
//     );
//   };

//   const isRecipeSaved = (id) => {
//     return savedRecipes.includes(id);
//   };


//   return (
//     <div className="home">
//       <h2>Recipes</h2>
//       <div className="recipe-list">
//         {savedRecipes.map((recipe) => (
//           <div className="recipe-card" key={recipe._id}>
//             <h2>{recipe.name}</h2>
//             {recipe.showIngredients ? (
//               <div className="ingredients">
//                 <h4>Ingredients:</h4>
//                 <ul>
//                   {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>
//                       <span role="img" aria-label="Cutlery">🍴</span> {ingredient}
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className="show-ingredients-button"
//                   onClick={() => toggleIngredients(recipe._id)}
//                 >
//                   Shrink Ingredients
//                 </button>
//               </div>
//             ) : (
//               <button
//                 className="show-ingredients-button"
//                 onClick={() => toggleIngredients(recipe._id)}
//               >
//                 Show Ingredients
//               </button>
//             )}
//             <button
//               className="save-button"
//               onClick={() => saveRecipe(recipe._id)}
//               disabled={isRecipeSaved(recipe._id)}
//             >
//               Save
//             </button>
//             <div className="instructions">
//               <p>
//                 {recipe.instructions.split(".").map((instruction, index) => (
//                   <span key={index}>
//                     👉🏾 {instruction.trim()}.
//                     {index !== recipe.instructions.split(".").length - 1 && <br />}
//                   </span>
//                 ))}
//               </p>
//             </div>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// // export const Home = () =>{
// //     return <div>Home</div>
// // }

import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import './Home.css'

export const SavedRecipes = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedRecipe = async () => {
      try {
        const response = await axios.get(
          `https://recipe-blog-4j9i.onrender.com/recipes/savedRecipes/${userID}`
        );
        setSavedRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSavedRecipe();
  }, []);

  const toggleIngredients = (recipeID) => {
    setSavedRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === recipeID
          ? { ...recipe, showIngredients: !recipe.showIngredients }
          : recipe
      )
    );
  };


  return (
    <div className="home">
      <h2>Saved Recipes</h2>
      <div className="recipe-list">
        {savedRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe._id}>
            <h2>{recipe.name}</h2>
            {recipe.showIngredients ? (
              <div className="ingredients">
                <h4>Ingredients:</h4>
                <ul>
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <span role="img" aria-label="Cutlery">🍴</span> {ingredient}
                    </li>
                  ))}
                </ul>
                <button
                  className="show-ingredients-button"
                  onClick={() => toggleIngredients(recipe._id)}
                >
                  Shrink Ingredients
                </button>
              </div>
            ) : (
              <button
                className="show-ingredients-button"
                onClick={() => toggleIngredients(recipe._id)}
              >
                Show Ingredients
              </button>
            )}

            <div className="instructions">
              <p>
                {recipe.instructions.split(".").map((instruction, index) => (
                  <span key={index}>
                    👉🏾 {instruction.trim()}.
                    {index !== recipe.instructions.split(".").length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
          </div>
        ))}
      </div>
    </div>
  );
};

