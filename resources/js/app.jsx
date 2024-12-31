import './bootstrap';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import routes from './routes';

const App = () => {
    return (
        <RouterProvider router={routes} />
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <App />
);
