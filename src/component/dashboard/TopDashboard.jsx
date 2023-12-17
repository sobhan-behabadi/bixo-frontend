import useAuth from "../../customHooks/useAuth";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";


const TopDashboard = () => {

    //my state
    const [isBouncing, setBouncing] = useState(false);
    //my query
    const queryClient = useQueryClient();

    // const selector = useSelector(state => state.user)

    const {data} = useAuth()

    const handleUpdate = async (queryClient) => {
        setBouncing(!isBouncing);
        setTimeout(() => {
            setBouncing(false);
        }, 1500);
        await queryClient.invalidateQueries('auth');

    }


    return (
        <>
            <div className={'d-flex justify-between border-b-4 border-b-gray-800 p-2 mb-3'}>
                <div>
                    <h6>
                        Hello, {data?.data.data.name}
                    </h6>
                </div>
                <div className={'flex items-center'}>
                    <button className={`flex items-center justify-center ${isBouncing ? 'animate-spin' : ''}`}
                            onClick={() => handleUpdate(queryClient)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fillRule="evenodd"
                                  d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                    <h6 className={'ms-2 text-gray-800 my-auto'}>Balance : {data?.data.data.balance}</h6>
                </div>

            </div>
        </>
    )
}


export default TopDashboard;