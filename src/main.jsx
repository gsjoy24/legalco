import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// using lazy loading to improve user experience
const App = lazy(() => import('./App.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const BlogDetails = lazy(() => import('./pages/BlogDetails.jsx'));
const Appointment = lazy(() => import('./pages/Appointment.jsx'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const LawyerDetails = lazy(() => import('./pages/LawyerDetails.jsx'));
const PrivacyAndPolicy = lazy(() => import('./pages/PrivacyAndPolicy.jsx'));
const RefundAndRefundPolicy = lazy(() => import('./pages/RefundAndRefundPolicy.jsx'));

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
				path: '/lawyers/:id',
				element: <LawyerDetails />,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/lawyers/${params.id}`)
			},
			{
				path: '/appointment',
				element: <Appointment />
			},
			{
				path: '/blogs',
				element: <Blogs />
			},
			{
				path: '/blogs/:id',
				element: <BlogDetails />,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/blogs/${params.id}`)
			},
			{
				path: '/contact-us',
				element: <ContactUsPage />
			},
			{
				path: '/about-us',
				element: <AboutUs />
			},
			{
				path: '/privacy-and-policy',
				element: <PrivacyAndPolicy />
			},
			{
				path: '/return-and-refund-policy',
				element: <RefundAndRefundPolicy />
			}
		]
	}
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
