import TopDashboard from "../component/dashboard/TopDashboard";
import MenuDashboard from "../component/dashboard/MenuDashboard";
import {Outlet, useLocation} from "react-router-dom";
import {useEffect} from "react";
import useAuth from "../customHooks/useAuth";

const Dashboard = () => {

    return (
        <>
            <TopDashboard/>
            <MenuDashboard/>
            <Outlet/>
        </>
    )
}

export default Dashboard;