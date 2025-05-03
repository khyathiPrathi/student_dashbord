import { useRef } from "react"
import { useSelector } from "react-redux"

const UpdatePassword=()=>{
    const user=useSelector((store)=>store.user)

    // const [err,setErr]=useState()
    
    const currentPassword=useRef(null)
    const newPassword=useRef(null)
    const newConfirmPassword=useRef(null)

    const handleupdate=()=>{
        const newPasswordData={
           userId:user.userId,
           currentPassword:currentPassword.current.value,
           newPassword:newPassword.current.value,
           newConfirmPassword:newConfirmPassword.current.value
        }
        updatePassword(newPasswordData)
    }
        const updatePassword=async(newPasswordData)=>{
        const resp=await fetch("http://localhost:3000/api/updatePassword",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newPasswordData)

        })
        const data=await resp.json()
        


    }
    return(
        <>
         <div className="main_container">
        <div className="container">
                
         <div>
           <div> <h2 className='header' >Update Password</h2></div>

          <div className="input_field">
             <label className="labelEle" >Current Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={currentPassword} placeholder="password"/>
          </div>
          <div className="input_field">
             <label className="labelEle" >New  Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={newPassword} placeholder="password"/>
          </div>
          <div className="input_field">
             <label className="labelEle" > Confirm New  Password <span style={{color:"red"}}>*</span></label>
             <input type="password" ref={newConfirmPassword} placeholder="password"/>
          </div>
         

            <div  className='submit_btn'><button onClick={handleupdate} >Update</button></div>
            {/* {err&&<p style={{color:"red"}}>{err}</p>} */}

         </div>
        </div>
      </div>


        </>
    )

}
export default UpdatePassword