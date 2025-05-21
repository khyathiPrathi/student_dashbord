import {  useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../slice/userSlice";

import { useNavigate } from "react-router-dom";
const Signup=()=>{
    
    const [err,setErr]=useState(null)
const navigate=useNavigate()
    const dispatch=useDispatch()
    const user=useSelector((store)=>store.user)
    const fName=useRef(null);
    const lName=useRef(null);
    const age=useRef(null);
    const city=useRef(null);
    const email=useRef(null);
    const mobile=useRef(null)
    const password=useRef(null);
    const reEnterPassword=useRef(null);


    const submitUser=async(userDetails)=>{
        try{
            const resp= await fetch("http://localhost:3000/api/signUp",{
                headers: {
                    'Content-Type': 'application/json'
                  },
                  method:'POST',
                  body : JSON.stringify(userDetails),
                  },
             
                )
            const data=await resp.json();
            if(!resp.ok){
                throw new Error(data.message)
            }
            
                // if(data.results)
                dispatch(addUser(data.results))
            
        }
        catch(err){
            setErr(err.message)
        
        }
        




    }
    

    const handleRegister=()=>{
        const userDetails=
    {
        fName:fName.current.value,
        lName:lName.current.value,
        age:age.current.value,
        city:city.current.value,
        email:email.current.value,
        mobile:mobile.current.value,
        password:password.current.value,
        reEnterPassword:reEnterPassword.current.value
    }
    
      submitUser(userDetails)


    }
    return(
     <>
     <div className='main_container'>
     <div className="container">
           

     <div >
        <div > <h2 className="header">Register</h2></div>
          <div className="inputName_field">
              <label className="labelEle" >Name <span style={{color:"red"}}>*</span></label>
              <input name="fNmae" ref={fName} type="text"placeholder="first " required/>
              <input type="text" ref={lName} placeholder="last "/>
         </div>
        
         <div className="input_field">
             <label className="labelEle" >Age</label>
             <input type="num"ref={age} placeholder="age"/>
         </div>
         <div className="input_field">
             <label className="labelEle" >City</label>
              <input type="text" ref={city} placeholder="city"/>
         </div>
         <div className="input_field">
              <label className="labelEle" > Email <span style={{color:"red"}}>*</span></label>
              <input type="email" ref={email} placeholder="email"/>
         </div>
         <div className="input_field">
             <label className="labelEle" >Mobile</label>
             <input type="tel" ref={mobile} placeholder="mobile number"/>
        </div>
         <div className="input_field">
             <label className="labelEle" >Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={password} placeholder="password"/>
         </div>
         <div className="input_field">
             <label className="labelEle" >Confirm Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={reEnterPassword} placeholder=" confirm password"/>
         </div>
         <div className='submit_btn' ><button onClick={handleRegister} >Register Now</button></div>
         {err&&<p style={{color:'red'}}>{err}</p>}

     </div>

     </div>
     </div>
    {user&& navigate('/dashborad')}
    </>
    
       
    )

}
export default Signup;
