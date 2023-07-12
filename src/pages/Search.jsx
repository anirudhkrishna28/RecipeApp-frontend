// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import { useCookies } from "react-cookie";
// import './Home.css';

// export const Search = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const [cookies, _] = useCookies(["access_token"]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRecipes();

//     const fetchSavedRecipes = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
//         );
//         setSavedRecipes(response.data.savedRecipes);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     if (cookies.access_token) fetchSavedRecipes();
//   }, []);

//   const saveRecipe = async (recipeID) => {
//     try {
//       const response = await axios.put(
//         "http://localhost:3001/recipes",
//         {
//           recipeID,
//           userID,
//         },
//         {
//           headers: { authorization: cookies.access_token },
//         }
//       );
//       setSavedRecipes(response.data.savedRecipes);
//       console.log(response.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const toggleIngredients = (recipeID) => {
//     setRecipes((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe._id === recipeID
//           ? { ...recipe, showIngredients: !recipe.showIngredients }
//           : recipe
//       )
//     );
//   };

//   const handleSearch = () => {
//     const filteredRecipes = recipes.filter((recipe) =>
//       recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setSearchResults(filteredRecipes);
//   };

//   const isRecipeSaved = (id) => {
//     return savedRecipes.includes(id);
//   };

//   return (
//     <div className="home">
//       <div className="search-bar">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search recipes..."
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       <div className="recipe-list">
//         {(searchQuery ? searchResults : recipes).map((recipe) => (
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


import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import './Home.css';

export const Search = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("https://recipe-blog-4j9i.onrender.com/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipes();

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://recipe-blog-4j9i.onrender.com/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    if (cookies.access_token) fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put(
        "https://recipe-blog-4j9i.onrender.com/recipes",
        {
          recipeID,
          userID,
        },
        {
          headers: { authorization: cookies.access_token },
        }
      );
      setSavedRecipes(response.data.savedRecipes);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleIngredients = (recipeID) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === recipeID
          ? { ...recipe, showIngredients: !recipe.showIngredients }
          : recipe
      )
    );
  };

  const handleSearch = () => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredRecipes);
  };

  const isRecipeSaved = (id) => {
    return savedRecipes.includes(id);
  };

  return (
    <>
        <h2 className="h2">Search Recipe</h2>
    <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipies..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    <div className="home">
    
      <div className="recipe-list">
        {searchResults.length > 0 ? (
          searchResults.map((recipe) => (
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
              <button
                className="save-button"
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                Save
              </button>
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
          ))
        ) : (
          recipes.map((recipe) => (
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
              <button
                className="save-button"
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                Save
              </button>
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
          ))
        )}
      </div>
    </div>
    </>
  );
};




