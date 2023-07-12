// import { useState } from "react"
// import axios from "axios"
// import { useGetUserID } from "../hooks/useGetUserID"
// import {useNavigate} from 'react-router-dom'
// import {useCookies} from 'react-cookie'

// import './createRecipe.css'


// export const CreateRecipe = () =>{

//     const userID = useGetUserID()
//     console.log(userID);
//     const [cookies,_] = useCookies(["access_token"])

//     const [recipe,setRecipe] = useState({
//         name:"",
//         ingredients:[],
//         instructions:"",
//         cookingTime: 0,
//         userOwner:userID,
//     })

//   const navigate = useNavigate()

//     const handleChange = (event) =>{
//         const  {name,value} = event.target
//         setRecipe({...recipe,[name]:value}) 
//     }
    

//     const addIngredient = () =>{
//         setRecipe({...recipe,ingredients:[...recipe.ingredients,""]})
//     }

    
//     const handleIngredientChange = (event,idx) =>{
//         const  {value} = event.target;
//         const ingredients = recipe.ingredients;
//         ingredients[idx] = value;
//         setRecipe({...recipe,ingredients})



//     }

//     console.log(recipe)

//     const onSubmit = async(event) =>{
//         event.preventDefault();
//         try{
//             await axios.post("http://localhost:3001/recipes",recipe,{
//                 headers:{authorization:cookies.access_token}
//           })
//             alert("Recipe created");
//             navigate('/')

//         }catch(err){
//                 console.error(err);
//         }
//     }


//     return <div className="create-recipe">
//         <h2>Create Recipe</h2>
//         <form onSubmit={onSubmit}>
//             <label htmlFor="Name" >Name</label>
//             <input type = "text" id="name" name="name" onChange={handleChange}/>
//             <label htmlFor="ingredients">Ingredients</label>
//             {recipe.ingredients.map((ingredient, index) => (
//           <input
//             key={index}
//             type="text"
//             name="ingredients"
//             value={ingredient}
//             onChange={(event) => handleIngredientChange(event, index)}
//           />
//         ))}
            

//             <button onClick={addIngredient} type="button">Add Ingredient</button>
//             <label htmlFor="instructions">Instructions</label>
//             <textarea id="instructions" name= "instructions" onChange={handleChange}></textarea>
//             <label htmlFor="imageUrl" >ImageUrl</label>
//             <input type = "text" id="imageUrl" name="imageUrl" onChange={handleChange}/>
//             <label htmlFor="cookingTime" >Cooking Time(minutes)</label>
//             <input type = "number" id="cookingTime" name="cookingTime" onChange={handleChange}/>

//             <button  type="submit">Submit</button>
//         </form>
        

//     </div>
// }

import './createRecipe.css'
import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const CreateRecipe = () => {
  const userID = useGetUserID();
  console.log(userID);
  const [cookies, _] = useCookies(["access_token"]);

  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    cookingTime: 0,
    userOwner: userID,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  console.log(recipe);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("https://recipe-blog-4j9i.onrender.com/recipes", recipe, {
        headers: { authorization: cookies.access_token },
      });
      alert("Recipe created");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ingredient, index) => (
          <input
            key={index}
            type="text"
            name="ingredients"
            value={ingredient}
            onChange={(event) => handleIngredientChange(event, index)}
            className="input-field"
          />
        ))}

        <button onClick={addIngredient} type="button" className="add-button">
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          onChange={handleChange}
          className="text-area"
        ></textarea>
        <label htmlFor="imageUrl">ImageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
          className="input-field"
        />
        <label htmlFor="cookingTime">Cooking Time(minutes)</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
          className="input-field"
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};
