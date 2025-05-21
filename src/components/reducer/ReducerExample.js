import { useState,useReducer } from "react";




const ReducerExample=()=>{

   

    const [users,setUsers]= useState([
        {name:"Sriram",age:24,id:1},
        {name:"Gopu",age:21,id:2},
        {name:"Ramu",age:30,id:3},
        {name:"Khyathi",age:24,id:4},
        {name:"Hanu",age:2,id:5}
    ])

    const [state, dispatch] = useReducer(reducer, users);



    function reducer(state, action) {
        switch (action.type) {
            case 'Edit':
                let editeddUser= state.find((item)=>item.id==action.payload.id);
                editeddUser={...editeddUser,name:"Uday",age:31};

                return state.map((item1)=>{
                    if(item1.id===editeddUser.id){
                        return editeddUser;
                    }
                    else{
                        return item1
                    } 
                })

          case 'Delete':
            return state.filter((item)=>item.id!=action.payload.id)
         
          default:
            throw new Error('Unknown action type');
        }
      }


//     const editHandler=(id)=>{
//     let editeddUser= users.find((item)=>item.id==id);
//     editeddUser={...editeddUser,name:"Uday",age:31};
//     setUsers(users.map((item1)=>{
//         if(item1.id===editeddUser.id){
//             return editeddUser;
//         }
//         else{
//             return item1
//         }
// }))      
//     }


    // const deleteHandler=(id)=>{


    //    setUsers( [...users.filter((item)=>item.id!=id)])
    //    // console.log(item)
    // }

    return(
        <>
        <h2>Reducer Example</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {state.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>
                        <button onClick={()=>dispatch({type:'Edit',payload:{id:item.id}})}>Edit</button>
                        <button onClick={()=>dispatch({type:'Delete',payload:{id:item.id}})}>Delete</button>
                    </td>
                </tr>
            )
            
        })}

            </tbody>
        </table>
      
        </>
    )
}

export default ReducerExample;