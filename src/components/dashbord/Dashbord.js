const Dashbord=()=>{
    const getStudentsList=async()=>{
        const resp=await fetch("http://localhost:3000/api/users",{
            headers:{
                'app-user':'234569'
            }
        })
        const data= await resp.json();
        console.log(data)

    }
    return(
        <div>
            Students List
            <button onClick={getStudentsList}>OPEN</button>
        </div>
    )
    

}
export default Dashbord