import { Link, useNavigate } from "react-router-dom"
import "./header.css"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../slice/userSlice"


const Header=()=>{
    const userData=useSelector((store)=>store.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    console.log(userData)
    const handleSignout=()=>{
        dispatch(removeUser())
        navigate("/login")
    }

    //Logic to get the intial state from create Context or Redux create slice
    return(
        <div className="header_bar">
            
                <h2>Header</h2>
            

            
            <ul className="nav">
               {!userData&&
                
               
                <>
                <li>
                 <Link className="nav_links" to={'/login'}>Login</Link>
                    
                </li>
                <li>
                <Link className="nav_links" to={'/signup'}>Register</Link>
                 
                </li>
                </>
                
               }
            {userData&&
                 <>
                  <li className="displayUserName">
                    welcome {userData.displayName}
                    
                </li>
                <li>
                <Link className="nav_links" to={'/updateprofile'}>Update Profile</Link>
                </li>
                   
                <li>
                <Link className="nav_links" to={'/updatepassword'}>Update Password</Link>
                </li>
                 <li>
                 <button onClick={handleSignout}>SignOut</button>
                    
                </li>
                </>
                }
            </ul>

        </div>
    )
}
export default Header