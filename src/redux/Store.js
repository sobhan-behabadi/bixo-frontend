import {configureStore, createSlice} from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        _id: '',
        name: '',
        email: '',
        isAdmin: false,
        balance: 0,
        signal: [],
        token: ''
    },
    reducers: {
        login: (state, action) => {
            //action = {id : 1, ....}
            const {_id, name, email, isAdmin, balance, signal, token} = action.payload;
            state._id = _id;
            state.name = name;
            state.email = email;
            state.isAdmin = isAdmin;
            state.balance = balance;
            state.token = token;
            state.signal = signal;
        },
        logout: (state) => {
            state._id = '';
            state.name = '';
            state.email = '';
            state.isAdmin = false;
            state.balance = 0;
            state.signal = [];
            state.token = '';
        }
    }
})

const showSignalForBuySlice = createSlice({
    name: 'showSignalForBuy',
    initialState: {
        signal: [
            {
                id: '',
                price: 0,
                symbol: '',
                time: ''
            },
        ],
    },

    reducers: {
        showSignal: (state, action) => {
            // console.log(action.payload)
            // let flatArray = Object.values(action.payload).flat();
            // console.log('flat array : ', flatArray)

            action.payload?.map(i => {
                state.signal.push(i)
            })

            // console.log('state', state.state)
        }
    }
})

export const {login, logout} = userSlice.actions;
export const {showSignal} = showSignalForBuySlice.actions;

export const Store = configureStore({
    reducer: {
        user: userSlice.reducer,
        showSignalForBuy: showSignalForBuySlice.reducer,
    }
})