import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.esm';
import 'bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Provider} from "react-redux";
import {Store} from "./redux/Store";



const queryClient = new QueryClient(
    {
    defaultOptions: {
        queries: {
            // staleTime: 2000,
            // cacheTime: 2000,
            // gcTime : 2000,
        }
    }
}
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                    <ReactQueryDevtools/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);

