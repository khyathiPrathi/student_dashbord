import { useRef, useState } from "react";



const ResetPassword=()=>{
    const [err,setErr]=useState()
    const email=useRef(null)
    const newpassword=useRef(null)
    const newCnfpassword=useRef(null)

    const savePassword=()=>{
        debugger;
        const newUserPassword={
            newPassword:newpassword.current.value,
            newConfirmPassword:newCnfpassword.current.value,
            email:email.current.value
        }
        resetUserPassword(newUserPassword);


    }
    const resetUserPassword=async(newUserPassword)=>{
        try{
            const resp= await fetch("http://localhost:3000/api/resetPassword",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                    body:JSON.stringify(newUserPassword)
                

            })
            const data=await resp.json()
            if(!resp.ok){
                throw new Error(data.message)
            }
        }catch(err){
           setErr(err.message)

        }

    }
    return(
        <>
        <div className="main_container">
        <div className="container">
                
         <div>
           <div> <h2 className='header' >Reset Password</h2></div>
           <div className="input_field">
             <label className="labelEle" > Email <span style={{color:"red"}}>*</span></label>
              <input type="email" ref={email} placeholder="email"/>
           </div>

          <div className="input_field">
             <label className="labelEle" >New Password<span style={{color:"red"}}>*</span></label>
             <input type="password" ref={newpassword} placeholder="password"/>
          </div>
          <div className="input_field">
             <label className="labelEle" >New Confirm Password<span style={{color:"red"}}>*</span></label>
             <input type="password" ref={newCnfpassword} placeholder="password"/>
          </div>
          

            <div  className='submit_btn'><button onClick={savePassword} >Save</button></div>
            {err&&<p style={{color:"red"}}>{err}</p>}

         </div>
        </div>
      </div>


        </>
    )
}
export default ResetPassword;