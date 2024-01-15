import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// using lazy loading to improve user experience
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const Appointment = lazy(() => import('./pages/Appointment.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/appointment',
				element: <Appointment />
			},
			{
				path: '/blogs',
				element: <Blogs />,
				children: [
					{
						path: '/blogs/:id',
						element: <Blogs />
					}
				]
			},
			{
				path: '/about-us',
				element: <AboutUs />
			}
		]
	}
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
