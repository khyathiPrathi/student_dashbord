import './App.css';
import { Route, Routes, BrowserRouter,Navigate} from 'react-router-dom'
import Dashbord from './components/dashbord/Dashbord';
import Header from './components/header/Header';
import Signup from './components/signup/Signup';
import Login from './components/Login/Login';
import Footer from './components/footer/footer';
// import { Provider } from 'react-redux';
// import appstore from './store/appStore'; 
import UpdateProfile from './components/updateprofile/UpdateProfile';
import SignOut from './components/signout/SignOut';
import ResetPassword from './components/resetPassword/ResetPassord';
import UpdatePassword from './components/updatepassword/UpdatePassword';
import { useSelector } from "react-redux"


function App() {
 
  const userData=useSelector((store)=>store.user)
  return (
    <div >

      
{/* <Provider store={appstore}> */}
<BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/login'  element={ <Login/>} ></Route>
      <Route path='/'  element={ <Login/>} ></Route>
      <Route path='/signup'  element={<Signup/>} ></Route>
      <Route path='/dashborad'  element= {userData?<Dashbord/>: <Navigate to="/Login" replace />} ></Route>
      <Route path='/updateprofile' element={userData? <UpdateProfile/>: <Navigate to="/Login" replace />}></Route>
      <Route path='/signout' element={<SignOut/>}></Route>
      <Route path='/resetpassword' element={!userData ? <ResetPassword/>: <Navigate to="/dashborad" replace />}></Route>
      <Route path='/updatepassword' element={userData? <UpdatePassword/>: <Navigate to="/Login" replace />}></Route>
      
      </Routes>

<Footer/>
</BrowserRouter>
{/* </Provider> */}

    
      {/* <RouterProvider router={appRouter}>
      <Header/>
      </RouterProvider> */}
      

    </div>
  );
}

export default App;
