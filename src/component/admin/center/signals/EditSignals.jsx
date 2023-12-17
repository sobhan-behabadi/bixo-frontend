import {useEffect, useState} from "react";
import useGetSignalAdmin from "../../../../customHooks/admin/useGetSignalAdmin";
import ButtonForm from "../../../form/ButtonForm";
import Loading from "../../../loading-erorr-and/Loading";
import Error from "../../../loading-erorr-and/Error";
import useEditSignal from "../../../../customHooks/admin/useEditSignal";
import {useNavigate} from "react-router-dom";


const EditSignals = () => {

    const [signals, setSignals] = useState([]);
    const send = useEditSignal()
    const {data, isPending, isError} = useGetSignalAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            let newSignals = data?.data.data.map(item => {
                return Object.assign({}, item, {
                    target: item.target.join(','),
                    stop: item.stop.join(','),
                    price: item.price.toString()
                });
            });
            setSignals(newSignals);
        }
    }, [data]);

    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({
        _id: '',
        symbol: '',
        action: '',
        price: 10,
        time: '',
        target: '',
        stop: '',
        deActive: ''
    });

    const handleUserSelect = (userId) => {
        if (userId === null || userId === undefined || !userId || userId === "Select an option") {
            return null;
        } else {
            const selectedUser = signals.find(i => i._id === userId);
            setSelectedUserId(userId);
            setEditedUserData({
                _id: selectedUser._id,
                symbol: selectedUser.symbol,
                action: selectedUser.action,
                price: selectedUser.price,
                time: selectedUser.time,
                target: selectedUser.target,
                stop: selectedUser.stop,
                deActive: selectedUser.deActive,

            });
        }

    };


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setEditedUserData(prevData => ({...prevData, [name]: value}));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(editedUserData)
        send.mutate(editedUserData)

        setSelectedUserId(null);
        setEditedUserData({
            symbol: '',
            action: '',
            price: 10,
            time: '',
            target: '',
            stop: '',
            deActive: '',
        });
    };


    return (
        <>
            <div className='col-12'>
                <div className="m-3">

                    {
                        send.isSuccess ? (
                            <div>
                                <h6 className='alert alert-success'>Success</h6>
                                <div className='text-center bg-green-400 rounded py-2 cursor-pointer' onClick={() => {
                                    navigate('/admin/set-signal')
                                }}>Set New Signal
                                </div>
                            </div>
                        ) : send.isError ? <h6 className='alert alert-danger'>Error</h6> :
                            isPending ? <Loading/> :
                                isError ? <Error/> :
                                    data ? (
                                        <>
                                            <div className="mb-3">
                                                <select className="form-select" aria-label="Default select example"
                                                        value={selectedUserId}
                                                        onChange={(e) => handleUserSelect(e.target.value)}>
                                                    <option selected value={null}>Select an option</option>
                                                    {signals.map((i, index) => (
                                                        <option key={index} value={i._id}>{i.symbol}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            {selectedUserId && (
                                                <form onSubmit={handleFormSubmit}>

                                                    <div className="mb-3">
                                                        <label>Symbol</label>
                                                        <input
                                                            className='form-control'
                                                            type="text"
                                                            name="symbol"
                                                            value={editedUserData.symbol}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label>Action</label>
                                                        <input
                                                            className='form-control mb-3'
                                                            type="text"
                                                            name="action"
                                                            value={editedUserData.action}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label>Time</label>
                                                        <input
                                                            className='form-control mb-3'
                                                            type="date"
                                                            name="time"
                                                            value={editedUserData.time}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label>Price</label>
                                                        <input
                                                            className='form-control mb-3'
                                                            type="number"
                                                            name="price"
                                                            value={editedUserData.price}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label>Target</label>
                                                        <input
                                                            className='form-control mb-3'
                                                            type="text"
                                                            name="target"
                                                            value={editedUserData.target}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    <div className="mb-3">
                                                        <label>Stop</label>
                                                        <input
                                                            className='form-control mb-3'
                                                            type="text"
                                                            name="stop"
                                                            value={editedUserData.stop}
                                                            onChange={handleInputChange}
                                                        />
                                                    </div>

                                                    {/*<div className="mb-3">*/}
                                                    {/*    <label>DeActive</label>*/}
                                                    {/*    <input*/}
                                                    {/*        className='form-control mb-3'*/}
                                                    {/*        type="text"*/}
                                                    {/*        name="deActive"*/}
                                                    {/*        value={editedUserData.deActive}*/}
                                                    {/*        onChange={handleInputChange}*/}
                                                    {/*    />*/}
                                                    {/*</div>*/}

                                                    <div className="mb-3">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                // defaultValue={'false'}
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="deActive"
                                                                value='false'
                                                                onChange={handleInputChange}
                                                            />
                                                            <label className="form-check-label">
                                                                Active
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                // defaultValue={'true'}
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="deActive"
                                                                value='true'
                                                                onChange={handleInputChange}
                                                            />
                                                            <label className="form-check-label">
                                                                De active
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <ButtonForm btn_name='Edit'/>

                                                </form>
                                            )}
                                        </>
                                    ) : null
                    }
                </div>

            </div>
        </>
    )

}


export default EditSignals;
