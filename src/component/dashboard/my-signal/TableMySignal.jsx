import useGetSignal from "../../../customHooks/useGetSignal";
import Error from "../../loading-erorr-and/Error";
import Loading from "../../loading-erorr-and/Loading";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const TableMySignal = () => {

    const {data, isPending, isError} = useGetSignal();
    const [mySignal, setMySignal] = useState([]);


    useEffect(() => {
        if (data) {

            let mySignal = data?.data.data.map(item => {
                if (item.deActive) {
                    return {
                        id: item.id,
                        deActive: item.deActive,
                        price: item.price,
                        symbol: item.symbol,
                        target: ['deActive'],
                        stop: ['deActive'],
                        time: 'deActive',
                        action: 'deActive'
                    };
                } else {
                    return item;
                }
            });
            setMySignal(mySignal)
        }
    }, [data]);

    return (
        <div className="container">
            {isError ? (
                <Error/>
            ) : isPending ? (
                    <Loading/>
                ) :
                data?.data.data.length === 0 ?
                    <div>
                        <h5 className={'alert alert-info'}>You have not purchased a signal yet</h5>
                        <Link to='/dashboard/buy-signal' className={'btn btn-outline-success'}>Do you want to buy a
                            signal?</Link>
                    </div>
                    : data ? (
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Symbol</th>
                                    <th>Time</th>
                                    <th>Action</th>
                                    <th>Target(s)</th>
                                    <th>Stop(s)</th>
                                </tr>
                                </thead>
                                <tbody>
                                {mySignal.map((item, index) => (
                                    <tr key={index} className={item.deActive ? 'opacity-40' : 'opacity-100'}>
                                        <td>{index + 1}</td>
                                        <td>{item.symbol}</td>
                                        <td>{item.time}</td>
                                        <td>{item.action}</td>
                                        <td>
                                            {item.target.map((i, index) => (
                                                <h6 key={index}>{i}</h6>
                                            ))}
                                        </td>
                                        <td>
                                            {item.stop.map((i, index) => (
                                                <h6 key={index}>{i}</h6>
                                            ))}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : null}
        </div>
    );
};

export default TableMySignal;
