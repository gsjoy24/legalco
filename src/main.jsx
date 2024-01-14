import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// const App = lazy(() => import('./App.jsx'));
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './pages/AboutUs.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/about-us',
				element: <AboutUs />
			}
		]
	}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
