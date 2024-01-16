import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import contact from '../assets/contactus.jpg';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi';
import { BsTelephone } from 'react-icons/bs';
import Container from '../Common/Container';
import PageMetaData from '../Common/PageMetaData';

const Appointment = () => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		reset,
		watch,
		formState: { errors }
	} = useForm();

	const onSubmit = async (data) => {
		const appointment = {
			name: data?.name,
			email: data?.email,
			phone: data?.phoneNumber,
			servicetype: data?.serviceInterest,
			serviceInfo: data?.Message,
			timestamp: new Date()
		};

		const res = await axios.post(`${import.meta.env.VITE_SERVER_URL}/appointments`, { ...appointment });

		if (res?.data?.insertedId) {
			// const mailResponse = await axios.post(`${import.meta.env.VITE_SERVER_URL}/mail-to-lawyer`, {
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
	const serviceInterest = watch('serviceInterest');

	return (
		<div className="banner-image bg-[#35878b18] pb-12">
			<PageMetaData
				title="Appointment | LegalCo"
				description="Book legal consultations and appointments with ease on the LegalCO platform. Our appointment page allows you to schedule dedicated sessions with our experienced legal professionals. Take the first step in addressing your legal concerns by securing a convenient and confidential appointment with LegalCO Limited. Explore personalized legal guidance and support tailored to your specific needs."
			/>
			<img className="h-96 object-cover -mt-[100px]" src={contact} alt="Banner" />
			{/* ========== contact section ========== */}
			<Container>
				<div className="contact-section">
					<div className="text-center mt-20 mb-14">
						<h2 className="text-2xl md:text-3xl mb-2 font-bold">We Love to Hear from You</h2>
						<p>Please call or fillup appoinment form and we will be happy to assist you.</p>
					</div>

					<div className="md:flex">
						{/*  Form */}
						<div className="lg:w-2/3 mx-auto">
							<form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-6">
								<div className="mb-6">
									<label htmlFor="name" className="block mb-1 text-[14px] font-semibold">
										Name*
									</label>
									<input
										{...register('name', {
											required: 'Name is required'
										})}
										type="text"
										id="name"
										placeholder="Enter your name"
										className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
											errors.name ? 'border-red-500' : 'focus:border-[#35878bb6]'
										}`}
									/>
									{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
								</div>

								{/* <div className="mb-6">
                           <label
                              htmlFor="email"
                              className="block mb-1 text-[14px] font-semibold"
                           >
                              Email*
                           </label>
                           <input
                              {...register("email", {
                                 required: "Email is required",
                                 pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                 },
                              })}
                              type="email"
                              id="email"
                              placeholder="Enter your email"
                              className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
                                 errors.email
                                    ? "border-red-500"
                                    : "focus:border-[#35878bb6]"
                              }`}
                           />
                           {errors.email && (
                              <p className="text-red-500 text-sm mt-1">
                                 {errors.email.message}
                              </p>
                           )}
                        </div> */}

								<div className="mb-6">
									<label htmlFor="phoneNumber" className="block mb-1 text-[14px] font-semibold">
										Phone Number*
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
										className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
											errors.phoneNumber ? 'border-red-500' : 'focus:border-[#35878bb6]'
										}`}
									/>
									{errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
								</div>

								<div className="mb-6">
									<label htmlFor="serviceInterest" className="block mb-1 text-[14px] font-semibold">
										What service are you interested in?
									</label>
									<select
										{...register('serviceInterest', {
											required: 'Service Interest is required'
										})}
										id="serviceInterest"
										className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] ${
											errors.serviceInterest ? 'border-red-500' : 'focus:border-[#35878bb6]'
										}`}
									>
										<option value="" className="text-[15px]">
											Select a service
										</option>
										<option value="Business Set-up & Start-up Support (RJSC)" className="text-[15px]">
											Business Set-up & Start-up Support (RJSC)
										</option>
										<option value="VAT, Tax & Compliance" className="text-[15px]">
											VAT, Tax & Compliance
										</option>
										<option value="Legal Drafting" className="text-[15px]">
											Legal Drafting
										</option>
										<option value="Rajuk & Customs Matter" className="text-[15px]">
											Rajuk & Customs Matter
										</option>
										<option value="Land & Property (Registration & Sale)" className="text-[15px]">
											Land & Property (Registration & Sale)
										</option>
										<option value="Abroad Legal Support, Immigration & Work Permit" className="text-[15px]">
											Abroad Legal Support
										</option>
										<option value="Immigration & Work Permit" className="text-[15px]">
											Immigration & Work Permit
										</option>
										<option value="Banking & Finance" className="text-[15px]">
											Banking & Finance
										</option>
										<option value="Consult with Legal Expert" className="text-[15px]">
											Consult with Legal Expert
										</option>
										<option value="Others" className="text-[15px]">
											Others
										</option>
									</select>
									{errors.serviceInterest && (
										<p className="text-red-500 text-sm mt-1">{errors.serviceInterest.message}</p>
									)}
								</div>

								{serviceInterest === 'Others' && (
									<div className="mb-6">
										<label htmlFor="serviceDetails" className="block mb-1 text-[14px] font-semibold">
											Service Details*
										</label>
										<textarea
											{...register('serviceDetails', {
												required: 'Service Details are required'
											})}
											id="serviceDetails"
											rows={4}
											placeholder="Enter Service Details"
											className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
												errors.serviceDetails ? 'border-red-500' : 'focus:border-[#35878bb6]'
											}`}
										></textarea>
										{errors.serviceDetails && (
											<p className="text-red-500 text-sm mt-1">{errors.serviceDetails.message}</p>
										)}
									</div>
								)}

								<div className="mb-6">
									<label htmlFor="Message" className="block mb-1 text-[14px] font-semibold">
										Message*
									</label>
									<textarea
										{...register('Message', {
											required: 'Message is required'
										})}
										id="Message"
										rows={4}
										placeholder="Enter a Message"
										className={`w-full px-4 py-[10px] bg-gray-100 border border-[#35878b4d] focus:outline-none rounded-md text-[14px] placeholder:text-[14px] ${
											errors.Message ? 'border-red-500' : 'focus:border-[#35878bb6]'
										}`}
									></textarea>
									{errors.Message && <p className="text-red-500 text-sm mt-1">{errors.Message.message}</p>}
								</div>

								<div className="mb-10 text-center">
									<button
										type="submit"
										className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300"
									>
										Request Appoinment
									</button>
								</div>
							</form>
						</div>

						{/*  Contact information */}
						<div className="md:w-2/5 mx-auto px-4 mt-10">
							<div className="p-4 rounded-lg bg-[#35878b18] border border-[#35878b33] shadow-md shadow-[#35878b33]">
								<h2 className="text-lg font-semibold mb-4">Contact Information</h2>
								<div className="space-y-2">
									<p className="text-gray-600 flex items-center">
										<span className="text-2xl font-extrabold">
											<TfiEmail />
										</span>
										<span className="text-[15px] ml-3">Admin@legalco.com</span>
									</p>
									<div className="text-gray-600 flex flex-wrap gap-2 items-center">
										<p className="flex gap-2">
											<span className="text-2xl font-extrabold">
												<BsTelephone />
											</span>
											<span className="text-[15px] ">+880 9697308988</span>
										</p>
										<p className="flex gap-2">
											<span className="text-2xl font-extrabold">
												<BsTelephone />
											</span>
											<span className="text-[15px] ">+8801 988 688 988</span>
										</p>
									</div>
									<p className="text-gray-600 flex items-start">
										<span className="text-3xl font-extrabold">
											<TfiLocationPin />
										</span>
										<span className="text-[15px] ml-2">
											SEL Trident Tower, Suite # 907 (9th Floor), 57, Purana Paltan, (VIP Road), Dhaka - 1000.
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Appointment;
