import {useToggle} from "../../customHooks/useToggle";

const Toggle = () => {

    const {increment, decrement, reset, state} = useToggle(50);

    return (
        <div className='row'>
            <div className="col-12 d-flex justify-content-center m-3">
                <button className='btn btn-danger m-3' onClick={decrement}>-</button>
                <button className='btn btn-primary m-3' onClick={increment}>+</button>
                <h3 className='m-3'>{state}</h3>
                <button className='btn btn-warning m-3' onClick={reset}>Reset</button>
            </div>
        </div>
    );

}

export default Toggle;