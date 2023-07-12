// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import {useCookies} from 'react-cookie'

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const [cookies,_] = useCookies(["access_token"])
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRecipe();

//     const fetchSavedRecipe = async () => {
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
//     if(cookies.access_token)
//     fetchSavedRecipe();
//   }, []);

//   console.log(recipes);

//   const saveRecipe = async (recipeID) => {
//     try {
//       const response = await axios.put("http://localhost:3001/recipes", {
//         recipeID,
//         userID,
//       },{
//             headers:{authorization:cookies.access_token}
//       });
//     setSavedRecipes(response.data.savedRecipes)
//       console.log(response.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const isRecipeSaved = (id) =>{ return savedRecipes.includes(id)

//   }

//   return (
//     <div>
//       <h2> Recipes </h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             {/* {savedRecipes.includes(recipe._id) && <h4>Already saved</h4>} */}
//             <div>
//               <h2>{recipe.name}</h2>
//               <button onClick={() => saveRecipe(recipe._id)} disabled={isRecipeSaved(recipe._id)}>save</button>
//             </div>
//             <div className="instructions">
//               <p> {recipe.instructions}</p>
//             </div>
//             <img src={recipe.imageurl} alt={recipe.name} />
//             <p>Cooking Time:{recipe.cookingTime}(minutes)</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// // export const Home = () =>{
// //     return <div>Home</div>
// // }


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import { useCookies } from "react-cookie";

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const [cookies, _] = useCookies(["access_token"]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRecipe();

//     const fetchSavedRecipe = async () => {
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
//     if (cookies.access_token) fetchSavedRecipe();
//   }, []);

//   console.log(recipes);

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

//   const isRecipeSaved = (id) => savedRecipes.includes(id);

//   const toggleIngredients = (recipeID) => {
//     setRecipes((prevRecipes) =>
//       prevRecipes.map((recipe) =>
//         recipe._id === recipeID
//           ? { ...recipe, showIngredients: !recipe.showIngredients }
//           : recipe
//       )
//     );
//   };

//   return (
//     <div>
//       <h2>Recipes</h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//               <button
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 Save
//               </button>
//               {recipe.showIngredients ? (
//                 <ul>
//                   {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 <button onClick={() => toggleIngredients(recipe._id)}>
//                   Show Ingredients
//                 </button>
//               )}
//             </div>
//             <div className="instructions">
//               <p>{recipe.instructions}</p>
//             </div>
//             <img src={recipe.imageurl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import { useCookies } from 'react-cookie';

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const [cookies, _] = useCookies(["access_token"]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRecipe();

//     const fetchSavedRecipe = async () => {
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
//     if (cookies.access_token)
//       fetchSavedRecipe();
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

//   const isRecipeSaved = (id) => {
//     return savedRecipes.includes(id);
//   };

//   return (
//     <div>
//       <h2>Recipes</h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//               {recipe.showIngredients ? (
//                 <div className="ingredients">
//                   <h4>Ingredients:</h4>
//                   <ul>
//                     {recipe.ingredients.map((ingredient, index) => (
//                       <li key={index}>{ingredient}</li>
//                     ))}
//                   </ul>
//                   <button onClick={() => toggleIngredients(recipe._id)}>
//                     Shrink Ingredients
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => toggleIngredients(recipe._id)}>
//                   Show Ingredients
//                 </button>
//               )}
//               <button
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 Save
//               </button>
//             </div>
//             <div className="instructions">
//               <p>{recipe.instructions}</p>
//             </div>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useGetUserID } from "../hooks/useGetUserID";
// import { useCookies } from "react-cookie";
// import './Home.css';

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [savedRecipes, setSavedRecipes] = useState([]);
//   const [cookies, _] = useCookies(["access_token"]);
//   const userID = useGetUserID();

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchRecipe();

//     const fetchSavedRecipe = async () => {
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
//     if (cookies.access_token) fetchSavedRecipe();
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

//   const isRecipeSaved = (id) => {
//     return savedRecipes.includes(id);
//   };

//   return (
//     <div>
//       <h2>Recipes</h2>
//       <ul>
//         {recipes.map((recipe) => (
//           <li key={recipe._id}>
//             <div>
//               <h2>{recipe.name}</h2>
//               {recipe.showIngredients ? (
//                 <div className="ingredients">
//                   <h4>Ingredients:</h4>
//                   <ul>
//                     {recipe.ingredients.map((ingredient, index) => (
//                       <li key={index}>
//                         🍴{ingredient}🍴
//                         </li>
//                     ))}
//                   </ul>
//                   <button onClick={() => toggleIngredients(recipe._id)}>
//                     Shrink Ingredients
//                   </button>
//                 </div>
//               ) : (
//                 <button onClick={() => toggleIngredients(recipe._id)}>
//                   Show Ingredients
//                 </button>
//               )}
//               <button
//                 onClick={() => saveRecipe(recipe._id)}
//                 disabled={isRecipeSaved(recipe._id)}
//               >
//                 Save
//               </button>
//             </div>
//             <div className="instructions">
//               <p>
//                 {recipe.instructions.split(".").map((instruction, index) => (
//                   <p key={index}>
//                     👉🏾{instruction}.👈🏾
//                   </p>
//                 ))}
//               </p>
//             </div>
//             <img src={recipe.imageUrl} alt={recipe.name} />
//             <p>Cooking Time: {recipe.cookingTime} (minutes)</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };



import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
// import './Home.css'

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [cookies, _] = useCookies(["access_token"]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get("https://recipe-blog-4j9i.onrender.com/recipes");
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRecipe();

    const fetchSavedRecipe = async () => {
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
    if (cookies.access_token) fetchSavedRecipe();
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

  const isRecipeSaved = (id) => {
    return savedRecipes.includes(id);
  };

  return (
    <div className="home">
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
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
        ))}
      </div>
    </div>
  );
};
