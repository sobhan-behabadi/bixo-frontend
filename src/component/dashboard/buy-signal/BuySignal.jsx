import Card from "./Card";
import useShowSignal from "../../../customHooks/useShowSignal";
import Loading from "../../loading-erorr-and/Loading";
import Error from "../../loading-erorr-and/Error";
import {useEffect, useState} from "react";

const BuySignal = () => {

    //query
    const {data, isPending, isError} = useShowSignal();
    const [buySignal, setBuySignal] = useState([]);

    useEffect(() => {
        if (data) {

            const sig = data?.data.data.filter(item => !item.deActive)
            setBuySignal(sig)
        }
    }, [data]);


    return (
        <div className={"container"}>
            {isError ? (
                <Error/>
            ) : isPending ? (
                <Loading/>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Symbol</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>get Signal</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data
                            ? buySignal.map((card, index) => (
                                <Card
                                    count={index + 1}
                                    id={card.id}
                                    time={card.time}
                                    price={card.price}
                                    symbol={card.symbol}
                                />
                            ))
                            : null}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default BuySignal;
