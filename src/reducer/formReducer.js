export const initial = {
    title: false,
    description: '',
    price: false,
    category: '',
    tags: [],
    quantity: 0,

}


export const formReducer = (state, action) => {

    switch (action.type) {
        case "changeInput" :
            return {...state, [action.data.name]: action.data.value}
        case "addTag":
            return {...state, tags: [...state.tags, action.data]}
        case "removeTag":
            return {...state, tags: state.tags.filter(tag => tag !== action.data)}
        case "increase" :
            return {...state, quantity: state.quantity + 1}
        case 'decrease' :
            return {...state, quantity: state.quantity - 1}
        default :
            return state;
    }

}


