import { useDispatch } from 'react-redux';
import './login.css'
import { addUser } from '../slice/userSlice';
import {  Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
const Login=()=>{
    const [err,setErr]=useState(null)
    const email=useRef(null)
    const password=useRef(null)
    const dispatch=useDispatch()

    const navigate=useNavigate()

    const getUser=async(userData)=>{
        try{
            const resp=await fetch("http://localhost:3000/api/signIn",{
                headers:{
                    "Content-Type":"application/json"
                },
                method:'POST',
                body:JSON.stringify(userData)
    
            })
            const data= await resp.json()
            if (!resp.ok) {
                throw new Error(data.message );
              }
                  dispatch(addUser(data.results))
                  navigate('/dashborad')
            }
     catch(err){
            setErr(err.message)
                

            }


            



    }
    const handleLogin=()=>{
     const   userData={
            email:email.current.value,
            password:password.current.value
        }
        // console.log(userData)
        getUser(userData)
       


    }
    return(
     <>
        
      <div className="main_container">
        <div className="container">
                
         <div>
           <div> <h2 className='header' >Login</h2></div>
           <div className="input_field">
             <label className="labelEle" > Email <span style={{color:"red"}}>*</span></label>
              <input type="email" ref={email} placeholder="email"/>
           </div>

          <div className="input_field">
             <label className="labelEle" >Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={password} placeholder="password"/>
          </div>
          <div className=' rePasswordField'>
               Forgot password <Link to={"/resetpassword"}>Reset Password</Link>
          </div>

            <div  className='submit_btn'><button onClick={handleLogin} >Login</button></div>
            {err&&<p style={{color:"red"}}>{err}</p>}

         </div>
        </div>
      </div>
       
        </>
    )
}
export default Login;