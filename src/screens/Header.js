// import {NavLink, Link} from 'react-router-dom'
//
// const Header = ({isAdmin, auth}) => {
//
//
//     return (
//         <header className="fixed top-0 w-full bg-gray-800 text-white p-3 z-50">
//             <div className="row">
//                 <div className="col-12 col-md-6 flex justify-content-start align-items-center">
//                     <div className='ms-3 '>
//                         <NavLink to='/' href="#" className='btn btn-outline-light'>Home</NavLink>
//                     </div>
//
//                     {
//                         auth && isAdmin && (
//                             <div className='ms-3 '>
//                                 <NavLink to='/admin' href="#" className='btn btn-outline-primary'>Admin</NavLink>
//                             </div>
//
//                         )
//                     }
//                     {
//                         auth && (
//                             <>
//                                 <div className='ms-3 '>
//                                     <NavLink to='/dashboard' className='btn btn-outline-primary'>Dashboard</NavLink>
//                                 </div>
//                                 <div className='ms-3 '>
//                                     <NavLink to='/logout' className='btn btn-outline-danger'>Logout</NavLink>
//                                 </div>
//                             </>
//
//                         )
//                     }
//
//                     {
//                         !auth && (
//                             <>
//                                 <div className='ms-3 '>
//                                     <NavLink to='/register' href="#" className='btn btn-outline-primary'>Register</NavLink>
//                                 </div>
//                                 <div className='ms-3 '>
//                                     <NavLink to='/login' href="#" className='btn btn-outline-primary'>Login</NavLink>
//                                 </div>
//                             </>
//                         )
//                     }
//                 </div>
//                 <div className="col-12 col-md-6 d-flex justify-content-end align-items-center">
//                     <NavLink to='/' className="navbar-brand" href="#">
//                         <img src={require('../assets/images/logo.png')}
//                              style={{width: '50px', height: '50px'}}
//                              alt="Logo"/>
//                     </NavLink>
//                 </div>
//             </div>
//         </header>
//     )
// }
//
// export default Header;

import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaSignInAlt, FaSignOutAlt, FaTachometerAlt, FaTools } from 'react-icons/fa';

const Header = ({ isAdmin, auth }) => {
    const iconSize = '1.2em';

    return (
        <header className="bg-gray-800 text-white p-3 mb-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <NavLink to='/' className='btn btn-outline-light me-3'>
                            <span className="d-none d-md-inline">Home</span>
                            <FaHome size={iconSize} className="d-md-none" />
                        </NavLink>

                        {auth && isAdmin && (
                            <NavLink to='/admin' className='btn btn-outline-primary me-3'>
                                <span className="d-none d-md-inline">Admin</span>
                                <FaTools size={iconSize} className="d-md-none" />
                            </NavLink>
                        )}

                        {auth && (
                            <>
                                <NavLink to='/dashboard' className='btn btn-outline-primary me-3'>
                                    <span className="d-none d-md-inline">Dashboard</span>
                                    <FaTachometerAlt size={iconSize} className="d-md-none" />
                                </NavLink>
                                <NavLink to='/logout' className='btn btn-outline-danger me-3'>
                                    <span className="d-none d-md-inline">Logout</span>
                                    <FaSignOutAlt size={iconSize} className="d-md-none" />
                                </NavLink>
                            </>
                        )}

                        {!auth && (
                            <>
                                <NavLink to='/register' className='btn btn-outline-primary me-3'>
                                    <span className="d-none d-md-inline">Register</span>
                                    <FaUser size={iconSize} className="d-md-none" />
                                </NavLink>
                                <NavLink to='/login' className='btn btn-outline-primary me-3'>
                                    <span className="d-none d-md-inline">Login</span>
                                    <FaSignInAlt size={iconSize} className="d-md-none" />
                                </NavLink>
                            </>
                        )}
                    </div>

                    <div className="d-flex align-items-center">
                        <NavLink to='/' className="navbar-brand" href="#">
                            <img src={require('../assets/images/logo.png')} style={{ width: '50px', height: '50px' }} alt="Logo" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

