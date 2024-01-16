import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import emailIcon from '../assets/contact-us/open-mail.png';
import toast from 'react-hot-toast';
import Container from '../Common/Container';
import PageMetaData from '../Common/PageMetaData';

const ContactUsPage = () => {
	const form = useRef();
	const [isSending, setIsSending] = useState(false);

	const sendEmail = (e) => {
		setIsSending(true);
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_emailJs_service_id,
				import.meta.env.VITE_emailJs_template_key,
				form.current,
				import.meta.env.VITE_emailJs_public_key
			)
			.then(
				() => {
					toast.success('Message send successfully!');
					setIsSending(false);
					form.current.reset();
				},
				() => {
					toast.error('Something went wrong! Please try again!');
					setIsSending(false);
				}
			);
	};

	return (
		<>
			<PageMetaData
				title="Contact Us | LegalCo"
				description="Connect with LegalCO Limited through our Contact Us page. Reach out for inquiries, feedback, or assistance regarding our legal services and offerings. Our dedicated team is ready to provide prompt and personalized responses to address your queries. Contact LegalCO today and discover the convenience of efficient communication for all your legal needs."
			/>

			<div className="contact-us-bg h-60 md:h-96 -mt-[100px]">
				<div className="flex items-center justify-center">
					<h2 className="text-3xl md:text-4xl text-white font-serif font-bold absolute top-[20%] md:top-[35%]">
						Get in touch
					</h2>
				</div>
			</div>

			<div className="bg-[#E2EAE5] py-16 md:py-32">
				<Container>
					<div className="grid justify-center grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
						<div className="bg-[#39676a75] min-w-[300px] flex items-center p-8">
							<div className="">
								<img src={emailIcon} alt="Email icon" className="w-36 mx-auto" />
								<p className="text-lg text-center leading-8 mt-8">
									If you have questions or just want to get in touch, use th from below. We look forward to hearing from
									you!
								</p>
							</div>
						</div>

						{/* Contact From */}
						<div className="bg-white min-w-[300px p-5">
							<h2 className="text-3xl text-[#495C6A] text-center` font-semibold mb-4">Contact Us</h2>
							<form ref={form} onSubmit={sendEmail}>
								{/* name */}
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">What is your name? *</span>
									</label>
									<input
										type="text"
										required
										placeholder="Name"
										name="name"
										className="`w-full px-4 py-[10px] border border-[#35878b4d] focus:border-[#225559] focus:outline-none focus:shadow-md rounded-md text-[14px] placeholder:text-[14px] "
									/>
								</div>
								{/* email */}
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">What is your email? *</span>
									</label>
									<input
										type="email"
										required
										placeholder="Enter your mail "
										name="email"
										className="`w-full px-4 py-[10px] border border-[#35878b4d] focus:border-[#225559] focus:outline-none focus:shadow-md rounded-md text-[14px] placeholder:text-[14px] "
									/>
								</div>
								{/* message */}
								<div className="form-control w-full">
									<label className="label">
										<span className="label-text">Your message *</span>
									</label>
									<textarea
										type="text"
										required
										placeholder="message"
										name="message"
										className="`w-full px-4 py-[10px] border border-[#35878b4d] focus:border-[#225559] focus:outline-none focus:shadow-md rounded-md text-[14px] placeholder:text-[14px] min-h-[100px]"
									/>
								</div>

								<div className="flex justify-center mt-3">
									<button
										type={'submit'}
										disabled={isSending}
										className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-[17px] text-white font-semibold hover:text-[#35868b] py-2 px-7 rounded-full duration-300"
									>
										{isSending ? 'Sending' : 'Send Message'}
									</button>
								</div>
							</form>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
};

export default ContactUsPage;
