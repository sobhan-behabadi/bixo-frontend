import {useReducer, useRef} from "react";
import {formReducer, initial} from "../../reducer/formReducer";

const Form = () => {

    const tagRef = useRef()
    const [state, dispatch] = useReducer(formReducer, initial)


    const handleInputChange = (e) => {
        dispatch({type: 'changeInput', data: {name: e.target.name, value: e.target.value}})
    }


    const handleTags = (e) => {
        e.preventDefault();
        const tags = tagRef.current.value.split(',');
        tags.forEach(t => {
            dispatch({type: 'addTag', data: t})
        })

    }
    console.log(state)

    return (
        <div className='d-flex justify-content-center'>
            <form>
                <input className='form-control mb-3' name='title' type="text" placeholder='title'
                       onChange={handleInputChange}/>
                <input className='form-control mb-3' name='description' type="text" placeholder='description'
                       onChange={handleInputChange}/>
                <input className='form-control mb-3' name='price' type="number" placeholder='qesmat'
                       onChange={handleInputChange}/>
                <select className='form-select mb-3' name='category' onChange={handleInputChange}>
                    <option value="bag">bag</option>
                    <option value="shoes">shoes</option>
                    <option value="dress">dress</option>
                </select>
                <p>tag</p>
                <textarea ref={tagRef} name='tags' className='form-control mb-3' maxLength={100}></textarea>
                <button className='btn btn-primary mb-3' onClick={handleTags}>select tag</button>
                {state.tags.map((tag, index) => (
                    <div className='row'>
                        <button className='btn btn-danger mb-2' key={index} onClick={(e) => {
                            e.preventDefault();
                            dispatch({type: 'removeTag', data: tag})
                        }}>{tag}</button>
                    </div>

                ))}
                <div className='mb-3 d-flex justify-content-between'>
                    <button className='btn btn-primary' onClick={(e) => {
                        e.preventDefault();
                        dispatch({type: 'increase'})
                    }}>+
                    </button>
                    {state.quantity}
                    <button className='btn btn-danger' onClick={(e) => {
                        e.preventDefault();
                        dispatch({type: 'decrease'})
                    }}>-
                    </button>
                </div>
                <button className='btn btn-lg btn-primary'>Submit</button>
            </form>
        </div>
    )
}


export default Form;