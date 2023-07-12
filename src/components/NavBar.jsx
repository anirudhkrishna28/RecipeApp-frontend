import { Link, useNavigate } from "react-router-dom" 
import { useCookies } from "react-cookie"
import './NavBar.css'
export const NavBar = () =>{
    const [cookies,setCookies] = useCookies(["access_token"])
    const navigate  = useNavigate()

    const logout = () =>{
        setCookies("access_token","")
        window.localStorage.removeItem("userId")
        navigate("/auth")
    }

    return (
        <>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/create-recipe">Create Recipe</Link>
            {!cookies.access_token ?(
            <Link to="/auth">Login/Register</Link>
            ):(
                <>
                 <Link to="/saved-recipes">Saved Recipes</Link>
                <button  onClick={logout}>Logout</button>
                </>
            )
            }
            
        </div>
        </>
    )

}


