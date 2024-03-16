import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// import App from './App.jsx';
// import ErrorPage from './components/ErrorPage.jsx';
// import AboutUs from './pages/AboutUs.jsx';
// import Appointment from './pages/Appointment.jsx';
// import BlogDetails from './pages/BlogDetails.jsx';
// import Blogs from './pages/Blogs.jsx';
// import ClientBillOfRights from './pages/ClientBillOfRights.jsx';
// import ContactUsPage from './pages/ContactUsPage.jsx';
// import Home from './pages/Home.jsx';
// import LawyerAppointment from './pages/LawyerAppointment.jsx';
// import LawyerDetails from './pages/LawyerDetails.jsx';
// import PrivacyAndPolicy from './pages/PrivacyAndPolicy.jsx';
// import RefundAndRefundPolicy from './pages/RefundAndRefundPolicy.jsx';
// import ServiceDetails from './pages/ServiceDetails.jsx';
// import TermsAndCondition from './pages/TermsAndCondition.jsx';

// using dynamic import to load the components
const App = React.lazy(() => import('./App.jsx'));
const ErrorPage = React.lazy(() => import('./components/ErrorPage.jsx'));
const AboutUs = React.lazy(() => import('./pages/AboutUs.jsx'));
const Appointment = React.lazy(() => import('./pages/Appointment.jsx'));
const BlogDetails = React.lazy(() => import('./pages/BlogDetails.jsx'));
const Blogs = React.lazy(() => import('./pages/Blogs.jsx'));
const ClientBillOfRights = React.lazy(() => import('./pages/ClientBillOfRights.jsx'));
const ContactUsPage = React.lazy(() => import('./pages/ContactUsPage.jsx'));
const Home = React.lazy(() => import('./pages/Home.jsx'));
const LawyerAppointment = React.lazy(() => import('./pages/LawyerAppointment.jsx'));
const LawyerDetails = React.lazy(() => import('./pages/LawyerDetails.jsx'));
const PrivacyAndPolicy = React.lazy(() => import('./pages/PrivacyAndPolicy.jsx'));
const RefundAndRefundPolicy = React.lazy(() => import('./pages/RefundAndRefundPolicy.jsx'));
const ServiceDetails = React.lazy(() => import('./pages/ServiceDetails.jsx'));
const TermsAndCondition = React.lazy(() => import('./pages/TermsAndCondition.jsx'));

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
				path: '/services/:id',
				element: <ServiceDetails />,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/services/${params.id}`)
			},
			{
				path: '/lawyers/:id',
				element: <LawyerDetails />,
				loader: ({ params }) => fetch(`${import.meta.env.VITE_SERVER_URL}/lawyers/${params.id}`)
			},
			{
				path: '/lawyer-appointment/:id',
				element: <LawyerAppointment />,
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
			},
			{
				path: '/terms-and-condition',
				element: <TermsAndCondition />
			},
			{
				path: '/client-bill-of-rights',
				element: <ClientBillOfRights />
			}
		],
		errorElement: <ErrorPage />
	}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
