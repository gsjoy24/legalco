import { Link } from 'react-router-dom';
import Container from '../../Common/Container';
import bg from '../../assets/image.jpg';

const Banner = () => {
	return (
		<div className="bg_banner min-h-[105vh] flex items-center -mt-[120px]">
			<Container>
				<div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-20 md:mt-10">
					<div className="text-white md:mt-5 lg:mt-16">
						<h1 className="text-2xl md:text-4xl font-bold ">
							Bangladesh’s <span className="text-[#F59E0B]">No.1</span> app for legal solutions tailored to your legal
							needs.
						</h1>
						<p className="mt-6 mb-10">Really Unbelievable Solutions for all Legal Cases. Connect with legal experts.</p>
						<Link
							href="/appointment"
							className="bg-[#225559] hover:bg-transparent border-2 border-transparent hover:border-[#225559] text-white hover:text-[#35868b] py-2 px-6 rounded-full duration-300 my-5 block w-fit"
						>
							Appointment
						</Link>
					</div>

					{/* Add video embed here */}
					<div className="order-first lg:order-last mt-32 sm:mt-32 md:mt-28 lg:mt-0">
						<video
							className="md:w-[1500px] h-full lg:max-h-[350px] object-cover rounded-xl"
							controls
							controlsList="nodownload"
							src="https://res.cloudinary.com/dts36zkpn/video/upload/v1697824541/2_wmgul0.mp4"
						></video>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Banner;
