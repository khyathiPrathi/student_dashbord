import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updatedUser } from "../slice/userSlice"
import { useNavigate } from "react-router-dom"


const UpdateProfile=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const fName=useRef(null)
    const lName=useRef(null)
    const mobile=useRef(null)
    const user=useSelector((store)=>store.user)
    
    const handleupdate=()=>{
        const updatedData={
            fName:fName.current.value,
            lName:lName.current.value,
            mobile:mobile.current.value,
            userId:user.userId
        }
        updateUser(updatedData);
    }
const updateUser=async(updatedData)=>{
const resp=await fetch("http://localhost:3000/api/updateProfile",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(updatedData)
})
const data= await resp.json()
dispatch(updatedUser(data.results))
alert('update sucessfully')
navigate("/dashborad")






}

    return(
       
        <>
       <div className="main_container">
       <div className="container">
                
            <div>
              <div> <h2 className='header' >Update Your Details</h2></div>
              <div className="inputName_field">
                 <label className="labelEle" >Name <span style={{color:"red"}}>*</span></label>
                 <input name="fNmae" ref={fName} type="text"placeholder="first " required/>
                 <input type="text" ref={lName} placeholder="last "/>
             </div>

              <div className="input_field">
                 <label className="labelEle" >Mobile</label>
                 <input type="tel" ref={mobile} placeholder="mobile number"/>
              </div>
               <div className='submit_btn' ><button onClick={handleupdate} >Update </button></div>
         
          
            
            </div>
        </div>
        </div>
        </>
    )
}
export default UpdateProfile