import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faWallet, faNewspaper, faShoppingCart, faSignal} from '@fortawesome/free-solid-svg-icons';


const MenuDashboard = () => {


    return (
        <>
            <div className="col-12 mb-3 d-flex flex-wrap justify-content-around">
                <NavLink to='/dashboard/my-signal' className={'text-decoration-none'}>
                    <div
                        className='p-2.5 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faSignal} className={'d-md-none'} color={'white'} size={'lg'} width={20}
                                         height={20}/>
                        <span className="d-none d-md-block">My Signal</span>
                    </div>
                </NavLink>
                <NavLink to='/dashboard/buy-signal' className={'text-decoration-none'}>
                    <div
                        className='p-2.5 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faShoppingCart} className={'d-md-none'} color={'white'} size={'lg'}
                                         width={20} height={20}/>
                        <span className="d-none d-md-block">Buy Signal</span>
                    </div>
                </NavLink>
                <NavLink to='/dashboard/see-post' className={'text-decoration-none'}>
                    <div
                        className='p-2.5 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faNewspaper} className={'d-md-none'} color={'white'} size={'lg'}
                                         width={20} height={20}/>
                        <span className="d-none d-md-block">See Post</span>
                    </div>
                </NavLink>
                <NavLink to='/dashboard/add-balance' className={'text-decoration-none'}>
                    <div
                        className='p-2.5 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white text-decoration-none rounded-full shadow  hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faWallet} className={'d-md-none'} color={'white'} size={'lg'} width={20}
                                         height={20}/>
                        <span className="d-none d-md-block">Add Balance</span>
                    </div>
                </NavLink>
                <NavLink to='/dashboard/edit-profile' className={'text-decoration-none'}>
                    <div
                        className='p-2.5 border-b-2 border-b-gray-800 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-95  bg-gray-500 text-white rounded-full shadow  hover:bg-blue-400'>
                        <FontAwesomeIcon icon={faUser} className={'d-md-none'} color={'white'} size={'lg'} width={20}
                                         height={20}/>
                        <span className="d-none d-md-block">Edit Profile</span>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default MenuDashboard;