import useAddBalance from "../../../customHooks/useAddBalance";
import useAuth from "../../../customHooks/useAuth";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";

const AddBalanceForm = () => {


    //my state
    const [isNewMessage, setIsNewMessage] = useState('');
    const [addBalanceInput, setAddBalanceInput] = useState(0);
    //my query
    const addBalance = useAddBalance(addBalanceInput)
    const queryClient = useQueryClient();

    const handleSubmit = async (e) => {
        e.preventDefault()
        addBalance.mutate();
        setIsNewMessage('Success, You have new Changes, Please press reload Balance !')
        setTimeout(async () => {
            setIsNewMessage('')
            await queryClient.invalidateQueries('auth');
        }, 2000)


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    min={0}
                    step={1}
                    placeholder='Example: 90000'
                    className={'appearance-none m-1 p-1 border border-gray-300 rounded-md w-60 focus:outline-none focus:ring focus:border-indigo-500"'}
                    type="text" onChange={(e) => setAddBalanceInput(e.target.value)}/>
                <button
                    type='submit'
                    className={'ms-2 bg-green-700 text-white p-1 p1 rounded hover:bg-green-800 focus:outline-none focus:ring focus:border-indigo-500'}>add
                    balance
                </button>
            </form>
            {isNewMessage !== '' ? <div className={'animate-pulse'}><h6>{isNewMessage}</h6></div> : null}
            {/*<LogOut/>*/}
        </>
    )
}

export default AddBalanceForm;