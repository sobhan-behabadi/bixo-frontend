import './App.css';
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

import Header from "./screens/Header";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";
import useAuth from "./customHooks/useAuth";
import Admin from "./screens/Admin";
import PageNotFound from "./screens/PageNotFound";
import LogOut from "./component/dashboard/LogOut";
import AddBalanceForm from "./component/dashboard/add-balance/AddBalanceForm";
import BuySignal from "./component/dashboard/buy-signal/BuySignal";
import MySignal from "./component/dashboard/my-signal/MySignal";
import SeePost from "./component/dashboard/see post/SeePost";
import Users from "./component/admin/center/users/Users";
import EditBalanceUser from "./component/admin/center/users/EditBalanceUser";
import SetNewSignal from "./component/admin/center/signals/SetNewSignal";
import DeleteSignal from "./component/admin/center/signals/DeleteSignal";
import SetNewPost from "./component/admin/center/posts/SetNewPost";
import DeletePost from "./component/admin/center/posts/DeletePost";
import EditSignals from "./component/admin/center/signals/EditSignals";
import EditProfile from "./component/dashboard/edit-profile/EditProfile";
import DeleteUser from "./component/admin/center/users/DeleteUser";

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const {data} = useAuth();

    useEffect(() => {
        if (data) {
            setIsAuth(true);
            if (data?.data.data.isAdmin) {
                setIsAdmin(true)
            }
        } else {
            setIsAuth(false);
        }
    }, [data])


    return (
        <div className='font-all'>

            {
                isAuth ? <Header auth={isAuth} isAdmin={isAdmin}/> : <Header auth={isAuth} isAdmin={isAdmin}/>
            }

            <div className='container-fluid z-0'>
                <Routes>
                    <Route path='/' element={<Home/>}/>

                    {
                        isAuth ? (
                            <>
                                <Route path='/dashboard' element={<Dashboard/>}>
                                    <Route path='/dashboard/my-signal' element={<MySignal/>}/>
                                    <Route path='/dashboard/buy-signal' element={<BuySignal/>}/>
                                    <Route path='/dashboard/see-post' element={<SeePost/>}/>
                                    <Route path='/dashboard/add-balance' element={<AddBalanceForm/>}/>
                                    <Route path='/dashboard/edit-profile' element={<EditProfile/>}/>
                                </Route>
                                <Route path='/logout' element={<LogOut/>}/>
                            </>
                        ) : null
                    }
                    {
                        isAdmin && <Route path='/admin' element={<Admin/>}>
                            <Route path='/admin/users' element={<Users/>}/>
                            <Route path='/admin/delete-user' element={<DeleteUser/>}/>
                            <Route path='/admin/edit-balance' element={<EditBalanceUser/>}/>
                            <Route path='/admin/set-signal' element={<SetNewSignal/>}/>
                            <Route path='/admin/edit-signal' element={<EditSignals/>}/>
                            <Route path='/admin/delete-signal' element={<DeleteSignal/>}/>
                            <Route path='/admin/set-post' element={<SetNewPost/>}/>
                            <Route path='/admin/delete-post' element={<DeletePost/>}/>
                        </Route>
                    }
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>


                    <Route path='/*' element={<PageNotFound/>}/>
                </Routes>
            </div>

        </div>
    )
        ;
}

export default App;
