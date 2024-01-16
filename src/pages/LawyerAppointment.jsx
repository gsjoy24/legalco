import { useForm } from 'react-hook-form';
import contact from '../assets/contactus.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import LoadingPage from '../shared/Loading';
import { useLoaderData, useNavigate } from 'react-router-dom';
import PageMetaData from '../Common/PageMetaData';

const LawyerAppointment = ({ params }) => {
	const lawyerDetails = useLoaderData();
	const navigate = useNavigate();
	const { address, email } = lawyerDetails?.contacts || {};
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
	} = useForm();
	const onSubmit = async (data) => {
		const appointment = {
			name: data?.name,
			// email: data?.email,
			phone: data?.phoneNumber,
			lawyerName: lawyerDetails?.name,
			lawyerContactInfo: lawyerDetails?.contacts,
			lawyerImage: lawyerDetails?.image,
			serviceInfo: data?.Message,
			timestamp: new Date()
		};
		const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/lawyerAppointments`, {
			...appointment
		});

		if (res?.data?.insertedId) {
			// const mailResponse = await axios.post('/api/mail-to-lawyer', {
			// 	...appointment
			// });

			// if (mailResponse?.data?.success) {
			// }
			reset();
			Swal.fire({
				title: 'Success',
				text: 'You get all service in LEGALCO app. Please download this.',
				icon: 'success',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Download Now'
			}).then((result) => {
				if (result.isConfirmed) {
					window.open('https://www.youtube.com/watch?v=34UMor0gQEA', '_blank');
				} else {
					navigate('/');
				}
			});
		}
	};

	return (
		<div className="banner-image">
			{lawyerDetails ? (
				<PageMetaData
					title={`${lawyerDetails?.name} | Appointment | LegalCO`}
					description="Book legal consultations and appointments with ease on the LegalCO platform. Our appointment page allows you to schedule dedicated sessions with our experienced legal professionals. Take the first step in addressing your legal concerns by securing a convenient and confidential appointment with LegalCO Limited. Explore personalized legal guidance and support tailored to your specific needs."
				/>
			) : (
				<LoadingPage />
			)}
			<img className="h-96 object-cover -mt-[100px]" src={contact} alt="Banner" />
			<div className="contact-section">
				<div className="text-center mt-20">
					<h2 className="text-2xl mb-2">We Love to Hear from You</h2>
					<p>Please call or fillup appoinment form and we will be happy to assist you.</p>
				</div>

				<div className="flex">
					{/*  Form */}
					{lawyerDetails ? (
						<>
							<div className="w-2/3  mx-auto px-4">
								<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-6">
									<div className="mb-4">
										<label htmlFor="name" className="block mb-2 text-gray-600 font-semibold">
											Name
										</label>
										<input
											{...register('name', {
												required: 'First Name is required'
											})}
											type="text"
											id="name"
											placeholder="First Name"
											className={`w-full px-4 py-2 border focus:outline-none ${
												errors.firstName ? 'border-red-500' : 'focus:border-blue-400'
											}`}
										/>
										{errors.name && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
									</div>
									{/* <div className="mb-4">
										<label htmlFor="email" className="block mb-2 text-gray-600 font-semibold">
											Email
										</label>
										<input
											{...register('email', {
												pattern: {
													value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
													message: 'Invalid email address'
												}
											})}
											type="email"
											id="email"
											placeholder="Enter your Email"
											className={`w-full px-4 py-2 border  focus:outline-none ${
												errors.email ? 'border-red-500' : 'focus:border-blue-400'
											}`}
										/>
										{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
									</div> */}
									<div className="mb-4">
										<label htmlFor="phoneNumber" className="block mb-2 text-gray-600 font-semibold">
											Phone Number
										</label>
										<input
											{...register('phoneNumber', {
												required: 'Phone Number is required',
												pattern: {
													value: /^[0-9]{11}$/,
													message: 'Invalid phone number'
												}
											})}
											type="tel"
											id="phoneNumber"
											placeholder="Enter your Phone Number (11 digits)"
											className={`w-full px-4 py-2 border  focus:outline-none ${
												errors.phoneNumber ? 'border-red-500' : 'focus:border-blue-400'
											}`}
										/>
										{errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
									</div>
									<div className="mb-4">
										<label htmlFor="name" className="block mb-2 text-gray-600 font-semibold">
											Lawyer Name
										</label>
										<input
											type="text"
											id="name"
											readOnly
											value={lawyerDetails?.name}
											placeholder="Lawyer Name"
											className={`w-full px-4 py-2 border focus:outline-none ${
												errors.firstName ? 'border-red-500' : 'focus:border-blue-400'
											}`}
										/>
									</div>

									<div className="mb-4">
										<label htmlFor="Message" className="block mb-2 text-gray-600 font-semibold">
											Message
										</label>
										<textarea
											{...register('Message', {
												required: 'Message is required'
											})}
											id="Message"
											rows={4}
											placeholder="Enter a Message"
											className={`w-full px-4 py-2 border  focus:outline-none ${
												errors.Message ? 'border-red-500' : 'focus:border-blue-400'
											}`}
										></textarea>
										{errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message.message}</p>}
									</div>

									<div className="mb-10 text-center">
										<button
											type="submit"
											className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-4 rounded-full duration-300"
										>
											Request Appoinment
										</button>
									</div>
								</form>
							</div>

							{/*  Contact information */}
							<div className="w-1/3 mx-auto px-4 mt-10 mr-7">
								<div className="p-4 border rounded-lg bg-gray-100">
									<h2 className="text-lg font-semibold mb-4">Contact Information</h2>
									<p className="text-gray-600">
										<span className="font-bold">Email: </span> {email}
									</p>
									<p className="text-gray-600">
										<span className="font-bold">Address: </span> {address}
									</p>
								</div>
							</div>
						</>
					) : (
						<LoadingPage />
					)}
				</div>
			</div>
		</div>
	);
};

export default LawyerAppointment;
