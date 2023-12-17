import {Link} from "react-router-dom";


const Menu = () => {


    return(
        <div className="col-12 mb-3">
            <div className="d-flex justify-content-center">
                <div className="mx-2 dropdown">
                    <button className={'dropdown-toggle m-1 p-2 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Users
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to='/admin/users' className="dropdown-item" href="#">All Users</Link></li>
                        {/*<li><Link to='/admin/delete-user' className="dropdown-item" href="#">Delete User</Link></li>*/}
                        {/*<li><Link to='/admin/edit-balance' className="dropdown-item" href="#">Edit Balance Users</Link></li>*/}
                    </ul>
                </div>
                <div className="mx-2 dropdown">
                    <button className={'dropdown-toggle m-1 p-2 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Signals
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to='/admin/set-signal' className="dropdown-item" href="#">Set new Signal</Link></li>
                        <li><Link to='/admin/edit-signal' className="dropdown-item" href="#">Edit Signal</Link></li>
                        {/*<li><Link to='/admin/delete-signal' class="dropdown-item" href="#">Delete Signal</Link></li>*/}
                    </ul>
                </div>
                <div className="mx-2 dropdown">
                    <button className={'dropdown-toggle m-1 p-2 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Posts
                    </button>
                    <ul className="dropdown-menu">
                        <li><Link to='/admin/set-post' className="dropdown-item" href="#">Set New Post</Link></li>
                        <li><Link to='/admin/delete-post' className="dropdown-item" href="#">Delete Post</Link></li>
                    </ul>
                </div>
                <div className="mx-2">
                    <button className={'m-1 p-2 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'} type="button">
                        Setting
                    </button>

                </div>
            </div>
        </div>


    )
}

export default Menu;